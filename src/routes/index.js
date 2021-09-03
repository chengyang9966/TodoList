import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashbard from './Dashboard'
import MyTasks from './MyTasks';
import CompleteTasks from "./CompleteTasks";
const RouterRoute=()=>{
    return(
        <Router>
            <Switch>
                <Route path='/'  exact component={Dashbard}/>
                <Route path='/myTasks' exact component={MyTasks}/>
                <Route path='/completeTasks' exact component={CompleteTasks}/>
            </Switch>
        </Router>
    )
}

export default RouterRoute