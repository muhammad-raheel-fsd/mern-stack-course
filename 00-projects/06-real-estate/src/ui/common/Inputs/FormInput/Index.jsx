import React from "react";
import Typography from "../../Typography/Index";
import { CN } from "../../../../utils";

const FormInput = ({
  label,
  id,
  containerClassName,
  inputClassName,
  labelClassName,
  ...props
}) => {
  return (
    <div className={CN(containerClassName, "flex flex-col gap-1")}>
      {label && (
        <Typography variant="label" htmlFor={id} className={CN(labelClassName)}>
          {label}
        </Typography>
      )}
      <input id={id} className={CN(inputClassName)} {...props} />
    </div>
  );
};

export default FormInput;
