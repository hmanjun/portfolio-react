import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/harshith-m-6631ab139/">
                <img src={process.env.PUBLIC_URL + "/images/linkedin-icon.png"} 
                className="icons" 
                alt="Linkedin Icon"/>
            </a>
            <a href="https://github.com/hmanjun">
                <img src={process.env.PUBLIC_URL + "/images/github-icon.png"}
                className="icons" 
                alt="Github Icon"/>
            </a>
        </footer>
    )
}