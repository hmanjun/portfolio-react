import '../styles/About.css'

export default function About() {
    return (
        <div id="about-container">
            <h1>About Me</h1>
            <div id="content-container">
                <p>I'm a software developer based in Mountain View, CA. I have a background in economics, educated at the University of California Santa Cruz, where I studied data analysis in experimental situations. I specialize in Front End and Back End JavaScript and writing programs in React and Node.js. I am an experienced programmer with a demonstrated history of working with various software and technology. I am skilled in Object-Oriented Programming and designing schemas in MySQL/MongoDB.</p>
                <img id="portfolio-img" src={require('../assets/images/profile-picture.jpg')} alt="profile picture"></img>
            </div>
        </div>
    )
}