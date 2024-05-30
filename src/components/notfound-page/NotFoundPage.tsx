import "./notfound-page.css";
import { ReactComponent as NotFound } from "../../assets/notfound.svg";

const NotfoundPage = () => {
  return (
    <div className="notFound-container">
      <NotFound className="notFound-image" />
      <h1 className="message">Page not found</h1>
    </div>
  );
};

export default NotfoundPage;
