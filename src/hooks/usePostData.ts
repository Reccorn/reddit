import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { RootState } from '../store/reducer';
import { useSelector } from 'react-redux';

interface IPostData {
  id?: string
  author?: string
  title?: string
  rating?: number
  commentsCount?: number
  avatar?: string
  previewImg?: string
  datePostUtc?: number
}


export const usePostData = () => {
  const [data, setData] = useState<Array<IPostData>>([]);

  const token = useSelector<RootState, string>(state => state.token.token);

  useEffect(() => {
    if(token && token.length > 0 && token !== 'undefined') {
      axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((resp) => {
        const userData = resp.data.data.children;
        setData(userData);
      })
      .catch(console.log)
    }
  }, [token])

  return [data];
};
