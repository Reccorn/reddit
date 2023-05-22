import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { postContext } from '../context/postContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import axios from 'axios';
import { generateRandomString } from '../../utils/react/generateRandomIndex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Post } from '../Post';


export function CardsList() {
  // const data = useContext(postContext);

  const token = useSelector<RootState>(state => state.token.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [scrollCounter, setScrollCounter] = useState(0);

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit: 15,
            after: nextAfter
          }
        });
        console.log(children);
        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...children));
        setScrollCounter(scrollCounter + 1);
      } catch (error) {
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && scrollCounter < 2) {
        load();
      }
    }, {
      rootMargin: '10px'
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [token, bottomOfList.current, nextAfter, scrollCounter]);

  return (
    <>
      <ul className={styles.cardsList}>
        {posts.length === 0 && !loading && !errorLoading && (
          <div>😵‍💫 Хмм... здесь пока пусто</div>
        )}

        {
          posts.map(item =>
            <Card
              key={generateRandomString()}
              itemId={item.data.id}
              image={(item.data.preview) ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&') : 'https://st.depositphotos.com/1000122/2016/i/450/depositphotos_20163697-stock-photo-small-scottish-straight-kitten-walking.jpg'}
              title={item.data.title}
              avatar={(item.data.sr_detail.icon_img) ? item.data.sr_detail.icon_img : 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg'}
              userName={item.data.author}
              rating={item.data.ups}
              comments={item.data.num_comments}
              createDate={item.data.created}
            >{item}</Card>)
        }

        {scrollCounter >= 2 && (
          <div className={styles.moreBtn} onClick={() => setScrollCounter(0)}>Загрузить ещё</div>
        )}

        <div ref={bottomOfList} />

        {loading && (
          <div style={{ textAlign: 'center', padding: '15px 0' }}>
            Загрузка...
          </div>
        )}

        {errorLoading && (
          <div role="alert" style={{ textAlign: 'center', padding: '15px 0' }}>
            {errorLoading}
          </div>
        )}
        <Routes>
          <Route path=":id"
            loader={({ params }) => {
              console.log(params.id);
            }}
            element={<Post />}
          />
        </Routes>
      </ul>
    </>
  );
}
