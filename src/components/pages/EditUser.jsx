import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { useEffect } from 'react'
import { GlobalContext } from '../../context/Context'

const EditUser = (props) => {
  const { editUser ,users } = useContext(GlobalContext);
  const [selectedUser,setSelectedUser] = useState(
    {
      id:'',
      name:'',
      number:''
    }
  )
  const history = useHistory();
  const currentUserId = props.match.params.id;
  
  const onChange = (e)=>{
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onChangeNum = (e)=>{
    setSelectedUser({ ...selectedUser, [e.target.number]: e.target.value })
  }

  useEffect(()=>{
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onSubmit = (e) =>{
    e.preventDefault();
    editUser(selectedUser);
    history.push("/")
  }

  return (
    <div style={{ maxWidth: "23rem", margin: "4rem auto", border:"2px solid #EEEEEE",padding:"30px 10px" }}>
      <h1 style={{fontWeight:"bold",fontSize:"30px"}}>Edit contact</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" >Name</label>
          <input type="text" className="form-control"  onChange={onChange} defaultValue={selectedUser.name}  />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Number</label>
          <input type="text" className="form-control" defaultValue={selectedUser.number} onChange={onChangeNum}  />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" type="submit" className="btn btn-danger mx-2">Cancel</Link>
      </form>
    </div>
  )
}

export default EditUser