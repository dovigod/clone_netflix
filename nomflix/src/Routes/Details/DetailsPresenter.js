import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import Error from "components/Message";

import Details from "components/Details";
const Container= Styled.div`
    margin: 0 ;
    height: 100vh;
`;


const DetailsPresenter = ({result ,loading,error,isMovie}) => loading? <Loader></Loader>
: <Container>
    <Details result ={result} isMovie = {isMovie} ></Details>
   
   {error && <Error text={error} color="#b52b65"/>}
</Container>


DetailsPresenter.prototypes = {
    result : PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailsPresenter;
