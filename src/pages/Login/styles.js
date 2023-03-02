import styled from "styled-components";

export const LoginContainer = styled.div`
  margin: 4rem auto;
  display: flex;
  width: 20rem;
  height: 25.4375rem;
  padding: 1.5rem;
  gap: 2.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 9.75rem;
    height: 3.275rem;
  }
`;

export const LoginCard = styled.div`
  width: 20rem ;
  height: 25.68rem;
  padding: 2.31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFF;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  
  h1 {
    color: ${(props) => props.theme["title"]};
    font-weight: 500;
    margin: 0;
    font-size: 1.5rem;
  }
  
  span {
    font-size: 0.8rem;
    color: #181819;
    
  }
  a {
      color: #3855B3;
      font-weight: bold;
    }
    
`;

export const Separator = styled.div`
  height: 1px;
  background: #E6E7E9;
  width: 21.125rem;
  
  
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
`;

export const LoginFields = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start; 
  flex-direction: column;
  justify-content: center;
  color: #181819;
  opacity: 0.9s;
  margin-bottom: 1.2rem;;
  
  input {
    margin-top: 0.7rem;
    height: 2rem;
    width: 18.67rem;
    border: 1px solid #A6A6A6;
    border-radius: 4px;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 3rem;
  padding: 0.5rem;
  width: 18.67rem;
  height: 2.5rem;
  background: #267C10;
  color: #fff;
  font-weight: bold;
  border: 1px solid #267C10;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #206010;
    transition: 700ms;
  }
`;



