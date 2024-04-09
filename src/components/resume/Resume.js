import React from "react"
import res from '../../components/resume/Ely-Dorado.pdf'

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
            <iframe src={res} title="Resume PDF" width="50%" height="500px" className=""  />
        </div> 

            <a href={Resume} download="Ely Dorado - Resume" className="flex justify-center"> <button className="bg-gray-600 p-2 hover:bg-yellow-400 hover:text-black rounded-full"> Download Resume </button> </a>
    </article>
</section>
)
}