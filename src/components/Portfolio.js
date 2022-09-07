import Card from './ProjectCard'
import '../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <div id="pcard-container">
            <Card title="City Bus System"
             img="/images/bus-system.PNG"
             repo="https://github.com/hmanjun/City-Bus-System" 
             deployed="https://t12-bus-system.herokuapp.com/" />

            <Card title="Social Media API"
             img="/images/social-media.png"
             repo="https://github.com/hmanjun/social-media-api" 
             deployed="https://youtu.be/PItJlGoTRtc" />

            <Card title="E-commerce Site Database"
             img="/images/ecommerce-site.png"
             repo="https://github.com/hmanjun/ecommerce-site-database" 
             deployed="https://youtu.be/W6meEHUvbvI" />

            <Card title="Team Profile Storer"
             img="/images/team-profile.png"
             repo="https://github.com/hmanjun/Team-Profile-Storer" 
             deployed="https://youtu.be/7UT0epiHRB0" />
            
            <Card title="Dynamic Cookbook"
             img="/images/dynamic-cookbook.png"
             repo="https://github.com/hmanjun/dynamic-cookbook" 
             deployed="https://alenambo02.github.io/dynamic-cookbook/" />

            <Card title="Weather Tracker"
             img="/images/weather-tracker.png"
             repo="https://github.com/hmanjun/weather-tracker" 
             deployed="https://hmanjun.github.io/weather-tracker/" />

            <Card title="Genshin Meta"
             img="/images/genshin-meta.PNG"
             repo="https://github.com/hmanjun/genshin-meta"
             deployed="https://genshin-meta-t12.herokuapp.com/" />
        </div>
    )
}