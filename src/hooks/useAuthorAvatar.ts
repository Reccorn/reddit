import axios from "axios";
import { useEffect, useState } from "react";

export function useAuthorAvatar(username: string | undefined) : string {
  const [authorAvatar, setAuthorAvatar] = useState('');

  useEffect(() => {
    axios.get(
      `https://www.reddit.com/user/${username}/about.json`
    ).then((res) => {
      setAuthorAvatar(res.data.data['snoovatar_img'])
    }).catch(console.log)
  }, [username]);

  return authorAvatar;
}