import { useState } from "react";
import { activities } from "../../activities";
import { SidebarContainer, Tab } from "./styles";



export function Sidebar({activateTab, activeTabIndex}) {
  return(
    <SidebarContainer>
      
        {activities.map((tab, index ) =>
          <Tab key={index} onClick={ () => activateTab(index)} isActivated={ index === activeTabIndex }> <span>{tab.title}</span></Tab>
        )}
  
      
    </SidebarContainer>
  )
}