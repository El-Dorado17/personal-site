export const Home = () =>{
    

    return(<>
    <section className= " min-h-screen bg-[url('https://www.techrepublic.com/wp-content/uploads/2012/02/ScreenShot9.png')] bg-cover bg-center bg-fixed p-10">
        <article title="this is my name" className=" bg-green-200 h-80 p-60  flex flex-col items-center justify-center bg-cover bg-center ">
            
            <p className=" text-6xl mb-6 ">Ely Dorado </p>
            
            <p className=" text-4xl ">Software Developer</p>

        </article>
        <br/>
        <article className="bg-blue-200 h-80 p-10" >
            <p>projects</p>
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