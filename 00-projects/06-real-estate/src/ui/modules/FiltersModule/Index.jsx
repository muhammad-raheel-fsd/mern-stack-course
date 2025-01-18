import React from "react";
import FormInput from "../../common/Inputs/FormInput/Index";
import useFetch from "../../../hooks/useFetch";

const FiltersModule = () => {
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/filters`
  );

  console.log("data =====>", data, isLoading, error);
  return (
    <div className="flex justify-between items-center gap-4">
      <FormInput
        containerClassName="grow"
        variant="select"
        id="looking-for"
        defaultValue="Looking for"
        options={data.looking_for ?? []}
      />
      <FormInput
        containerClassName="grow"
        variant="select"
        id="location"
        defaultValue="Select Location"
        options={data.location ?? []}
      />
      <FormInput
        variant="select"
        containerClassName="grow"
        id="property-type"
        defaultValue="Select Property Type"
        options={data.property_type ?? []}
      />
      <FormInput
        variant="select"
        id="price"
        containerClassName="grow"
        defaultValue="Select Price"
        options={data.price ?? []}
      />
    </div>
  );
};

export default FiltersModule;
