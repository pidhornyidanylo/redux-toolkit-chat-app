import { FC } from 'react'
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@mui/material'
import { InterUser } from './InterUser'
import { useDispatch } from 'react-redux'
import { changeCurrent } from '../../store/users'

interface UserPropsType {
    user: InterUser
}

const User: FC<UserPropsType> = ({ user }) => {
    const dispatch = useDispatch();
    console.log(user);
    return ( 
        <ListItem onClick={() => dispatch(changeCurrent(user.id))} alignItems="center" sx={{ cursor: 'pointer', marginBottom: '10px', borderBottom: '1px solid lightgray' }}>
            <ListItemAvatar>
                <Avatar alt="Sasha Grimes" src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.name} />
        </ListItem>
    )
}

export default User
