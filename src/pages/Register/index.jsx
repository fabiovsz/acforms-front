import { Separator } from "../Login/styles";
import { FormField, RegisterCard, RegisterForm, RegisterContainer, RegisterButton, Grid, GridContainer } from "./styles";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate()
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const payload = JSON.stringify({
          nome: e.target[0].value,
          curso: e.target[1].value,
          telefone:e.target[2].value,
          dataNasc:e.target[3].value,
          email:e.target[4].value,
          RA: e.target[5].value,
          password: e.target[6].value
        })
        
        console.log( payload)
      let response = await axios.post("https://api-tp-interdisciplinar.onrender.com/register", payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
        
    }})
      .then(function (response) {
        console.log(response);
        window.alert('Cadastrado com sucesso!')
        navigate("/login")
      })
      .catch(function (error) {
        console.error(error);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RegisterContainer> 
      <img src="src/assets/logo.svg"/>
      <RegisterCard>
          <h1>Registre-se</h1>
          <Separator/>
          <RegisterForm onSubmit={handleSubmit}>
            <GridContainer>
                <Grid>
                  <FormField>
                    <label htmlFor="nome">Nome Completo</label>
                    <input type="nome" name="nome" id="nome" /> 
                  </FormField>
                  <FormField>
                    <label htmlFor="curso">Curso</label>  
                    <input type="text" name="curso" id="curso" />
                  </FormField>
                  <FormField>
                    <label htmlFor="telefone">Telefone</label>  
                    <input type="text" name="telefone" id="telefone" />
                  </FormField>
                  <FormField>
                    <label htmlFor="dataNasc">Data de Nascimento</label>  
                    <input type="text" name="dataNasc" id="dataNasc" />
                  </FormField>
                </Grid>
                <Grid>
                  
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
                </Grid>
            </GridContainer>
            <RegisterButton type="submit" >Registrar-se</RegisterButton>
          </RegisterForm>
          
      </RegisterCard>
    </RegisterContainer>
  )
}
