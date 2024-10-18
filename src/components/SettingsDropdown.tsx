import { Link } from "react-router-dom";

const SettingsDropdown = () => {
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem && elem instanceof HTMLElement) {
      elem?.blur();
    }
  };
  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          onClick={handleClick}
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base-content"
        >
          <li>
            <Link to={`/profile`} className="justify-between">
              Profile
            </Link>
          </li>
          <li>
            <Link to={`/settings`}>Settings</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SettingsDropdown;
