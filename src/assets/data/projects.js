
import weatherPic from '../images/weathermateImg.png';
import noteTaker from '../images/noteTakerApp.png';
import planner from '../images/dailyPlannerImg2.png';
import blogpage from '../images/techBlogPic.png';
import trivia from '../images/quizApp.png';
import chopshop from '../images/chopShop.jpg'





const projects = [
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
        id:2,
        name: 'Note Taker Application',
        image: noteTaker,
        alt: 'pic of note taker app',
        repoLink: 'https://github.com/khernandez0810/Note-Taker-application',
        deployLink: 'https://warm-sierra-20051.herokuapp.com/',
        description: 'An application allowing you to add and delete your notes to keep track of your day'
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
        id:5,
        name: 'Sport Trivia Quiz application',
        image: trivia,
        alt: 'pic of quiz application',
        repoLink: 'https://github.com/khernandez0810/TriviaTime',
        deployLink: 'https://khernandez0810.github.io/TriviaTime/',
        description: 'A trivia quiz application allowing you to test your knowledge of current and past sports'
    },
    {   
        id: 6,
        name: 'Chop Shop TKO',
        image: chopshop,
        alt: 'tko app',
        repoLink: 'https://github.com/gamesharks/chop-shop-tko',
        deployLink: 'https://chop-shop-tko.herokuapp.com/',
        description: 'An application with backend and front end server to place bets on MMA'

    },

]

export default projects;