import { FC } from 'react'
import { InterPost } from "./InterPost"
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Box
} from '@mui/material'

interface PostPropsTypes {
    post: InterPost
}

const Post: FC<PostPropsTypes> = ({ post }) => {
    const users = useSelector((state: RootState) => state.users.list);
    const currentUser = useSelector((state: RootState) => state.users.current);
    const user = users.find(({ id }) => id === post.authorId);


    return (
        <ListItem
        sx={{ 
            display: 'flex', 
            justifyContent: currentUser?.id === post.authorId ? 'end' : 'start' 
            }}>
            <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: currentUser?.id === post.authorId ? 'row-reverse' : 'row',
                alignItems: 'center',
                }}>
                <ListItemAvatar sx={{ minWidth: 0, width: '40px' }}>
                    <Avatar alt="Sasha Grimes" src={user?.avatar} />
                </ListItemAvatar>
                <ListItemText 
                sx={{ 
                    padding: '10px 15px', 
                    backgroundColor: 'pink', 
                    borderRadius: '15px',
                    margin: '15px'
                    }} 
                primary={post.text} />
            </Box>
        </ListItem>
    )
}

export default Post