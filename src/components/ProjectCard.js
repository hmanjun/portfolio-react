import '../styles/ProjectCard.css'

export default function ProjectCard(prop) {
    const {title,img,repo,deployed} = prop
    return (
        <div className="card">
            <img src={process.env.PUBLIC_URL + img} alt={`${title} project`}/>
            <h2>{title}</h2>
            <div className="card-btns">
                <button className="repo" onClick={() => window.open(repo)} type="button">Code</button>
                <button className="deployed" onClick={() => window.open(deployed)} type="button">Visit</button>
            </div>
        </div>
    )
}