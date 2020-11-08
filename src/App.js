import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import BirthdayCard from "./Components/Projects/birthdayProj/BirthdayCard";
import Review from "./Components/Projects/PROJ3_Review/review";
import Tours from "./Components/Projects/PROJ2_TourSearch/Tours";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/proj1">
          <BirthdayCard />
        </Route>
        <Route exact path="/proj2">
          <Tours />
        </Route>
        <Route exact path="/proj3">
          <Review />
        </Route>
        <Route exact path="*">
          {/* <h1>Error</h1> Add ERr page Jo */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
