import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Section from "components/Section";
import Loader from "components/Loader";
import Error from "components/Message";
import Poster from "components/Poster";
const Container = Styled.div `
    padding: 0px , 10px;
    margin-left: 6px;
`;

const TVPresenter = ({nowPlaying, popular, topRated, error, loading}) => loading
    ? <Loader></Loader>
    : (
        <Container>
            {
                nowPlaying && nowPlaying.length > 0 && <Section title="Airing Today">{
                            nowPlaying.map(
                                show => <Poster
                                    imageURL={show.poster_path}
                                    title={show.name}
                                    rating={show.vote_average}
                                    isMovie={false}
                                    id={show.id}
                                    year={show.first_air_date && show
                                        .first_air_date
                                        .substring(0, 4)}></Poster>
                            )
                        }</Section>
            }
            {
                topRated && topRated.length > 0 && (
                    <Section title=" Top Rated">{
                            topRated.map(
                                show => <Poster
                                    imageURL={show.poster_path}
                                    title={show.name}
                                    rating={show.vote_average}
                                    isMovie={false}
                                    id={show.id}
                                    year={show.first_air_date && show
                                        .first_air_date
                                        .substring(0, 4)}></Poster>

                            )
                        }</Section>
                )
            }
            {
                popular && popular.length > 0 && (
                    <Section title="Popular Show">{
                            popular.map(
                                show => <Poster
                                    imageURL={show.poster_path}
                                    title={show.name}
                                    rating={show.vote_average}
                                    isMovie={false}
                                    id={show.id}
                                    year={show.first_air_date && show
                                        .first_air_date
                                        .substring(0, 4)}></Poster>
                            )
                        }</Section>
                )
            }
            {error && <Error text={error} color="#b52b65"/>}
        </Container>
    )

TVPresenter.prototypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default TVPresenter;
