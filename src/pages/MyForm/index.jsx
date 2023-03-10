import { useState } from "react";
import { Activities } from "../../components/Activities";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { ActivityPage, HomeContainer } from "./styles"
import { activities } from "../../activities"

export function MyForm() {
  
  const [activeTabIndex, setactiveTabIndex] = useState(1);
  
  function activateTab(index) {
    setactiveTabIndex(index)
  }
  return (
    <HomeContainer>
      <Navbar/>
      <ActivityPage>
        <Sidebar activateTab={activateTab} activeTabIndex={activeTabIndex}/>
        <Activities activityDescription={activities[activeTabIndex - 1 ].title} activeTypeIndex={activeTabIndex}/>  
      </ActivityPage>
    </HomeContainer>
  )
}
