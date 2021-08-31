import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashbard from './Dashboard'
import MyTasks from './MyTasks'
const RouterRoute=()=>{
    return(
        <Router>
            <Switch>
                <Route path='/'  exact component={Dashbard}/>
                <Route path='/myTasks' exact component={MyTasks}/>
            </Switch>
        </Router>
    )
}

export default RouterRoute