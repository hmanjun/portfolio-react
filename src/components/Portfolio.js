import Card from './ProjectCard'
import '../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <div id="pcard-container">

            <Card title="Genshin Meta"
             img="/images/genshin-meta.PNG"
             repo="https://github.com/hmanjun/genshin-meta"
             description="A full stack project that serves data for the game Genshin Impact. Created using React front-end and mongodb backend. Uses graphql to query between the client and server."
             deployed="https://genshin-meta-t12.herokuapp.com/" />
            <Card title="City Bus System"
             img="/images/bus-system.PNG"
             repo="https://github.com/hmanjun/City-Bus-System"
             description="Scalable database that can be used by city planners as a framework for setting up bus routes and bus stops. Uses MySQL, Express, and Handlebars." 
             deployed="https://t12-bus-system.herokuapp.com/" />

            <Card title="Social Media API"
             img="/images/social-media.png"
             repo="https://github.com/hmanjun/social-media-api"
             description="A built out back-end framework for a simple social media app. Uses MongoDB in the backend with assistance from mongoose ODM." 
             deployed="https://youtu.be/PItJlGoTRtc" />

            <Card title="E-commerce Site Database"
             img="/images/ecommerce-site.png"
             repo="https://github.com/hmanjun/ecommerce-site-database"
             description="This application creates a back-end database and routing to create and send relevant data pertaining to a e-commerce sites storage. Uses a MySQL database with assistance from sequelize ORM to simplify CRUD actions." 
             deployed="https://youtu.be/W6meEHUvbvI" />

            <Card title="Team Profile Storer"
             img="/images/team-profile.png"
             repo="https://github.com/hmanjun/Team-Profile-Storer"
             description="This application uses node, inquirer, and jest to generate a team website that hosts information about each team member. After user inputs required information, an html page is generated." 
             deployed="https://youtu.be/7UT0epiHRB0" />
            
            <Card title="Dynamic Cookbook"
             img="/images/dynamic-cookbook.png"
             repo="https://github.com/hmanjun/dynamic-cookbook"
             description="Dynamic-Cookbook is a food resource designed to help users create delicious meals using the ingredients they already have in their pantry. It allows users to store ingredients they have in their pantry to local storage and on request will make a request to a third-party api to get recipes based on what ingredient the user has inputted." 
             deployed="https://alenambo02.github.io/dynamic-cookbook/" />

            <Card title="Weather Tracker"
             img="/images/weather-tracker.png"
             repo="https://github.com/hmanjun/weather-tracker"
             description="This web application is a simple weather app that displays the current temperature and the five day forecast given a user input. I utilize OpenWeather's one call, and geocoding API to convert the user inputted city name to longitude and latitude coordinates to get relevent weather data." 
             deployed="https://hmanjun.github.io/weather-tracker/" />
        </div>
    )
}