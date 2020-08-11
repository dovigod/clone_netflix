import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
/*


const Container = styled.div`
  font-size: 12px;
`;


const Image = styled.div`
  background-image: url(${props => `https://image.tmdb.org/t/p/w300${props.bgURL}`});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;

`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;


const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;


const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

*/




const Rating = styled.span `
    position: absolute;
    bottom: 5px;
    opacity: 0;

    transition: opacity 0.5s ease 0s;

`;

const Container = styled.div `
    font-size: 12px;
    margin-bottom: 10px;
`;

const Image = styled.div `
    background-image: url(${props => props.bgURL});
    height: 180px;
    background-size: cover;
    
    border-radius: 5px;
    
    opacity: 1;
    transition: opacity 0.5s ease 0s;
  


`;

/*`https://image.tmdb.org/t/p/w300${props.bgURL}` */

const ImageContainer = styled.div `
    height: 100%;
    position: relative;
    &:hover{
        ${Image}{
            opacity:0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
    margin-bottom: 10px;
`;

const Year = styled.span `
margin-top: 5px;
`;

const Title = styled.span `
display:block;


`;

const Poster = ({
    imageURL,
    rating,
    year,
    title,
    id,
    isMovie
}) => (
    <> 
    < Link to = {{pathname:
        isMovie
            ? `movie/${id}`
            : `tv/${id}`, state:{rating : {rating}}
            
    }} > 
    <Container>
        <ImageContainer>
            <Image
                bgURL={imageURL
                    ? `https://image.tmdb.org/t/p/w300${imageURL}`
                    : require("../image/x.png")}/>
            <Rating>
                <span role="img" aria-label="rating">⭐️</span>
                {" "}
                {rating}/10
            </Rating>

        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>

    </Container>
</Link>
</>

)

Poster.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imageURL: PropTypes.string,
    year: PropTypes.string,
    isMovie: PropTypes.bool.isRequired
}

export default Poster;
