import { useEffect } from 'react';
import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '../../store/store';
import { getUsers } from '../../store/users';
import User from '../User/User';

const UsersList = () => {
  const dispatch = useStoreDispatch(); 
  const users = useSelector((state: RootState) => state.users.list);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {users.map(user => <User key={user.id} user={user} />)}
    </List>
  )
}

export default UsersList
