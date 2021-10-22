import './about.css'
import Astro from '../../img/astro.png'
import Galaxy from '../../img/galaxy.png'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card bg">
                <img src={Galaxy} alt="" className="a-img" />
                </div>
                <div className="a-card">
                    <img src={Astro} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I’m a Web Developer located in Houston, Texas. I have a serious love for building and developing app/websites.
        </p>
        <p className="a-desc">
        Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, TV series and Lego.
        </p>
        <p className="a-desc">
        Interested in acquiring new knowledge and working on ambitious projects with positive people.
        </p>
        
            </div>
        </div>
    )
}

export default About