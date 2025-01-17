import React from "react";
import FormInput from "../../common/Inputs/FormInput/Index";

const FiltersModule = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <FormInput label="Looking for" id="looking-for" />
      <FormInput label="Location" id="location" />
      <FormInput label="Property Type" id="property-type" />
      <FormInput label="Price" id="price" />
    </div>
  );
};

export default FiltersModule;
