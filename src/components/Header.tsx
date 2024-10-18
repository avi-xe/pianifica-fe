import Drawer from "./Drawer";
import ThemeToggler from "./ThemeToggler";
import { Link } from "react-router-dom";
import SettingsDropdown from "./SettingsDropdown";

const Header = () => {
  return (
    <header className="navbar bg-neutral text-neutral-content">
      <Drawer />
      <div className="flex-1">
        <Link to={`/`} className="btn btn-ghost text-xl">
          Pianifica
        </Link>
      </div>
      <div className="flex-none">
        <ThemeToggler />
        <SettingsDropdown />
      </div>
    </header>
  );
};

export default Header;
