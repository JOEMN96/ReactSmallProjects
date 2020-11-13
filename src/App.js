import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import BirthdayCard from "./Components/Projects/birthdayProj/BirthdayCard";
import Review from "./Components/Projects/PROJ3_Review/review";
import Tours from "./Components/Projects/PROJ2_TourSearch/Tours";
import Error from "./Components/Error";
import Accordian from "./Components/Projects/PROJ4_accordian/Accordian";
import FilterMenuMAin from "./Components/Projects/PROJ5_filterMenu/FilterMenuMAin";
import ScrollToTop from "./Components/FIxScroll";
import TabsProj from "./Components/Projects/PROJ6_Tabs/TabsProj";

function App() {
  return (
    <Router>
      <ScrollToTop />
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

        <Route exact path="/proj6">
          <TabsProj />
        </Route>

        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
