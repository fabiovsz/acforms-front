import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 3.47rem;
  background: #267C10;
  color: #fff;
  
  a {
    text-decoration: none;
  }
`

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

export const NavbarMenuItem = styled.a`
  display: flex;
  color: white;
  gap: 0.4rem;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  
`
export const Profile = styled.div`

`