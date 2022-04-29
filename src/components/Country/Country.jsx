import React from "react";
import "../../styles/country.css";
import useCountry from "../../hooks/useCountry";
import { Grid } from "@mui/material";
import ModalCard from "../ModalCard/ModalCard";

const Country = () => {
  const {
    filterCountry,
    input,
    handleChange,
    setCaptureId,
    openModal,
    handleClickOpen,
    handleChangeRegion,
  } = useCountry();

  const handleClick = (name) => {
    const CaputureEvent = filterCountry.filter((item) => item.name === name);
    setCaptureId(CaputureEvent[0]);
  };
  return (
    <div className="country">
      <div className="country__filters">
        <input
          type="text"
          placeholder="Search for a country"
          className="country__input"
          value={input}
          onChange={handleChange}
        />
        <select onChange={handleChangeRegion} className="country__select">
          <option value="">All Regions</option>
          <option value="americas">Americas</option>
          <option value="africa"> Africa</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <Grid container spacing={4}>
        {filterCountry.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="country__cards"
              onClick={() => {
                handleClick(item.name);
                handleClickOpen();
              }}
            >
              <img src={item.img} alt={item.name} />
              <div className="country__cards--text">
                <h1> {item.name} </h1>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      {openModal && <ModalCard handleClickOpen={handleClickOpen} />}
    </div>
  );
};

export default Country;
