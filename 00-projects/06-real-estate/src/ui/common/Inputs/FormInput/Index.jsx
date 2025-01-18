import React from "react";
import Typography from "../../Typography/Index";
import { CN, generateRandomString } from "../../../../utils";

const FormInputElement = ({ id, inputClassName, ...props }) => {
  return <input id={id} className={CN(inputClassName)} {...props} />;
};

const FormSelectElement = ({ id, inputClassName, options, ...props }) => {
  return (
    <select id={id} className={CN(inputClassName, "w-full py-2 rounded-md border border-gray-800")} {...props}>
      {options.map((option) => (
        <option
          key={generateRandomString()}
          value={option.value}
          disabled={option.disabled}
          selected={option.selected}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

const inputElements = {
  input: FormInputElement,
  select: FormSelectElement,
};

const FormInput = ({
  variant = "input",
  label,
  id,
  containerClassName,
  inputClassName,
  labelClassName,
  ...props
}) => {
  const InputElement = inputElements[variant];
  return (
    <div className={CN(containerClassName, "flex flex-col gap-1")}>
      {label && (
        <Typography variant="label" htmlFor={id} className={CN(labelClassName)}>
          {label}
        </Typography>
      )}
      <InputElement id={id} {...{ ...props, inputClassName }} />
    </div>
  );
};

export default FormInput;
