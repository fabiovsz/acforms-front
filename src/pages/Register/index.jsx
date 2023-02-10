import { Separator } from "../Login/styles";
import { FormField, RegisterCard, RegisterForm, RegisterContainer, RegisterButton } from "./styles";

export function Register() {
  return (
    <RegisterContainer> 
      <img src="src/assets/logo.svg"/>
      <RegisterCard>
          <h1>Registre-se</h1>
          <Separator/>
          <RegisterForm>
            <FormField>
              <label htmlFor="nome">Nome</label>
              <input type="nome" name="nome" id="nome" /> 
            </FormField>
            <FormField>
              <label htmlFor="sobrenome">Sobrenome</label>  
              <input type="text" name="sobrenome" id="sobrenome" />
            </FormField>
            <FormField>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </FormField>
            <FormField>
              <label htmlFor="ra">RA</label>
              <input type="text" name="ra" id="ra"/>
            </FormField>
            <FormField>
              <label htmlFor="pass">Senha</label>
              <input type="password" name="pass" id="pass"/>
            </FormField>
            <RegisterButton type="submit">Registrar-se</RegisterButton>
          </RegisterForm>
      </RegisterCard>
    </RegisterContainer>
  )
}
