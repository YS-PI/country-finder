import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);
  const [captureId, setCaptureId] = useState({});
  const [input, setInput] = useState("");
  const [inputRegion, setInputRegion] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const getCountry = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const resp = await fetch(url);
    const data = await resp.json();

    const countryData = data.map((country) => ({
      name: country.name.common,
      nativename: country.name.nativeName?.spa?.common,
      subregion: country.subregion,
      population: country.population,
      region: country.region,
      capital: country.capital,
      img: country.flags.svg,
      topLevelDomain: country.tld,
    }));

    setCountry(countryData);
  };

  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    const countryFilter = country.filter((country) =>
      country.name.toLowerCase().includes(input.toLocaleLowerCase())
    );
    setFilterCountry(countryFilter);
  }, [country, input]);

  useEffect(() => {
    const regionFilter = country.filter((country) =>
      country.region.toLowerCase().includes(inputRegion.toLocaleLowerCase())
    );
    setFilterCountry(regionFilter);
  }, [country, inputRegion]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleChangeRegion = (e) => {
    setInputRegion(e.target.value);
  };

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <CountryContext.Provider
      value={{
        country,
        input,
        filterCountry,
        openModal,
        captureId,
        inputRegion,
        handleChange,
        handleChangeRegion,
        setCaptureId,
        handleClickOpen,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider };
export default CountryContext;
