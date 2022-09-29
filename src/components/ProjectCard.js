import '../styles/ProjectCard.css'

export default function ProjectCard(prop) {
    const {title,img,repo,description,deployed} = prop
    return (
        <div className="proj-card">
            <div className='proj-img-container'>
                <img src={process.env.PUBLIC_URL + img} alt={`${title} project`}/>
            </div>
            <div className='proj-card-content'>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="card-btns">
                    <button className="repo" onClick={() => window.open(repo)} type="button">Code</button>
                    <button className="deployed" onClick={() => window.open(deployed)} type="button">Visit</button>
                </div>
            </div>
        </div>
    )
}