import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/christmas">Christmas Tree</Link>
        </li>

        <li>
          <Link to="/color">Color Picker</Link>
        </li>

        <li>
          <Link to="/users/Shyam">Open Ram Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
