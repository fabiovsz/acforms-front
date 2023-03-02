import styled from "styled-components";

export const ActivitiesContainer = styled.div`
  background: #FFF;
  display: flex;
  flex-direction: column;
  width: 59.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 2rem;
  border: 1px solid #E3E3E3;
  
  span {
    font-size: 20px;
  }
`

export const ActivitiesListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 18px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    background: green;
    padding: 0.5rem;
    text-align: left;
    color: white;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background: white;
    border-top: 3px solid #E6E7E9;
    padding: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      padding-left: 1.5rem;
      width: 50%;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`

export const EditButton = styled.button`
  background: #2563eb;
  font-weight: bold;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;

`
export const DeleteButton = styled.button`
  background: #dc2626;
  font-weight: bold;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  
  
`

export const ActivitiesFooter = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 1.5rem;
`

export const AddButon = styled.a`
  text-decoration: none;
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

export const SendButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 12rem;
  color: white;
  background: #367BE3;
  border: none;
  border-radius: 9px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  
`