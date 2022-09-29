import '../styles/Resume.css'

import resume from '../assets/resume.pdf'

export default function Resume() {
    return (
        <div id="resume-container">
            <iframe id="resume" title="resume" src={resume}></iframe>
        </div>
    )
}