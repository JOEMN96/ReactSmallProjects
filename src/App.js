import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import BirthdayCard from "./Components/Projects/birthdayProj/BirthdayCard";
import Review from "./Components/Projects/PROJ3_Review/review";
import Tours from "./Components/Projects/PROJ2_TourSearch/Tours";
import Error from "./Components/Error";
import Accordian from "./Components/Projects/PROJ4_accordian/Accordian";
import FilterMenuMAin from "./Components/Projects/PROJ5_filterMenu/FilterMenuMAin";

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

        <Route exact path="/proj4">
          <Accordian />
        </Route>

        <Route exact path="/proj5">
          <FilterMenuMAin />
        </Route>

        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
