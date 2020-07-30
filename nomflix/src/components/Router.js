import React from "react";
import {BrowserRouter as Router,Route,Switch, Redirect} from "react-router-dom";
import Home from "Routes/Home";
import Details from "Routes/Details";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "./Header/";


export default () =>(
    <Router>

        <Header />
        <>
        <Switch>
        <Route path = "/" exact component ={Home} />
        <Route path = "/details"  component = {Details} />
        <Route path = "/search" component = {Search} />
        <Route path ="/tv"  component = {TV} />
        <Route path ="/tv/popular" render = {() => <h1>popular</h1>} />
        <Redirect from ="*" to ="/" />
        </Switch>
        </>
    </Router>
);