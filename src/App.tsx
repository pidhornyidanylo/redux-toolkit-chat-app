import { CssBaseline, Container, Box } from "@mui/material"
import UsersList from "./components/UsersList/UsersList"
import PostsList from "./components/PostsList/PostsList"
import Input from "./components/Input/Input"

function App() {

  return (
    <>
      <CssBaseline />
      <Container 
        maxWidth='lg' 
        sx={{ 
          display: 'flex', 
          height: '100%' 
          }}>
        <Box
          sx={{
            width: '30%',
            height: '100%',
            marginRight: '20px'
          }}>
          <UsersList />
        </Box>
        <Box
          sx={{
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid lightgray',
            borderRight: '1px solid lightgray',
            marginTop: '20px'
          }}>
          <Box sx={{ flex: '1 0 auto', height: '800px', overflowY: 'scroll' }}>
            <PostsList />
          </Box>
          <Box
            sx={{
              height: '100px',
              margin: '0px 5px 0px 5px ',
              borderBottom: '1px solid lightgray',
              borderTop: '1px solid lightgray'
            }}>
            <Input />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App
