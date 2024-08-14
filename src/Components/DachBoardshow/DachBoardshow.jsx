import Cardsdesign from "../Cardsdesign/Cardsdesign"
import { useState, useEffect } from "react"
import "./DachBoardshow.css"
import Engagmentcards from "../Engagmentcards/Engagmentcards"
import Engagmentshow from "../Engagmentshow/Engagmentshow"

function DachBoardshow(props){
    const [Arrayofobjects, setArrayofobjects] = useState([{
        id:1,
        platform: "/assets/imges/icon-facebook.svg",
        username: "@nathanf",
        metric: "Followers",
        value: 1987,
        change: "/assets/imges/icon-up.svg",
        numfollowers:"12 Today",
        border:"border1"

    },
    {
        id:2,
        platform: "/assets/imges/icon-twitter.svg",
        username: "@nathanf",
        metric: "Followers",
        value: 1044,
        change: "/assets/imges/icon-up.svg",
        numfollowers: "99 Today",
        border:"border1"
    },
    {
        id:3,
        platform: "/assets/imges/icon-instagram.svg",
        username: "@realnathanf",
        metric: "Followers",
        value: 11000,
        change: "/assets/imges/icon-up.svg",
        numfollowers: "1099 Today",
        border:"border2"
    },
    {
        id:4,
        platform: "/assets/imges/icon-youtube.svg",
        username: "Nathan F.",
        metric: "Subscribers",
        value: 8239,
        change: "/assets/imges/icon-down.svg",
        numfollowers: "144 Today",
        border:"border3"
    }]);
    const [theme, setTheme] = useState('dark');

     

       const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        document.getElementById('root').setAttribute('data-theme', theme);
    }, [theme]);

    
    return(
        <>
         <div id="socialdiv">
            <div id="title">
            <h1 id={theme === 'dark' ? 'DarkSocialhead' : 'LightSocialhead'}>Social Media Dashboard</h1>
            <p id="totalparg">Total Followers: 23,004</p>
            </div>

            <div id="modeswitch">
                <span id={theme === 'dark' ? 'DarkMode' : 'LightMode'}
                >{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            <label className="switch">
  <input type="checkbox" onChange={toggleTheme}></input>
  <span className="slider round"></span>
</label>

            </div>
            </div>

            <div id="fourcards">
                {Arrayofobjects.map((item) =>{
                    return(
                        <Cardsdesign
                        key={item.id}
                        platform={item.platform}
                        username={item.username}
                        metric={item.metric}
                        value={item.value}
                        change={item.change}
                        numfollowers={item.numfollowers}
                        border={item.border}
                        theme={theme}

                        ></Cardsdesign>
                    )
                }
                )}
            </div>

            <Engagmentshow
            theme={theme}
            ></Engagmentshow>

            

            
        
            </>
    )
}

export default DachBoardshow

