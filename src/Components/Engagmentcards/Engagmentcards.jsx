import "./Engagmentcards.css"
import { useState} from "react"

function Engagmentcards(props){
    const [isActive, setIsActive] = useState(false);

    function handleCardClick (){
        setIsActive(!isActive);
    };
    return(
        <div id="engcard" className={`${props.gridname} ${props.theme} ${isActive ? 'active' : ''}`}
        onClick={handleCardClick}>
            <p id={props.theme === 'dark' ? 'Darkpargname' : 'Lightpargname'}
            >{props.metric}</p>
            <img src={props.platform} id="imgplform"/>
            <p id={props.theme === 'dark' ? 'Darknumshow' : 'Lightnumshow'}
            >{props.value}</p>
            <p id="changenum" className={props.chancolor}
            ><img src={props.change} />{props.numfollowers}</p>


        </div>


    )
}

export default Engagmentcards

