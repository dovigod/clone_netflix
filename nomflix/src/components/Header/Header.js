import React from "react";
import { Link } from "react-router-dom";
//import styles from "./Header.module.scss";
import styled from "styled-components";

const List = styled.ul`
    display:flex;
  
`;

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20,20,20,0.5);
    box-shadow:  0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const Item = styled.li `
    width: 90px;
    text-align : center;
`;

const LinkS = styled(Link)`
    display: block;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content : center;

`;
//<ul className ={styles.navList}>
export default () => (

<Header>
   
    <List>
  
        <Item><LinkS to="/tv">TV</LinkS></Item>
        <Item><LinkS to="/details">Details</LinkS></Item>
        <Item><LinkS to="/search">Search</LinkS></Item>
    </List>
   
</Header>)