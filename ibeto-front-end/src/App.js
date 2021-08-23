import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
// import IbetoJnr from "./components/ibetoJnr/IbetoJnr";
import IbetoMainSite from "./components/ibetoMainSite/IbetoMainSite";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-199155692-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
         </Switch>
      </div>
   );
}

export default App;
