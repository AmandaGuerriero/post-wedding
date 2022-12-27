import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Story from "./pages/Story"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {

  render() {
    
    return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={Story} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
}

export default App;
