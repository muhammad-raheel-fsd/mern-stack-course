import SectionOutlet from "../../common/SectionOutlet/Index";
import useFetch from "../../../hooks/useFetch";
import Typography from "../../common/Typography/Index";
import FiltersModule from "../../modules/FiltersModule/Index";

const FindHomeSection = () => {
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes`
  );
  // console.log("data =====>", data, isLoading, error);
  return (
    <SectionOutlet parentClassName="" id="find-a-home">
      <Typography variant="h2" before>
        Find your next place to live
      </Typography>
      <FiltersModule />
    </SectionOutlet>
  );
};

export default FindHomeSection;
