import { NavbarContainer, NavbarMenu, NavbarMenuItem, Profile } from "./styles";

export function Navbar() {
  
  return (
    <NavbarContainer>
      <a href="/myform">
        <img width="45px" src="src/assets/logo-simples.png" alt="logo" />  
      </a>
      <NavbarMenu>
        <NavbarMenuItem href="/myform">
          <img src="src/assets/myform-icon.svg" alt="" width="25px" />   
          <span>Meu Formulário</span>
        </NavbarMenuItem>
        <NavbarMenuItem href="/send-activity">
          <img src="src/assets/atividades.svg" alt="" width="25px" />  
          <span>Atividades</span>
        </NavbarMenuItem>
        <NavbarMenuItem href="https://drive.google.com/drive/u/0/folders/0B_3ForV0vf3HT3Z2WWJwbWxTRU0" target="_blank">
          <img src="src/assets/manual-icon.svg" alt="" width="25px"/>  
          <span>Manual AC</span>
        </NavbarMenuItem>
        <NavbarMenuItem href="/login" target="_blank">
          <img src="src/assets/logout.png" alt="" width="25px"/>  
          <span>Sair</span>
        </NavbarMenuItem>  
      </NavbarMenu>
      <Profile>
      </Profile>
    </NavbarContainer>
  )
  
}