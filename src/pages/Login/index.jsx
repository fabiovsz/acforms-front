
import { LoginCard, LoginContainer, LoginForm, Separator, LoginFields, LoginHeader, SubmitButton } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  
  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const payload = JSON.stringify({
          user: e.target[0].value,
          password: e.target[1].value
        })
        
      let response = await axios.post("https://api-tp-interdisciplinar.onrender.com/login", payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
    }})
      .then(function (response) {
        if (response.data.auth == true) {
          localStorage.setItem('userId', response.data.user.id);
          navigate("/myform")
        }
      })
      .catch(function (error) {
        window.alert('Usuário não encontrado')
        console.error(error);
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  return(
    <LoginContainer>
      <img src="src/assets/logo.svg"/>
      <LoginCard>
        <LoginHeader>
          <h1>Login</h1>
          <Separator/>
          <span>Ainda não possui uma conta? <a href="/register">Registre-se aqui</a></span>  
        </LoginHeader>
        <LoginForm onSubmit={handleSubmit}>
          <LoginFields>
            <label htmlFor="user">Email ou RA</label>
            <input type="text" name="user" id="user"/>
          </LoginFields>
          <LoginFields>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
          </LoginFields>      
          <SubmitButton type="submit">Login</SubmitButton> 
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )

}