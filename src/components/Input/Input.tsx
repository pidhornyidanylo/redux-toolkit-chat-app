import { useState } from 'react' 
import {
    Box,
    ListItemAvatar,
    Avatar
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { addPost } from '../../store/posts';
import { useDispatch } from 'react-redux';
import './Input.css'

const Input = () => {
    const currentUser = useSelector((state: RootState) => state.users.current)
    const dispatch = useDispatch();
    const [ text, setText ] = useState('');
    const handleClick = () => {
        text.length&&dispatch(addPost({ text: text, authorId: currentUser.id }))
        setText('');
    }
    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
            <ListItemAvatar sx={{ display: 'flex', justifyContent: 'end' }}>
                <Avatar alt="Sasha Grimes" src={currentUser.avatar} sx={{ width: '50px', height: '50px' }} />
            </ListItemAvatar>
            <input
                style={{
                    flex: '1',
                    margin: '0 20px',
                    height: '50%',
                    border: '1px solid lightgray',
                    borderRadius: '15px',
                    padding: '10px 15px'
                }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder='Message'
            />
            <SendIcon
                onClick={() => handleClick()}
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    marginRight: '20px',
                    cursor: 'pointer'
                }} />
        </Box>
    )
}

export default Input
