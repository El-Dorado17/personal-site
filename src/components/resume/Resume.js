import React from "react"
import res from '../../components/resume/Ely Dorado.pdf'

export const Resume =()=>{

return(
<section>
    <div>
        <p>p1</p>
        <p>p1</p>
        <p>p1</p>
    </div>

    <article>
        <h1> Hello! Thanks for checking out my resume section!</h1>
        <div className="pb-2 flex items-center hover:underline">
            <img src={res} alt="email icon" className="w-8 pb-2 mr-2" />
            <a href="mailto:2018dorado@gmail.com" target="_blank" rel="noreferrer" title="Drop me a line!">2018dorado@gmail.com</a>
        </div> 

            <a href={Resume} download="Ely Dorado - Resume" className="flex justify-center"> <button className="bg-gray-600 p-2 hover:bg-yellow-400 hover:text-black rounded-full"> Download Resume </button> </a>
    </article>
</section>
)
}