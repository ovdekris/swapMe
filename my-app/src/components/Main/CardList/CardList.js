import style from "./CardList.module.css"
import Card from "./Card/Card";

function CardList(){
    return(
        <div className={style.container}>
            <div className={style.content}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
export default CardList;