import { ActivitiesFooter, ActivitiesContainer, ActivitiesListContainer, AddButon, SendButton, EditButton, DeleteButton } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";

export function Activities({activityDescription, activeTypeIndex}) {
  const [activityData, setactivityData] = useState([]);
  console.log(activeTypeIndex);
  const fetchData = () => {
    return axios.get(`https://api-tp-interdisciplinar.onrender.com/atividades/${localStorage.getItem('userId')}/${activeTypeIndex}`)
          .then((response) => setactivityData(response.data));
  }

  useEffect(() => {
    fetchData();
  },[activeTypeIndex])
  
  let deleteActivity = async (idAtividade) => {
    try {
      
      let response = await axios.delete(`https://api-tp-interdisciplinar.onrender.com/atividade/${idAtividade}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
    }})
      .then(function (response) {
        console.log(response);
        window.alert('Atividade deletada com sucesso!')
        window.location.reload(true);
      })
      .catch(function (error) {
        console.error(error);
      });
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <ActivitiesContainer>
      <span>{activityDescription}</span>
      <ActivitiesListContainer>
          <h1>Atividades Registradas</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Descrição</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
            {activityData.map((activity, index) => {
              return(
              <tr>
                <td>{index + 1}</td>
                <td>{activity.descricao}</td>
                <td> <DeleteButton onClick={ () => deleteActivity(activity.id)}>Delete</DeleteButton></td> 
              </tr> 
              )
            })}
            </tbody>
          </table>
          <ActivitiesFooter>
            <AddButon href="/send-activity">Adicionar atividades</AddButon>
          </ActivitiesFooter>
      </ActivitiesListContainer>
    </ActivitiesContainer>
  )
}