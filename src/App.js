import React from "react";
import Header from "./Includes/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./Component/Dashboard"
import AddEditForm from "./Component/AddEditForm";
import Practice from "./Component/Practice"

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/add_data" component={AddEditForm} />
          <Route exact path="/add_data/:id" component={AddEditForm} />
          <Route exact path="/practice" component={Practice} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
