import React from "react";
import { MovieApi , TVapi} from "../../api";
import DetailsPresenter from "./DetailsPresenter";

export default class extends React.Component{
   
    constructor(props){
        super(props);
        const {
            location : {pathname} 
        } = props;
        
        this.state = {
            result : null,
            error:null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
        
    }

    
    
    async componentDidMount(){
        const {match: {
            params :{id}
        },
        history:{push},
     } = this.props;
       
     
        const parsedID = parseInt(id);
        const {isMovie} = this.state;
            if(isNaN(parsedID)){

            return push('/');
          
        }

        let result;
        
        try{
            if(isMovie){    
                console.log(this.props);

                ({data: result} =await MovieApi.movieDetail(parsedID));
                

            }else{
                const request = await TVapi.showDetail(parsedID);
                result = request.data;
            }
      
        }
        catch{
            this.setState({error : "can't find anything"})
        }finally{
            
            this.setState({ loading: false,result})
        }
        
    }
    
    render(){
        const {result,loading,error,isMovie} = this.state;
        return( <DetailsPresenter 
         result ={result}
         loading ={loading} 
         error ={error}
         isMovie = {isMovie}
         />);

    };
}

