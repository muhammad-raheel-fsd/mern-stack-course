import React from "react";
import { Link } from "react-router";
import useDebounce from "../../../hooks/useDebounce";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../common/Spinner/Index";

// const fetchHomes = async () => {
//   const response = await fetch("http://localhost:3000/homes");
//   const data = await response.json();
//   return data;
// };

const RefresherPage = () => {
  const [mount, setMount] = React.useState(0);
  const [update, setUpdate] = React.useState(0);
  const [unmount, setUnmount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  // const [homes, setHomes] = React.useState([]);
  const { debouncedValue } = useDebounce(search, 1000);
  const {
    data: homes,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/homes?property_type=${debouncedValue}`);

  //   let homes = [];
  //   let search = "";
  const handleSearch = (event) => {
    // search = event.target.value;
    setSearch(event.target.value);
  };

  //   console.log("search =====>", search);

  //   Lifecycle Hook
  React.useEffect(() => {
    console.log("useEffect triggered...");
    if (!mount) setMount(mount + 1);
    if (mount) setUpdate(update + 1);

    // fetch(`http://localhost:3000/homes?property_type=${debouncedValue}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setHomes(data);
    //   })
    //   .catch((error) => console.error(error));

    // Cleanup function (unmount)
    return () => {
      console.log("useEffect cleanup function triggered...");
      setUnmount(unmount + 1);
    };
    // }, [debouncedValue]);
  }, [search]);
  //   });

  console.log("homes ===>", homes, isLoading, error);

  // console.log("debouncedValue ===>", debouncedValue);
  // console.log("Lifecycle Hook ===>", mount, update, unmount);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col items-center h-1/2 w-1/2 bg-gray-100">
        <h2 className="text-2xl font-bold py-2">
          <Link to="/" className="cursor-pointer">
            Back
          </Link>
          Start typing to search for a home
          {isLoading && <Spinner />}
        </h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={search}
          onChange={handleSearch}
          disabled={isLoading}
        />
        <div>
          {/* {isLoading && <div>Loading...</div>} */}
          {error && <div>Error: {error.message}</div>}
          {homes &&
            homes.length > 0 &&
            homes.map((home) => <div key={home.id}>{home.title}</div>)}
        </div>
      </div>
    </div>
  );
};

export default RefresherPage;
