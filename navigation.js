import React from "react";
import { 
    Route,
    Switch,
    Routes ,
    Redirect,
    Router,
    BrowserRouter,
    
    
  } from "react-router-dom";

import AddPost from "./AddPost";
import Dashboard from "./dashboard";

export default function navigation() {
  let hashHistory = Router.hashHistory;
  return (
 
    <div>
      <Routes history={hashHistory}>
      
          <Route path="/" element={<Dashboard />} exact />     
          <Route path="/AddPost" element={<AddPost />} exact />
      
        </Routes>
    </div>
  )
}
