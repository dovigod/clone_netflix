import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100vh;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items:center;

`;

const Text = styled.span`
    font-weight: 600;
    font-size: 50px;
`;


const Loader =() => <Container>
    <Text role="img" aria-label ="now Loading">Now Loading....😥</Text>
</Container>


export default Loader;
