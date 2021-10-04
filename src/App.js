import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Groups from './pages/Groups'
import GroupFull from './pages/GroupFull'
import Concurents from './pages/Concurents'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { loadUsersAction } from './state/actions'
import userJSON from './data/user.json'
import { useDispatch } from 'react-redux'

/* Routes */
const routes = [
  { path: '/', Component: Groups },
  { path: '/groups/:id', Component: GroupFull },
  { path: '/profile', Component: Profile },
  { path: '/concurents', Component: Concurents }
]

function App(props) {
  
  // Load userinfo
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUsersAction(userJSON))
  },[])


  return (
    <div className="container">
      <div className="container_image"></div>
      <Router>
        <Header />
        <Switch>
          {routes.map(({ path, Component }) => {
            return <Route key={path} exact path={path} route={props} component={Component} />
          })}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App