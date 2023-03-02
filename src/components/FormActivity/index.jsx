import React from 'react'
import { ClearButton, Footer, FormContainer, SaveButton, Form, FormHeader } from './styles'
import {activities} from "../../activities"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FormActivity({activeTabIndex}) {
  console.log(activeTabIndex);
  const navigate = useNavigate();
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = JSON.stringify({
          descricao: e.target[0].value,
          carga_horaria: e.target[1].value,
          tipo_id: activeTabIndex,
          id_user: localStorage.getItem('userId')
        })
        console.log(payload)
      let response = await axios.post("https://api-tp-interdisciplinar.onrender.com/atividade", payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
    }})
      .then(function (response) {
        console.log(response);
        window.alert('Atividade cadastrada com sucesso!')
        navigate("/myform")
      })
      .catch(function (error) {
        console.error(error);
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <FormContainer>
      <FormHeader>
        <h1>{activities[activeTabIndex - 1].description}</h1>
        <span>Carga Máxima: {activities[activeTabIndex - 1].cargaMax}h</span>  
      </FormHeader>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="descricao">Descrição</label>
        <input type="textbox" />
        <label htmlFor='carga'>Carga Horária</label>
        <input type="text" />
        <Footer>
          <SaveButton type='submit'>Salvar Atividade</SaveButton>
          <ClearButton>Limpar</ClearButton>
        </Footer>
      </Form>
    </FormContainer>
      
  )
}

export default FormActivity