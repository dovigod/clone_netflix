import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div `
    width: 100%;
    display:flex;
    justify-content:center;

`;
const Text = styled.div `
    font-size: 30px;
    font-weight: 500;
    color: ${props => props.color};
    
`;

const Error = ({color, text}) => (
    <Container>
        <Text role="img" color={color}>
            {text}
        </Text>
    </Container>
)

Error.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired

}

export default Error;
