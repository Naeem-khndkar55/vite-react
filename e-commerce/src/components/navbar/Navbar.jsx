import { NavMenuUtem } from "./NavMenuItem";
import "./Navbar.css";
export function Navber() {
  const navitems = ["Product", "Contact", "Category", "blog"];
  const isAuthenticated = false;
  return (
    <div className="navbar">
      <div className="nav-logo">Naeem</div>
      <div className="nav-menu">
        <ul>
          {navitems.map((navitem) => {
            return <NavMenuUtem key={navitem} title={navitem} />;
          })}
          {isAuthenticated ? <button>Logout</button> : <button>Login</button>}
        </ul>
      </div>
    </div>
  );
}
