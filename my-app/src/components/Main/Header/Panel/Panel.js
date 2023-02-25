import style from "./Panel.module.css";
import heartLogo from "./Image/heartLogo.png";
import chatLogo from "./Image/chatLogo.png";
import soundLogo from "./Image/soundLogo.png";
import profileLogo from "./Image/profileLogo.png";

function Panel(){
    return(
        <div className={style.header__panel}>
            <img src={heartLogo} alt="heart"/>
            <img src={chatLogo} alt="chat"/>
            <img src={soundLogo} alt="sound"/>
            <img src={profileLogo} alt="profile"/>
        </div>
    )
}
export default Panel;