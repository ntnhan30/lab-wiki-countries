// jshint ignore: start
import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Route } from "react-router-dom";
import countries from "./countries.json";

class CountryDetail extends React.Component {
  render() {
    let id = this.props.match.params.id;
    let country = countries.find(c => c.cca3 === id);

    return (
      <div className="countryDetail">
        <h1>Country Detail</h1>
        <p>{country.name.official}</p>
        {country.borders.map(b => {
          return <li>{countries.find(c => c.cca3 === b).name.official}</li>;
        })}
      </div>
    );
  }
}

export default CountryDetail;
