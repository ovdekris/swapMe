import style from "./SearchInput.module.css";

function SearchInput(){
    return(
        <div className={style.header__location}>
            <input type="text" className={style.header__location__input} placeholder="What are you looking for?"/>
            <div className={style.header__location__input__second}>
                <select className={style.header__location__select}>
                    <option value="1">Lublin</option>
                    <option value="2">Warsaw</option>
                    <option value="3">Krakow</option>
                    <option value="4">Poznan</option>
                    <option value="5">Olkush</option>
                    <option value="6">Wroclaw</option>
                </select>
            </div>
        </div>
    )
}
export default SearchInput;