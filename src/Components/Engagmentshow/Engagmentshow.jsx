import "./Engagmentshow.css"
import { useState, useEffect } from "react"
import Engagmentcards from "../Engagmentcards/Engagmentcards"

function Engagmentshow(props){
    const [EngagmentArray, setEngagmentArray] = useState([{
        id:1,
        platform: "/assets/imges/icon-facebook.svg",
        metric: "Page Views",
        value: 87,
        change: "/assets/imges/icon-up.svg",
        numfollowers: "3%",
        gridname:"FC1",
        chancolor: "green"
    },
    {
        id:2,
        platform: "/assets/imges/icon-facebook.svg",
        metric: "Likes",
        value: 52,
        change: "/assets/imges/icon-down.svg",
        numfollowers: "2%",
        gridname:"FC2",
        chancolor: "red"
    },
    {
        id:3,
        platform: "/assets/imges/icon-instagram.svg",
        metric: "Likes",
        value: 5462,
        change: "/assets/imges/icon-up.svg",
        numfollowers: "2257%",
        gridname:"instagram1",
        chancolor: "green"
    },
    {
        id:4,
        platform: "/assets/imges/icon-instagram.svg",
        metric: "Profile Views",
        value: 52000,
        change: "/assets/imges/icon-up.svg",
        numfollowers: "1375%",
        gridname:"instagram2",
        chancolor: "green"
    },
    {
        id:5,
        platform: "/assets/imges/icon-twitter.svg",
        metric: "Retweets",
        value: 117,
        change: "/assets/imges/icon-up.svg",
        numfollowers: "303%",
        gridname:"twitter1",
        chancolor: "green"
    },
    {
        id:6,
        platform: "/assets/imges/icon-twitter.svg",
        metric: "Likes",
        value: 507,
        change: "/assets/imges/icon-up.svg",
        numfollowers:"553%",
        gridname:"twitter2",
        chancolor: "green"
    },
    {
        id:7,
        platform: "/assets/imges/icon-youtube.svg",
        metric: "Likes",
        value: 107,
        change: "/assets/imges/icon-down.svg",
        numfollowers: "19%",
        gridname:"youtube1",
        chancolor: "red"
    },
    {
        id:8,
        platform: "/assets/imges/icon-youtube.svg",
        metric: "Total Views",
        value: 1407,
        change: "/assets/imges/icon-down.svg",
        numfollowers: "12%",
        gridname:"youtube2",
        chancolor: "red"
    }]);
    
       

       
return(
<>
    <div id={props.theme === 'dark' ? 'DarkOverview' : 'LightOverview'}>
                <h2>Overview - Today</h2>
            </div>
    <div id="mainengcards">
                {EngagmentArray.map((eng)=>{
                    return(
                <Engagmentcards
                key={eng.id}
                platform={eng.platform}
                metric={eng.metric}
                value={eng.value}
                change={eng.change}
                numfollowers={eng.numfollowers}
                gridname={eng.gridname}
                chancolor={eng.chancolor}
                theme={props.theme}

                
                
                ></Engagmentcards>
            )})}
            </div>
            </>
)
}

export default Engagmentshow


