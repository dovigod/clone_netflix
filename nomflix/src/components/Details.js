
import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-image: url(${ a => a.bdURL});
    background-size: cover;
    height: 100vh;
    opacity: 0.2;
    filter:blur(8px);
    
    overflow: hidden;
`;

const Title = styled.h1`
height: 12.5%;
font-size: 40px;
font-weight: 600;
`;

const Image = styled.img`
    border-radius: 5px;
    height: auto;
    width: 30%;
`;
const IContainer = styled.div`
    height: 100vh;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 20px;
    height: 100%;
    

`;


const Text = styled.span`
margin: 0 10px;
`;

const Textcontainer = styled.div`
height:12.5%;

`;
const Discript = styled.div`
height: 75%;
width: 90%;
text-align: justify;
line-height: 20px;
`;

const Flexb = styled.div`
display:flex;
position: absolute;
top: 100px;
justify-content: center;
align-items: center;
margin-left: 100px;
overflow: auto;
height: 80%;
`;

const font ={
    fontWeight: 600
}
const Details =({result,isMovie}) => (
   <IContainer>
           <Container bdURL = {`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}>
            </ Container>
           <Flexb>
        <Image src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}></Image>
        <Info>
            <Title>{isMovie ? result.title : result.name}</Title>
            <Textcontainer>
                <Text style={font}>
                    {isMovie ? result.release_date && result.release_date.length !== 0 && result.release_date.substring(0,4) :result.first_air_date && result.first_air_date.length !== 0 && result.first_air_date.substring(0,4)}
                </Text>
                {"•"}
                <Text style={font}>
                    {isMovie ? result.runtime: result.episode_run_time}{"min"}
                </Text>
                {"•"}
                <Text style={font}>
                    {result.genre_ids}
                </Text>
                {"•"}
                <Text role="img" aria-label="ratings" style={font}>
                    ⭐️{" "} {result.vote_average}
                </Text>
            </Textcontainer>
            <Discript>{result.overview}</Discript>
        </Info>
        </Flexb> 
    </IContainer>
    
)





Details.propTypes ={
    isMovie : Proptypes.bool.isRequired,
    result: Proptypes.object.isRequired
}

export default Details;