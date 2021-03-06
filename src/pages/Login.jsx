import styledComponents from 'styled-components';
import {mobile} from '../responsive';

const Container = styledComponents.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( 
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Wrapper = styledComponents.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width: "75%"})};
`;

const Title = styledComponents.h2`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`;

const Form = styledComponents.form`
    display: flex;
   flex-direction: column;
`;

const Input = styledComponents.input`
    flex-1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;

    &:focus {
        outline: none;
    }
`;

const Button = styledComponents.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 10px;
`;

const Link = styledComponents.a`
    margin: 5px 0px;
    font-size: 12px; 
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;