import { Route } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";
import TaskList from "./components/TaskList";

const Baserouter = ()=>{
    <div>
        <Route exact path='/' component={TaskList}/>
        <Route exact path='/:artID' component={TaskDetail}/>
    </div>
}

export default Baserouter