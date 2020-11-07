import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        {/* <Route path="/project"></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
