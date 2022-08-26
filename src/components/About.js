import '../styles/About.css'

export default function About() {
    return (
        <div id="about-container">
            <h1>About Me</h1>
            <div id="content-container">
                <p>I'm a 4th-year Business Economics student at UC Santa Cruz with an expected graduation date of July 2022. I have experience in creating linear regression, regressograms, and decision tree predictive models in R.</p>
                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="my headshot"></img>
            </div>
        </div>
    )
}