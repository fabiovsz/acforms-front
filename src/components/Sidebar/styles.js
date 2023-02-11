import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  background: #FFF;
`

export const Tab = styled.div`
  height: 1.8rem;
  font-size: 15px;
  border-bottom: 1px solid #E6E7E9;
  border-right: 1px solid #E6E7E9;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.6rem;
  cursor: pointer;
  color: ${(props) => props.isActivated ? '#267C10' : '000' };
  
  
  span {
    font-weight: bold;
  }
  
`