import React, { Component } from "react";

import countryCard from "../../views/countryCard/countryCard";

class Countries extends Component {
  render() {
    return (
      <section className="countries">
        {countryCard({
          imgSrc: "https://picsum.photos/200/300",
          name: "Country",
          population: 250,
          buttonText: "Details",
          callback: null,
        })}
      </section>
    );
  }
}

export default countryCard;
