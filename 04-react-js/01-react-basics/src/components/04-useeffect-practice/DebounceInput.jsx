import React, { useEffect } from "react";
import { countries } from "../../data/countries";

// const randomString = "Heworld, welcome to the universe.";

//  console.log(randomString.indexOf("raheel"))

// const randomArray = [
//   "Hello",
//   "world",
//   "welcome",
//   "to",
//   "the",
//   "universe",
// ];
// console.log(randomArray.indexOf("rahel"));

const DebounceInput = () => {
  const [countryName, setCountryName] = React.useState("");
  const [searchedValue, setSearchedValue] = React.useState("");

  // console.log("Searched value: ", searchedValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // console.log("Mounts...")
      // const exists = countries.includes(countryName);
      const existingValueIndex = countries.indexOf(countryName);
      if (existingValueIndex > -1) {
        setSearchedValue(countries[existingValueIndex]);
        console.log("You searched for: ", countries[existingValueIndex]);
      } else {
        setSearchedValue("Oops! Country not found");
        console.log("Oops! Country not found");
      }
    }, 2000);

    return () => {
      // console.log("Unmounts or rerenders...")
      clearTimeout(timeoutId);
    };
  }, [countryName]);

  const handleChangeInput = (event) => {
    setCountryName(event.target.value);
  };
  return (
    <input
      placeholder="Enter your name"
      value={countryName}
      onChange={handleChangeInput}
    />
  );
};

export default DebounceInput;
