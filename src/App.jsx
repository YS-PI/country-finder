import React from "react";
import Header from "./components/Header/Header";
import Country from "./components/Country/Country";
import { CountryProvider } from "./context/CountryProvider";

const App = () => {
  return (
    <CountryProvider>
      <Header />
      <Country />
    </CountryProvider>
  );
};

export default App;
