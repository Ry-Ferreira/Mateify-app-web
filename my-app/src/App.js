import React, { Fragment, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';

// Components
import UserTable from './Components/UserTable';
import SongTable from './Components/SongTable';

function App() {

  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    allUsers();
  }, []);
  
  const allUsers = async() => {
    const database = await fetch("https://ry-mateify-api.herokuapp.com/users");
    const dbJSON = await database.json();
    setUsers(dbJSON);
  };

  const handleToShowSongs = (uuid) => {
    let likedSongs = users.find(u => u._id === uuid).likedSongs;
    setSongs(likedSongs);
  };

  return (
    <Fragment>
      <Box mx={4} my={4} boxShadow={3} p={2}>
        <UserTable users={users} onClickDisc={handleToShowSongs}/>
      </Box>
      <Box mx={4} mt={5} boxShadow={3} p={2}>
        <SongTable songs={songs}/>
      </Box>
    </Fragment>
  );
}

export default App;
