import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    padding-left: 15px;
    :not(:last-child) {margin-bottom: 10px;}
`;

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
    margin-bottom : 25px; /* span이라 block 이아니어서 안댐 */
`;

const Grid = styled.div`
    margin-top : 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill,125px);
    grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;