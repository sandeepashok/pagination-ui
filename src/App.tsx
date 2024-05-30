import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import axios from "axios";
import Pagination from "./components/pagination/Pagination";
import CardShimmer from "./components/shimmer/card/CardShimmer";
import PaginationShimmer from "./components/shimmer/pagination/PaginationShimmer";
import NotfoundPage from "./components/notfound-page/NotFoundPage";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const baseURL = `https://give-me-users-forever.vercel.app/api/users/${page}/next`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setUserInfo(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, [page, baseURL]);

  if (error) return <NotfoundPage />;

  return (
    <div className="App">
      <div className="container">
        {userInfo.length > 0 ? (
          <>
            <Card userInfo={userInfo} />
            <Pagination page={page} setPage={setPage} />
          </>
        ) : (
          <>
            <CardShimmer />
            <PaginationShimmer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
