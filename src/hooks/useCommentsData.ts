import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

interface ICommentsData {
  data: ICommentsProps;
  kind: string; 
}

interface ICommentReplies {
  data: IReplyChildren
}

interface IReplyChildren {
  children: Array<IRepliesData>;
}

interface IRepliesData {
  data: ICommentsProps;
}

interface ICommentsProps {
  author?: string;
  body?: string;
  kind?: string;
  created?: number;
  replies?: "" | ICommentReplies;
  id: string;
}

export const useCommentsData = (postId: string | undefined): Array<ICommentsData> => {
  const [data, setData] = useState([]);

  const token = useSelector<RootState, string>(state => state.token.token);

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined' && postId) {
      axios.get(`https://oauth.reddit.com/comments/${postId}`, {
        params: { limit: 10 },
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((resp) => {
          const commentsData = resp.data[1].data.children;
          // console.log(commentsData)
          setData(commentsData);
        })
        .catch(console.log)
    }
  }, [token])

  return data;
};