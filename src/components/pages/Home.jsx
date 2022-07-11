import React from 'react'
import Header from './Header'
import ContactList from './ContactList'

const Home = () => {
  return (
    <div style={{ maxWidth: "23rem", margin: "4rem auto", boxShadow: 3 }}>
      <Header/>
      <ContactList/>
    </div>
  )
}

export default Home
