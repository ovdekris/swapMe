import './MainsPage.css';
import Header from "./Header/Header";
import CardList from "./CardList/CardList";
function MainPage(){
   return(
       <div className="box">
            <Header/>
            <CardList/>
       </div>
   )
}
export default MainPage