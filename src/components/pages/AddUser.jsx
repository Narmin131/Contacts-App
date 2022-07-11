import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../context/Context'
import { v4 as uuid } from 'uuid'

const AddUser = () => {
  const [name,setName] = useState("")
  const [number,setNumber]=useState('')
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

 const ChangeName = (e) =>{
   setName(e.target.value);
 }

 const ChangeNumber = (e) =>{
   setNumber(e.target.value);
 }

 const onSubmit = (e)=>{
   e.preventDefault();
   const newUser ={
     id:uuid(),
     name,
     number
   }
   addUser(newUser);
   history.push('/')
 }


  return (
    <div>
       <div style={{ maxWidth: "23rem", margin: "4rem auto", border:"2px solid #EEEEEE",padding:"30px 10px" }}>
      <h1 style={{fontWeight:"bold",fontSize:"35px"}}>Add a new contact</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" onChange={ChangeName} value={name}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Number</label>
          <input type="text" className="form-control" onChange={ChangeNumber} value={number}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" type="submit" className="btn btn-danger mx-2">Cancel</Link>
      </form>
    </div>
    </div>
  )
}

export default AddUser
