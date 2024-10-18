import { Link } from "react-router-dom";
import { DRAWER_ID } from "../Const";

const Drawer = () => {
  return (
    <>
      <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor={DRAWER_ID} className="btn btn-ghost drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={DRAWER_ID}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className="menu bg-base-200 text-base-content min-h-full w-80"
          onClick={() => document.getElementById(DRAWER_ID)?.click()}
        >
          <li>
            <Link to={`/sbp`}>SBP</Link>
          </li>
          <li>
            <Link to={`/abc`}>ABC</Link>
          </li>
          <li>
            <Link to={`/ase`}>ASE</Link>
          </li>
          <li>
            <Link to={`/info`}>Info</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;
