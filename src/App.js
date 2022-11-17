import React, { Component } from "react";

import CityItem from "./Components/CityItem.tsx";

import { CityMockUp as cities } from "./Utility/mockup";

import "./Styles/main.css";

class App extends Component {
  state = {
    cities: cities,
    activeId: !!cities.length ? cities[0].id : -1,
  };

  render() {
    return (
      <div className="container">
        {this.state.cities.map((item) => (
          <CityItem
            key={item.id}
            name={item.name}
            isActive={item.id === this.state.activeId}
          />
        ))}
      </div>
    );
  }
}

export default App;
