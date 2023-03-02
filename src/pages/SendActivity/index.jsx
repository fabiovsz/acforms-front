import { useState } from "react";
import FormActivity from "../../components/FormActivity";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { HomeContainer } from "../MyForm/styles";
import { SendActivityContainer } from "./styles";

export function SendActivity() {
  const [activeTabIndex, setactiveTabIndex] = useState(1);
  
  function activateTab(index) {
    setactiveTabIndex(index)
  }
  
  return (
    <HomeContainer>
      <Navbar/>
      <SendActivityContainer>
        <Sidebar activateTab={activateTab} activeTabIndex={activeTabIndex}/>
        <FormActivity activeTabIndex={activeTabIndex} />
      </SendActivityContainer>
    </HomeContainer>
  )
}
