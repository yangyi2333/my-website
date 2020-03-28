import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import RouteList from './route'
function App() {
    // 404页面
    // const AsyncErro = Loadable({
    //     loader: () => import('../page/notfind'),
    //     loading: MyLoadingComponent
    // });
  return (
      <Router>
          <RouteList/>
      </Router>
  );
}

export default App;
