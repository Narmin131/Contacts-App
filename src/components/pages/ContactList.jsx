import React, { useContext } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GlobalContext } from '../../context/Context';


const ContactList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <List sx={{ flexGrow: 1, maxWidth: "23rem", margin:"0 auto", boxShadow: 3, bgcolor: 'background.paper' }}>
      {users.map(user=>(
        <ListItem alignItems="center" key={user.id}>
        <ListItemAvatar>
          <AccountCircleIcon sx={{fontSize:"40px"}}/>
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {user.number}
            </React.Fragment>
          }
        />
         <Link to={`/edit/${user.id}`} className="btn btn-warning mx-2"><EditIcon/></Link>
         <button className="btn btn-danger" onClick={() => removeUser(user.id)}><DeleteIcon/></button>
      </ListItem>
      ))}
      
      
    </List>
  )
}

export default ContactList