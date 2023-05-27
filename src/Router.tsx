import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import CoinInfo from "./routes/CoinInfo";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <CoinInfo />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
