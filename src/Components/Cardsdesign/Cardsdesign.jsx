import "./Cardsdesign.css"
import { useState} from "react"

function Cardsdesign(props){
    const [isActive, setIsActive] = useState(false);

    function handleCardClick (){
        setIsActive(!isActive);
    };

    return(
        <div id="card" className={`${props.border} ${props.theme} ${isActive ? 'active' : ''}`} 
        onClick={handleCardClick}>
        <p id={props.theme === 'dark' ? 'Darkpargplatform' : 'Lightpargplatform'}
        ><img src={props.platform}/>  {props.username}</p>
        <h1 id={props.theme === 'dark' ? 'Darkfollnum' : 'Lightfollnum'}>{props.value}</h1>
        <p id={props.theme === 'dark' ? 'Darkpargflowers' : 'Lightpargflowers'}
        >{props.metric}</p>
        <img src={props.change} />
        <span id="today">{props.numfollowers}</span>
    </div>
    )
}

export default Cardsdesign

