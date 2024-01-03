import Typewriter from "./TypeWriter";

const Home = () => {
    return (  
        <div className="home">
            <h3>Hey, i am</h3>
            <h1>Abdul Basit Jalil</h1>
            <div className="lightText">
                <h1>
                    <Typewriter text="A Web Developer and" delay={50} />
                </h1>
                <h1>
                    <Typewriter text="Machine Learning Enthusiast" delay={50} />
                </h1>
            </div>
            <p>
                <Typewriter text="Step into a world where lines of code become the architects of digital landscapes. As a fervent web developer and machine learning explorer, I invite you to witness the synergy of elegant design and intelligent algorithms within my portfolio." delay={10} />
            </p>
        </div>
    );
}
 
export default Home