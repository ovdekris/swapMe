import style from "../Header.module.css";
import logo from "./logo.png";

function Logo(){
   return(
           <div className="header__logo">
               <p className="header__logo__title">swapMe</p>
               <img src={logo} alt="logo" className="header__logo__img"/>
           </div>
   )
}
export default Logo;