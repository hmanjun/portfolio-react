import Card from './ProjectCard'
import '../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <div id="pcard-container">
            <Card title="City Bus System"
             img="/images/bus-system.PNG"
             repo="https://github.com/hmanjun/City-Bus-System" 
             deployed="https://t12-bus-system.herokuapp.com/" />

            <Card title="City Bus System"
             img="/images/bus-system.PNG"
             repo="https://github.com/hmanjun/City-Bus-System" 
             deployed="https://t12-bus-system.herokuapp.com/" />
        </div>
    )
}