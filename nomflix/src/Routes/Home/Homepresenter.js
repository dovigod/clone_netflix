import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";
import Error from "components/Message";
import Poster from "components/Poster";

const Container = styled.div `
    padding: 0px 10px;

`;

const HomePresenter = ({nowPlaying, popular, upComing, error, loading}) => loading
    ? <Loader></Loader>
    : <Container>

        {
            nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {
                        nowPlaying.map(movie =>< Poster key = {
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
                        } > </Poster>)
                    }
                </Section>
            )
        }

        {
            upComing && upComing.length > 0 && (
                <Section title=" Up Coming!">{
                        upComing.map(movie =>< Poster key = {
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
                        } > </Poster>)
                    }</Section>
            )
        }
        {
            popular && popular.length > 0 && (
                <Section title="Popular Movies">{
                        popular.map(movie =>< Poster key = {
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
                        } > </Poster>)
                    }</Section>
            )
        }
        {error && <Error text={error} color="#b52b65"/>}
    </Container>

HomePresenter.prototypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;
/// props children 은 태그 사이 값임