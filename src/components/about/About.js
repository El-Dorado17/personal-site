import "../about/About.css"
import Ely from '/home/dorado/workspace/personal-site/src/images/personal/Resume Picture (cropped).jpg'

export const About = () => {


    return(
        <>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 ">
            <article>

                <br/> <br/> <br/>
                <div className="flex justify-between">
                    <section>
                        <img src={Ely} alt="self portrait" className="h-80 pl-2 picture" />
                        <p className="pl-4 text-yellow-500">Ely Dorado</p>
                    </section>
                    <section className="w-3/6 p-2 text-yellow-500">
                        <h1>Bio</h1>
                        <p>Hello, my name is Ely and I love software! </p>
                            <ul>
                                <li>Born in Texas</li>
                                <li>Experience in construction, manufacturing, & food service </li>
                                <li>Love playing games in VR</li>
                                <li>Younger than the internet </li>
                                <li>Drummer</li>
                                <li>Fantasy movies/games/books are my favorite </li>
                            </ul>
                    </section>
                </div>

                <section>

                    <p>here I'll have a bio, work history, and my skillset!</p>
                </section>
                
            </article>
        </div>
        </>
    )
}