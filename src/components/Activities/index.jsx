import { ActiviesFooter, ActivitiesContainer, ActivitiesListContainer, ActivitiesListTable, AddButon, SendButton } from "./styles";

export function Activities({activityDescription}) {
  
  const activityData = [
    {
      index: 1,
      description: "Projetos",
      files: "teste.pdf"
    },
    {
      index: 2,
      description: "Analises",
      files: "test2.pdf"
    },
  ]
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
                <th>Arquivos</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
            {activityData.map((activity) => {
            <tr>
              <td>{activity.index}</td>
              <td>{activity.description}</td>
              <td>{activity.files}</td>
              <td> <button>X</button> <button>Edit</button></td> 
            </tr> 
            })}
            </tbody>
          </table>
          <ActiviesFooter>
            <AddButon>Adicionar Atividade</AddButon>
            <SendButton>Enviar Atividade</SendButton>
          </ActiviesFooter>
      </ActivitiesListContainer>
    </ActivitiesContainer>
  )
}