import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import IbetoJnr from "./components/ibetoJnr/IbetoJnr";
import IbetoMainSite from "./components/ibetoMainSite/IbetoMainSite";

function App() {
   return (
      <div className='App'>
         <Switch>
            
            <Route path='/' component={IbetoMainSite} exact />
            <Route path='/junior' component={IbetoJnr} />
            <Route path='/dashboard' component={Dashboard} />
         </Switch>
      </div>
   );
}

export default App;
