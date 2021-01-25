import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import Registro from './Screens/Registro'
import Activate from './Screens/Activate'
import Login from './Screens/Login'
import ForgetPassword from './Screens/Forget'
import Reset from './Screens/Reset'
import Private from './Screens/Private.jsx';
import Admin from './Screens/Admin.jsx';
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import Noticias from './Screens/Noticias';
import Yayaan from './Screens/Yayaan'
import Estres from './Screens/Estres';
import Graph from './Screens/Graph'
import Resumen from './Screens/Resumen'

ReactDOM.render( 
    <BrowserRouter>
    <Switch>
      <Route path ='/' exact render = {props => <App{...props}/>}/>
      <Route path ='/graph' exact render = {props => <Graph{...props}/>}/>
      <Route path ='/registro' exact render = {props => <Registro{...props}/>}/>
      <Route path ='/noticias' exact render = {props => <Noticias{...props}/>}/>
      <Route path ='/yayaan' exact render = {props => <Yayaan{...props}/>}/>
      <Route path ='/resumen' exact render = {props => <Resumen{...props}/>}/>
      <Route path ='/estresact' exact render = {props => <Estres{...props}/>}/>
      <Route path ='/login' exact render = {props => <Login{...props}/>}/>
      <Route path ='/users/activate/:token' exact render = {props => <Activate{...props}/>}/>
      <Route path ='/users/password/reset/:token' exact render = {props => <Reset{...props}/>}/>
      <Route path ='/users/password/forget' exact render = {props => <ForgetPassword{...props}/>}/>
      <PrivateRoute path="/private" exact component={Private} />
       <AdminRoute path="/admin" exact component={Admin} />
      <Redirect to='/' />
    </Switch>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

