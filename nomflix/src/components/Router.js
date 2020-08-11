import React from "react";
import {BrowserRouter as Router,Route,Switch, Redirect} from "react-router-dom";
import Home from "Routes/Home/index";
import Details from "Routes/Details/index";
import Search from "Routes/Search/index";
import TV from "Routes/TV/index";
import Header from "./Header/";


export default () =>(
    <Router>

        <Header />
        <>
        <Switch>
        <Route path = "/" exact component ={Home} />
        <Route path = "/search" component = {Search} />
        <Route path ="/tv" exact component = {TV} />
        <Route path ="/tv/:id" component = {Details} />
        <Route path ="/movie/:id" component = {Details} />
        <Redirect from ="*" to ="/" />
        </Switch>
        </>
    </Router>
);