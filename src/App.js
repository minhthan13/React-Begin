import "./sass/App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test link <br />
        <button>
          <Link to="/users">Go to User page</Link>
        </button>
        <button>
          <Link to="/admins">Go to Admin page</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
