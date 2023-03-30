import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./Components/TopNav.tsx";
import AddDealer from "./Gun Masters/AddDealer";
import addPurchase from "./Gun Masters/AddPurchase";
import Dashboard from "./Gun Masters/Dashboard";
import SellGun from "./Gun Masters/SellGun";
import ViewDealers from "./Gun Masters/ViewDealers";
import ViewPurchased from "./Gun Masters/ViewPurchased";
import ViewSold from "./Gun Masters/ViewSold";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/addPurchase" component={addPurchase} />
        <Route exact path="/sellGun" component={SellGun} />
        <Route exact path="/viewPurchased" component={ViewPurchased} />
        <Route exact path="/viewDealers" component={ViewDealers} />
        <Route exact path="/viewSold" component={ViewSold} />
        <Route exact path="/addDealer" component={AddDealer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
