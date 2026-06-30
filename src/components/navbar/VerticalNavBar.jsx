import { useState } from "react";
import NavBar from "./NavBar";

function asset(path) { return `/assets/${path}`; }

export default function VerticalNavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="vertical-menu">
      <div className="h-100" style={{ overflowY: "auto" }}>
        <div className="user-details">
          <div className="d-flex">
            <div className="me-2"><img src={asset("images/users/avatar-4.jpg")} alt="" className="avatar-md rounded-circle" /></div>
            <div className="user-info w-100">
              <div className={`dropdown ${open ? "show" : ""}`}>
                <a href="#" className="dropdown-toggle" onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
                  Donald Johnson <i className="mdi mdi-chevron-down" />
                </a>
                <ul className={`dropdown-menu ${open ? "show" : ""}`}>
                  {[["account-circle", "Profile"], ["cog", "Settings"], ["lock-open-outline", "Lock screen"], ["power", "Logout"]].map(([icon, text]) => (
                    <li key={text}><a href="#" className="dropdown-item"><i className={`mdi mdi-${icon} text-muted me-2`} />{text}</a></li>
                  ))}
                </ul>
              </div>
              <p className="text-white-50 m-0">Administrator</p>
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    </div>
  );
}
