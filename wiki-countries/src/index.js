// jshint ignore: start
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import CountryDetails from "./CountryDetails";

import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import countries from "./countries.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="row">
          <div class="col-5">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">
                <h1> Wiki Countries</h1>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                {countries.map(c => {
                  return (
                    <Link to={"/countries/" + c.cca3}>
                      <li key={c.cca3}>{c.name.official}</li>
                    </Link>
                  );
                })}
              </a>
            </div>
          </div>
          <div class="col-7">
            {" "}
            <Route path="/countries/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
