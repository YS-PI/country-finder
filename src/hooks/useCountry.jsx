import { useContext } from "react";
import CountryContext from "../context/CountryProvider";

const useContry = () => useContext(CountryContext);

export default useContry;
