import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/pages/Home"
import AddUser from "./components/pages/AddUser"
import EditUser from "./components/pages/EditUser"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ContextProvider } from './context/Context'

const App = () => {
  return (
    <div>
      <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" component={AddUser}></Route>
          <Route path="/edit/:id" component={EditUser}></Route>
        </Switch>
      </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App