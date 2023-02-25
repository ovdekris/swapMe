import style from "./Header.module.css";
import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";
import Panel from "./Panel/Panel";
function Header(){
    return(
    <div className={style.header}>
        <Logo/>
        <SearchInput/>
       <Panel/>
    </div> )
}

export default Header;