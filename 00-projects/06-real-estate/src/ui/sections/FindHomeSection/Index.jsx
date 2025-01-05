import SectionOutlet from "../../common/SectionOutlet/Index";
import useFetch from "../../../hooks/useFetch";

const FindHomeSection = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:3000/homes?property_type_=Charming Bungalow"
  );

  console.log("data =====>", data, isLoading, error);
  return (
    <SectionOutlet parentClassName="bg-blue-500" id="find-a-home">
      FindHomeSection
    </SectionOutlet>
  );
};

export default FindHomeSection;
