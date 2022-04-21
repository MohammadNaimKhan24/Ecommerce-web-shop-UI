import styledComponents from "styled-components";
import {mobile} from '../responsive';


const Container = styledComponents.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
  
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styledComponents.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width: "75%"})};
`;

const Title = styledComponents.h2`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    ${mobile({textAlign: "left"})};
`;

const Form = styledComponents.form`
    display: flex;
   flex-wrap: wrap;
   
`;

const Input = styledComponents.input`
    flex-1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

    &:focus {
      outline: none;
    }
`;

const Agreement = styledComponents.span`
    font-size: 12px;
    margin: 20px 0px;
    line-height: 20px;
`;

const Button = styledComponents.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
