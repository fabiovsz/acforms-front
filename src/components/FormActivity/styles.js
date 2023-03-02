import styled from "styled-components"

export const FormContainer = styled.div`
  background: #FFF;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 60rem;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 2rem;
  border: 1px solid #E3E3E3;  
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h1 {
      font-size: 20px;
      font-weight: 500;
      color: #181819;
      opacity: 0.9;
    }
    
  span {
    color: #267C10;
    font-size: 14px;
    font-weight: 500;
    
  }
  
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  label {
    font-size: 18px;
  }
  
  input {
    border: 1px solid #D0D4D9;
    border-radius: 4px;
    height: 3rem;
    width: 40rem;
  }
  
`

export const Footer = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 3rem;
 gap: 2rem;
`

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 12rem;
  color: white;
  background: #267C10;
  border: none;
  border-radius: 9px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

`

export const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 12rem;
  color: black;
  background: #fff;
  border: 1px solid #D0D4D9;
  border-radius: 9px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  
`