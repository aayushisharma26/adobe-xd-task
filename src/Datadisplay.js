import "./App.css"
import Header from './components/Header'
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Artists from "./components/Artists";

function DispaltData(){
    return(
        <div className="main">
            <Header/>
            <Sidebar/>
            <Feed/>
            <Feed/>
            <Artists/>
        </div>
        
    )
}
export default DispaltData;