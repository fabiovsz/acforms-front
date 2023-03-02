import styled from "styled-components";

export const RegisterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 39rem;
  height: 28rem;
  padding: 1.5rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 7rem;
    height: 4.875rem;
    margin-top: 100px;
  }
`;

export const RegisterCard = styled.div`
  width: 48rem;
  height: 100%;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFF;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  h1 {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    color: ${(props) => props.theme["title"]};
    font-weight: 500;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex: 1;
  margin-top: 1rem;
  height: 10rem;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`
export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`


export const FormField = styled.div`
  display: flex;
  height: 3.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
  
  label {
    font-size: 1rem;
  }

  input {
    margin-top: 0.7rem;
    height: 2rem;
    width: 18.67rem;
    border: 1px solid #A6A6A6;
    border-radius: 4px;
    outline: none;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem;
  width: 18.67rem;
  height: 2.3rem;
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