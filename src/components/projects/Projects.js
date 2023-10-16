import React from "react"
import { useState } from 'react'

import QKAllUsers from '/home/dorado/workspace/personal-site/src/images/qk/all-users-qk.png'
import QKForm from '/home/dorado/workspace/personal-site/src/images/qk/form-qk.png'
import QKMyPage from '/home/dorado/workspace/personal-site/src/images/qk/my-page.png'
import QKWelcome from '/home/dorado/workspace/personal-site/src/images/qk/qk welcome.png'
import QKCode from '/home/dorado/workspace/personal-site/src/images/qk/qk-code.png'
import QKRegister from '/home/dorado/workspace/personal-site/src/images/qk/register-qk.png'
import QKSignIn from '/home/dorado/workspace/personal-site/src/images/qk/sign-in-qk.png'

import SOLCreate from '/home/dorado/workspace/personal-site/src/images/sol/create sol.png'
import SOLFiltered from '/home/dorado/workspace/personal-site/src/images/sol/filtered sol.png'
import SOLMain from '/home/dorado/workspace/personal-site/src/images/sol/mian sol.png'
import SOLRegister from '/home/dorado/workspace/personal-site/src/images/sol/register sol.png'
import SOLCode from '/home/dorado/workspace/personal-site/src/images/sol/sol code.png'
import SOLStudent from '/home/dorado/workspace/personal-site/src/images/sol/student sol.png'

// import from ''
// import from ''
// import from ''
// import from ''
// import from ''
// import from ''
// import from ''

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