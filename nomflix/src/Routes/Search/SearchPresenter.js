import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";
import Error from "components/Message";
import Poster from "components/Poster";
const Container =  styled.div`
    padding: 0 20px;
`;

const Form = styled.form``;

const Input = styled.input`
    all:unset;
    font-size: 28px;
    width: 100%;
`;



const SearchPresenter = ({movieResults,tvResults,searchTerm,loading,handleSubmit,updateTerm,error}) =>( loading ? (<Loader />) :
<Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search for movie or show" value ={searchTerm} onChange={updateTerm}></Input>
    </Form>
    {
    loading ? <Loader/> :
     <>
       {
        tvResults &&
        tvResults.length > 0 &&
        <Section title="Results on TV show">
            {tvResults.map(show => (<Poster
                                    imageURL={show.poster_path}
                                    title={show.name}
                                    rating={show.vote_average}
                                    isMovie={false}
                                    id={show.id}
                                    year={show.first_air_date && show
                                        .first_air_date
                                        .substring(0, 4)}></Poster>))}
        </Section>
    }   
    {
        movieResults && 
        movieResults.length > 0 && 
        <Section title="Results on Movie"> 
            {movieResults.map(movie=>( < Poster key = {
                            movie.id
                        }
                        imageURL = {
                            movie.poster_path
                        }
                        rating = {
                            movie.vote_average
                        }
                        year = {
                            movie.release_date && movie
                                .release_date
                                .substring(0, 4)
                        }
                        title = {
                            movie.title
                        }
                        id = {
                            movie.id
                        }
                        isMovie = {
                            true
                        } > </Poster>))}
        </Section>
    }
    
      
    </>
    }
    { error && <Error text={error} color="#b52b65" />}
    { tvResults && movieResults && tvResults.length===0 && movieResults.length ===0 && <Error text =" Not Found" color="gray" />}
</Container>
)

SearchPresenter.prototypes = {
    popular: PropTypes.array,
    topRated: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    nowPlaying: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired,
    movieResults: PropTypes.array,
    tvResults:PropTypes.array
}

export default SearchPresenter;
