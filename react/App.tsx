import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2?dts";
import { Route, Switch } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { createGlobalStyle } from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Home } from "./pages/Home.tsx";
import { Counter } from "./pages/Counter.tsx";

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//   }
// `;

const App = () => {
  return (
    <React.Fragment>
      {/*<GlobalStyle/>*/}
      <Switch>
        <Route path="/counter">
          <Counter/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App/>, document.querySelector("#main"));
});
