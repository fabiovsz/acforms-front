
import { LoginCard, LoginContainer, LoginForm, Separator, LoginFields, LoginHeader, SubmitButton } from "./styles";

export function Login() {
  
  return(
    <LoginContainer>
      <img src="src/assets/logo.svg"/>
      <LoginCard>
        <LoginHeader>
          <h1>Login</h1>
          <Separator/>
          <span>Ainda não possui uma conta? <a href="/register">Registre-se aqui</a></span>  
        </LoginHeader>
        <LoginForm>
          <LoginFields>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
          </LoginFields>
          <LoginFields>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
          </LoginFields>      
          <SubmitButton>Login</SubmitButton> 
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )

}