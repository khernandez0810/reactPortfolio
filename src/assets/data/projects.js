
import weatherPic from '../images/weathermateImg.png';
import planner from '../images/dailyPlannerImg2.png';
import blogpage from '../images/techBlogPic.png';
import chopshop from '../images/chopShop.jpg';
import IC from '../images/IC.png';
import wedding from '../images/wedding.png'





const projects = [
            {   
        id: 7,
        name: 'Wedding Website',
        image: wedding,
        alt: 'tko app',
        repoLink: 'https://github.com/khernandez0810/wedding',
        deployLink: 'kevin-cindy.com',
        description: 'Personal wedding website created with React, Cloudflare'
    },
        {   
        id: 8,
        name: 'Interpreters Connect Business site',
        image: IC,
        alt: 'IC',
        repoLink: 'https://github.com/khernandez0810/IC',
        deployLink: 'Interpretersconnectllc.com',
        description: 'Business page advertising services'

    },
    {   
        id: 1,
        name: 'WeatherMate',
        image: weatherPic,
        alt: 'pic of weathermate app',
        repoLink: 'https://github.com/khernandez0810/WeatherMate',
        deployLink: 'https://khernandez0810.github.io/WeatherMate/',
        description: 'An application to give tou current and future 5 day forecast for your city'

    },
    {
        id:3,
        name: 'Daily Planner',
        image: planner,
        alt: 'pic of planner',
        repoLink: 'https://github.com/khernandez0810/Daily-Planner',
        deployLink: 'https://khernandez0810.github.io/Daily-Planner/',
        description: 'An application allowing you to track and manage your daily activites in real time'
    },
    {
        id:4,
        name: 'Blog-page',
        image: blogpage,
        alt: 'pic of blog page',
        repoLink: 'https://github.com/khernandez0810/BlogPage',
        deployLink: 'https://polar-ridge-60825.herokuapp.com/',
        description: 'A blog page allowing you to sign in and interact with others on your blog thoughts'
    },

    {   
        id: 6,
        name: 'Chop Shop TKO',
        image: chopshop,
        alt: 'tko app',
        repoLink: 'https://github.com/gamesharks/chop-shop-tko',
        deployLink: 'https://github.com/gamesharks/chop-shop-tko',
        description: 'An application with backend and front end server to place bets on MMA'

    },

]

export default projects;