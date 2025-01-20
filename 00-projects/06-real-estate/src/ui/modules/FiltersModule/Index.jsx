import React, { useEffect, useState } from "react";
import FormInput from "../../common/Inputs/FormInput/Index";
import useFetch from "../../../hooks/useFetch";
import { useSearchParams } from "react-router";
import Button from "../../common/Button/Index";
const FiltersModule = () => {
  const [filters, setFilters] = useState({});
  const [_, setSearchParams] = useSearchParams();
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/filters`
  );
  // const queryParams = new URLSearchParams();

  const handleChange = (e) => {
    // queryParams.set(e.target.name, e.target.value);
    // console.log(queryParams);
    // window.location.search = queryParams.toString();
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setSearchParams(filters);
  }, [filters]);

  // console.log("queryParams =====>", searchParams.get("looking_for"));

  // console.log("filters =====>", filters);

  // let queryString = "";
  // Object.entries(filters).forEach(([key, value]) => {
  //   queryString += `${key}=${value}&`;
  // });
  // console.log("queryString =====>", queryString);

  const handleClearFilters = () => {
    setFilters({});
    setSearchParams({});
  };

  return (
    <div className="flex justify-between items-center gap-4">
      <FormInput
        containerClassName="grow"
        variant="select"
        id="looking-for"
        defaultValue="Looking for"
        options={data.looking_for ?? []}
        name="looking_for"
        onChange={handleChange}
        value={filters.looking_for}
      />
      <FormInput
        containerClassName="grow"
        variant="select"
        id="location"
        defaultValue="Select Location"
        options={data.location ?? []}
        name="location"
        value={filters.location}
        onChange={handleChange}
      />
      <FormInput
        variant="select"
        containerClassName="grow"
        id="property-type"
        defaultValue="Select Property Type"
        options={data.property_type ?? []}
        name="property_type"
        onChange={handleChange}
        value={filters.property_type}
      />
      <FormInput
        variant="select"
        id="price"
        containerClassName="grow"
        defaultValue="Select Price"
        options={data.price ?? []}
        name="price"
        onChange={handleChange}
        value={filters.price}
      />
      <Button onClick={handleClearFilters}>Clear Filters</Button>
    </div>
  );
};

export default FiltersModule;

// http://localhost:3000/homes?property_type=apartment&location=new york&looking_for=buy&price=1000000
