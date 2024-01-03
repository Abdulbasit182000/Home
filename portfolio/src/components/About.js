import Typewriter from "./TypeWriter";

const myList = [
    'python',
    'django',
    'django rest framework',
    'docker',
    'html',
    'css',
    'JavaScript',
    'react',
  ];

const About = () => {
    const left = myList.slice(0,4)
    const right = myList.slice(4)
    return (
        <div className="about">
            <h1>About Me</h1>
            <div> </div>
            <p>Hello! I am Abdul Basit, a web developer based in Lahore,PK.</p>
            <p>Creating websites is not just a job for me; it's a passion that fuels my creativity and drives my commitment to excellence. I find immense joy in the process of building websites, transforming ideas into visually stunning and functional online experiences. From the initial conceptualization to the meticulous coding and design, every step is a thrilling journey for me. The dynamic nature of web development allows me to constantly learn and adapt, staying at the forefront of the ever-evolving digital landscape. Each project is an opportunity to blend innovation and aesthetics, crafting a unique online presence for clients. My love for building websites extends beyond the technical aspects – it's about bringing visions to life and making a lasting impact in the digital realm.</p>
            <p>As a recent Graduate of <a href="https://www.nu.edu.pk/">Fast University</a> and a current Backend Intern at <a href="https://linkedmatrix.com/">Linked Matrix</a>, I can work comfortably on the following technologies:</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="lefttech" style={{ flex: 1, maxWidth: '45%'}}>
                    <ul>
                        {left.map((item, index) => (<li key={index}>
                            <Typewriter text={item} delay={100} />
                        </li>))}
                    </ul>
                </div>
                <div className="righttech" style={{ flex: 1, maxWidth: '45%' }}>
                    <ul>
                        {right.map((item, index) => (<li key={index}>
                            <Typewriter text={item} delay={100} />
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default About;