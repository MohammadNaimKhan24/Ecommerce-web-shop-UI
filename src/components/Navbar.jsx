import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styledComponents from "styled-components";
import Badge from '../../node_modules/@material-ui/core/Badge/Badge';
import {mobile} from '../responsive.js';

const Container = styledComponents.div`
   height: 60px;
   ${mobile({height: "50px"})};
`;

const Wrapper = styledComponents.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})};
`;

const Left = styledComponents.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styledComponents.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`;

const SearchContainer = styledComponents.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styledComponents.input`
    border: none;

    &:hover {
        outline: none;
    }
    ${mobile({width: "50px"})};
`;

const Center = styledComponents.div`
flex: 1;
`;

const Logo = styledComponents.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "24px"})};
`;


const Right = styledComponents.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent: "center", flex: 2})};
`;

const MenuItem = styledComponents.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
`;

const Navbar = () => {
  return (
  <Container>
      <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                  <Input placeholder="Search"/>
                  <Search  style={{color: 'gray', fontSize: "16px"}}/>
              </SearchContainer>
          </Left>
          <Center>
              <Logo>NAIM.</Logo>
          </Center>
          <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
                </Badge>
              </MenuItem>
          </Right>
      </Wrapper>
  </Container>
  );
};

export default Navbar;
