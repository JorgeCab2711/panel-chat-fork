import React, { useState } from "react";
import { Chat } from "../componentes/Chat";
import { ChatList } from "../componentes/ChatList";
import LeftPanel from "../componentes/LeftPanel";
import Panel from "../componentes/Panel";

export default function PanelChat() {

  const [activo, setActivo] = useState({})
  return (
    <div className="overAllContainer">
      <LeftPanel home="" self="" settings="" logout=""></LeftPanel>
      <Panel>
        <div>
          <div className="row">
            <div className="col-3">
              <ChatList setActivo={setActivo}/>
            </div>
            <div className="col-sm">
              <Chat activo={activo}/>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}