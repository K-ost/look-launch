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
          <Route exact path="/" route={props} component={Groups} />
          <Route path="/groups/:id" route={props} component={GroupFull} />
          <Route path="/profile" route={props} component={Profile} />
          <Route path="/concurents" route={props} component={Concurents} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App