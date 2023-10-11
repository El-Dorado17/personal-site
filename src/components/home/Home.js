export const Home = () =>{
    

    return(<>
    <section className= " min-h-screen bg-[url('https://www.techrepublic.com/wp-content/uploads/2012/02/ScreenShot9.png')] bg-cover bg-center bg-fixed p-10">
        <article title="this is my name" className=" bg-green-200 h-80 p-10  bg-cover bg-center relative">
            
            <div className="flex flex-col items-end justify-center">

            <p className=" text-6xl mb-6 ">Ely Dorado </p>
            
            <p className=" text-4xl ">Software Developer</p>

            </div>

            <img className="absolute inset-0 object-cover" src="https://media.licdn.com/dms/image/C4D03AQFN94ndXIuFow/profile-displayphoto-shrink_400_400/0/1661618824653?e=1702512000&v=beta&t=NagxC9SaA-RWQgrliESWVczo7KLdbMJsjmNg_hDHgII"/>

        </article>

        <br/>

        <article className="bg-blue-200 h-screen p-10" >
            <p className=" flex justify-center text-3xl">Projects</p>
            <section>
                <div>
                    project 1 SOL
                </div>
                <img src="h.JPG"/>
            </section>
            <section>
                <div>
                    project 2 QK
                </div>
            </section>
            <section>
                <div>
                    project 3 VS
                </div>
            </section>
        </article>

        <br/>
        <article className="bg-blue-200 h-80 p-10" >
            <p>work experience</p>
        </article>

        <br/>
        <article className="bg-blue-200 h-80 p-10" >
            <p>Contact</p>
        </article>
    </section>
        </>
    )
}