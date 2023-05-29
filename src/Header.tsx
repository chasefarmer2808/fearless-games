import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Pixel Pusher</h1>
      <nav>
        <ul>
          <li>
            <Link to={"snake"}>Snake</Link>
          </li>
          <li>
            <Link to={"2048"}>2048</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
