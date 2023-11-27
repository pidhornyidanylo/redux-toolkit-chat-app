import { useEffect } from 'react'
import { useSelector } from "react-redux"
import { RootState, useStoreDispatch } from '../../store/store'
import { getPosts } from '../../store/posts';
import { List } from '@mui/material';
import Post from '../Post/Post';

const PostsList = () => {
  const dispatch = useStoreDispatch();
  const posts = useSelector((state: RootState) => state.posts.list);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column' }}>
        {posts.map(post => <Post key={post.id} post={post} />)}
    </List>
  )
}

export default PostsList
