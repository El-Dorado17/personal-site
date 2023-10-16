import React from "react"


import { QuestKeeper } from "./QuestKeeper"

import { Route, Routes } from "react-router-dom"


export function Projects() {


return(<>
        <Routes>        
            <Route path="/Projects" element={<QuestKeeper/>}/>
        </Routes>
        </>
    )
}