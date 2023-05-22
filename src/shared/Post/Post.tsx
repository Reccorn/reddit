import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentsList } from '../CommentsList';
import styles from './post.css';

export function Post() {
  const node = document.getElementById('modal_root');
  if(!node) return null;
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  let params = useParams();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if(e.target instanceof Node && !modalRef.current?.contains(e.target))
      navigate(-1);
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])


  return ReactDOM.createPortal((
    <div className={styles.modal} ref={modalRef}>
      <h2 >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sint ab, modi laboriosam reprehenderit culpa ex asperiores, quae, quisquam repellat soluta! Repellat inventore saepe perferendis quia debitis commodi ea blanditiis.
      </h2>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dicta veniam officiis illum dolorem ex fugit quidem, sequi labore velit enim facilis exercitationem earum qui mollitia odit aliquam? Cum, aut?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dicta veniam officiis illum dolorem ex fugit quidem, sequi labore velit enim facilis exercitationem earum qui mollitia odit aliquam? Cum, aut?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dicta veniam officiis illum dolorem ex fugit quidem, sequi labore velit enim facilis exercitationem earum qui mollitia odit aliquam? Cum, aut?</p>
      </div>

      <CommentFormContainer />
      <CommentsList postId={params.id} />
    </div>
  ), node);
}
