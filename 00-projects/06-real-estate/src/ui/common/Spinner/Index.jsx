import { CN } from "../../../utils";
// import PropTypes from "prop-types";

const Spinner = ({ className, ...props }) => {
  return (
    <div
      className={CN("w-8 h-8 flex justify-center items-center", className)}
      {...props}
    >
      <div className="border-4 border-r-blue-300 border-blue-600 rounded-full w-full h-full animate-spin"></div>
    </div>
  );
};

export default Spinner;

// Spinner.propTypes = {
//   className: PropTypes.string,
// };
