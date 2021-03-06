import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Pehia from "./components/pehia/Pehia";
// import IbetoJnr from "./components/ibetoJnr/IbetoJnr";
import IbetoMainSite from "./components/ibetoMainSite/IbetoMainSite";
import PageNotFound from "./components/PageNotFound";

function App({ hideLoader }) {
   useEffect(() => {
      hideLoader();
   });

   return (
      <div className='App'>
         <Switch>
            <Route path='/' component={IbetoMainSite} exact />
            {/* <Route path='/junior' component={IbetoJnr} /> */}
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/pehia' component={Pehia} />
            <Route component={PageNotFound} />
         </Switch>
      </div>
   );
}

export default App;
