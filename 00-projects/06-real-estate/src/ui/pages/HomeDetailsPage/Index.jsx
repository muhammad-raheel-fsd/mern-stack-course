import { useParams } from "react-router";
import useFetch from "../../../hooks/useFetch";

const HomeDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/homes/${id}`
  );
  console.log("ID ==========>", data, isLoading, error);
  return <div>HomeDetailsPage</div>;
};

export default HomeDetailsPage;
