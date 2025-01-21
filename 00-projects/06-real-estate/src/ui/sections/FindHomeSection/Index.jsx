import SectionOutlet from "../../common/SectionOutlet/Index";
import useFetch from "../../../hooks/useFetch";
import Typography from "../../common/Typography/Index";
import FiltersModule from "../../modules/FiltersModule/Index";
import { generateRandomString } from "../../../utils";
import HomeCard from "../../common/HomeCard/Index";
import React from "react";
import { useSearchParams } from "react-router";
import NavigationLink from "../../common/NavigationLink/Index";

const FindHomeSection = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes?${searchParams.toString()}`
  );
  // console.log("data =====>", data, isLoading, error);
  return (
    <SectionOutlet parentClassName="" id="find-a-home">
      <Typography variant="h2" before>
        Find your next place to live
      </Typography>
      <FiltersModule />
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.length > 0 &&
          data.map(({ id, ...home }) => (
            <React.Fragment key={generateRandomString()}>
              <NavigationLink to={`/homes/${id}`}>
                <HomeCard {...home} />
              </NavigationLink>
            </React.Fragment>
          ))}
      </div>
    </SectionOutlet>
  );
};

export default FindHomeSection;
