import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/" ,  
    params : {
       api_key : "10a105c94c7e42a666b6f1af8bcbcd7b",
       language : "en-US"
    }
});
 //  "10a105c94c7e42a666b6f1af8bcbcd7b"
    //https://api.themoviedb.org/3/movie/550?api_key=10a105c94c7e42a666b6f1af8bcbcd7b




export const TVapi ={
    
    nowPlaying: () => api.get('tv/airing_today'),
    
    popular: () => api.get('tv/popular'),
    topRated: () =>api.get('tv/top_rated'),
    showDetail: (ID) => api.get(`tv/${ID}`,{
        params: {
            append_to_response: "videos" //where did this came from? hyo
        }
    }),
    search: (term) => api.get(`search/tv`,{
        params:{
            query:encodeURIComponent(term)
        }
    })
}

export const MovieApi ={

    nowPlaying: () => api.get('movie/now_playing'),
    upComing: () => api.get('movie/upcoming'),
    popular: () => api.get('movie/popular'),
    movieDetail: (ID) => api.get(`movie/${ID}`,{
        params: {
            append_to_response: "videos"
        }
    }),

    search: (term) => api.get(`search/movie`,{
        params:{
            query:encodeURIComponent(term)

        }
    })
}
//   '/'로시작하는 주소는 절대 주소임

