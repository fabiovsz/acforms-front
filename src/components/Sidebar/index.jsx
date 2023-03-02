import { useState } from "react";
import { activities } from "../../activities";
import { SidebarContainer, Tab } from "./styles";



export function Sidebar({activateTab, activeTabIndex}) {
  return(
    <SidebarContainer>
      
        {activities.map((activity ) =>
          <Tab key={activity.index} onClick={ () => activateTab(activity.index)} isActivated={ activity. index === activeTabIndex }> <span>{activity.title}</span></Tab>
        )}
  

    </SidebarContainer>
  )
}