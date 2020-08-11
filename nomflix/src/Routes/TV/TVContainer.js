import React from "react";
import TVPresenter from "./TVPresenter";
import {TVapi} from "api";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        popular: null,
        topRated: null,
        error:null,
        loading: true
    };

    async componentDidMount(){
        try{

            const {data : {results : nowPlaying}} = await TVapi.nowPlaying();
            const {data : {results : popular}} = await TVapi.popular();
            const {data : {results : topRated}} = await TVapi.topRated();
            
            this.setState({
                nowPlaying,
                popular,
                topRated
            })
          //  const {} = await TVapi.popular();
           // const {} = await TVapi.topRated();
            

        }

        catch{
            this.setState({
                error: "Can't get TV info..."
            });

        }

        finally{
            this.setState({
                loading:false
            });

        }
    }
    
    render(){
        const {nowPlaying,popular,topRated,loading,error} = this.state;
        return( <TVPresenter nowPlaying={nowPlaying}
         popular ={popular} 
         topRated ={topRated}
         error ={error} 
         loading ={loading} 
         />);

    };
}



