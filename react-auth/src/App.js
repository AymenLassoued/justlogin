import logo from './logo.svg';
import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home'
import Nav from './components/nav'
import Login from './components/login'
import Register from './components/register'
import Forgot from './components/forgot'
import Reset from './components/reset'
import {BrowserRouter, Router, Route} from "react-router-dom"
import { Switch } from 'react-router-dom'
import axios from 'axios';


export default class App extends Component{
  state ={};
  componentDidMount = () => {
       
    axios.get('http://127.0.0.1:8000/api/user').then (
        res => {
            this.setuser (res.data);
                
            
        },
        err => {
             console.log(err)
            }
        )
    };

    setuser = user => {
      this.setState ({
           user: user
       }) 
   };

   render(){
    return (
    <BrowserRouter>

    <div className="App">

    <Nav user={this.state.user} setUser={this.setUser}/>


     <div className="auth-wrapper">
       <div className="auth-inner">
        <Switch>
        <Route exact path="/" component={()=> <Home user={this.state.user} />}/> 
        <Route exact path="/login" component={() => <Login setUser={this.setUser}/>}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/reset/:id" component={Reset} />
        </Switch>
       </div>
     </div>
    </div>
    </BrowserRouter>
    );
   }
}
