import React from "react";
import { MovieApi,TVapi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    state = {
        movieResults : null,
        tvResults: null,
        searchTerm: "",
        error:null,
        loading: false
    };

    handleSubmit = event =>{
        event.preventDefault();
        const { searchTerm } = this.state;
        searchTerm.toLowerCase();
        if (searchTerm !== "") {
          this.SearchByTerm();
        }
      };

    
    
    updateTerm = event => {
        const {
          target: { value }
        } = event;
        this.setState({
          searchTerm: value
        });
      };

    SearchByTerm = async () => {
        const {searchTerm} = this.state;
        

        try{
            console.log(`${searchTerm} =is searchterm`);
            const {data : {results: movieResults}} = await MovieApi.search(searchTerm);
            const {data : {results: tvResults}} = await TVapi.search(searchTerm);
            
            this.setState({
                movieResults,
                tvResults,
                loading : true
            })
            console.log(tvResults);
        }catch{
            
            this.setState({error : "search failed"});

        }finally{
            this.setState({loading: false});

        }
       

    }
 
    render(){
        const {movieResults,tvResults,searchTerm,loading,error} = this.state;
        return( <SearchPresenter movieResults={movieResults}
         tvResults ={tvResults} 
         searchTerm={searchTerm}
         error ={error} 
         loading ={loading} 
         handleSubmit = {this.handleSubmit}
         updateTerm = {this.updateTerm}
         />);

    };

   
}

