import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <div className='app_container'>
        <Router>
          <Route path="/site" component={SiteWrapper} />
        </Router>
      </div>
  );
}

export default App;
