import { CN } from "../../../utils";

const Anchor = ({ children, className, ...rest }) => {
  return (
    <a className={CN("text-white cursor-pointer font-medium", className)} {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
