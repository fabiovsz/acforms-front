import { useState } from "react";
import { Activities } from "../../components/Activities";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { ActivityPage, HomeContainer } from "./styles"

export function MyForm() {
  
  const [activeTabIndex, setactiveTabIndex] = useState(null);
  
  function activateTab(index) {
    setactiveTabIndex(index)
  }
  
  return (
    <HomeContainer>
      <Navbar/>
      <ActivityPage>
        <Sidebar activateTab={activateTab} activeTabIndex={activeTabIndex}/>
        <Activities/>   
      </ActivityPage>
    </HomeContainer>
  )
}
