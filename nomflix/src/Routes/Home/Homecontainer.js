import React from "react";
import Homepresenter from "./Homepresenter.js";
import {MovieApi} from "api";



export default class extends React.Component{
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };
//wait for the data
async componentDidMount(){
    try{

       const {data: {results: nowPlaying}} = await MovieApi.nowPlaying();
       const {data: {results: upComing}} = await MovieApi.upComing();
       const {data: {results:  popular}} = await MovieApi.popular();
        console.log(this.props);
       this.setState({
           nowPlaying,
           upComing,
           popular
       })

    
    }catch{
        this.setState({
            error: "Can't get Movie info.."
//if failed

        })

    }finally{
        this.setState({
            loading: false
        })
//any way do this
    }
}

    render(){
        const {nowPlaying , upComing , popular,error,loading} = this.state;
        return(
        <Homepresenter nowPlaying = { nowPlaying}
         upComing = {upComing} 
         popular = {popular}
        error = {error} 
        loading = {loading} />);
    };
};
