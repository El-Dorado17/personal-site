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




export function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const imagesQK = [
        {url: QKAllUsers},
        {url: QKCode},
        {url: QKForm},
        {url: QKMyPage},
        {url: QKRegister},
        {url: QKSignIn},
        {url: QKWelcome}
    ]
    

    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? imagesQK.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () =>{
        const isLastSlide = currentIndex === imagesQK.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

return(<>
    <br/> <br/> <br/> <br/> <br/>

    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'> 
        
        <div style={{backgroundImage:`url(${imagesQK[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

        </div>

{/* Left Button */}
        <button onClick={prevSlide} type="button" className="hidden group-hover:block absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>

{/* Right Button */}
        <button onClick={nextSlide} type="button" className="hidden group-hover:block absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> 
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
        </>
    )
}