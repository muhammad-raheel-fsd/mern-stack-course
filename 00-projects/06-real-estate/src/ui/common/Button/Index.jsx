import { CN } from "../../../utils";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={CN(
        "bg-[#FFAC12] text-black px-6 py-3 rounded-tr-2xl font-bold",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
