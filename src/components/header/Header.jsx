import { useState } from "react";
import { useNavigate } from "react-router-dom";

function asset(path) {
  return `/assets/${path}`;
}

export default function Header() {
  const [createOpen, setCreateOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    document.body.classList.toggle("sidebar-enable");
    if (window.innerWidth >= 992) document.body.classList.toggle("vertical-collpsed");
  };

  const handleLogout = () => {
  // Remove stored login information
  localStorage.removeItem("auth_user");
  localStorage.removeItem("auth_token");

  // Or clear everything
  // localStorage.clear();

  // Redirect to login page
  navigate("/");
};

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <a href="#" className="logo logo-dark">
              <span className="logo-sm"><img src={asset("images/logo-sm-dark.png")} alt="" height="22" /></span>
              <span className="logo-lg"><img src={asset("images/logo-dark.png")} alt="" height="24" /></span>
            </a>
            <a href="#" className="logo logo-light">
              <span className="logo-sm"><img src={asset("images/logo-sm-light.png")} alt="" height="22" /></span>
              <span className="logo-lg"><img src={asset("images/logo-light.png")} alt="" height="24" /></span>
            </a>
          </div>

          <button type="button" className="btn px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn" onClick={toggleSidebar}>
            <i className="mdi mdi-menu" />
          </button>

          <div className={`dropdown d-none d-lg-inline-block align-self-center ${createOpen ? "show" : ""}`}>
            <button className="btn btn-header waves-effect dropdown-toggle" type="button" onClick={() => setCreateOpen(!createOpen)}>
              Create New <i className="mdi mdi-chevron-down ms-2" />
            </button>
            <ul className={`dropdown-menu ${createOpen ? "show" : ""}`}>
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><div className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>

        <div className="d-flex">
          <div className={`dropdown d-inline-block d-lg-none ms-2 ${searchOpen ? "show" : ""}`}>
            <button type="button" className="btn header-item noti-icon waves-effect" onClick={() => setSearchOpen(!searchOpen)}>
              <i className="mdi mdi-magnify" />
            </button>
            <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 ${searchOpen ? "show" : ""}`}>
              <form className="p-3"><div className="input-group"><input type="text" className="form-control" placeholder="Search ..." /><button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button></div></form>
            </div>
          </div>

          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input type="text" className="form-control border-0" placeholder="Search..." />
              <span className="mdi mdi-magnify" />
            </div>
          </form>

          <div className={`dropdown d-inline-block ${notificationsOpen ? "show" : ""}`}>
            <button type="button" className="btn header-item noti-icon waves-effect" onClick={() => setNotificationsOpen(!notificationsOpen)}>
              <i className="mdi mdi-bell" />
              <span className="badge bg-info rounded-pill">3</span>
            </button>
            <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 ${notificationsOpen ? "show" : ""}`}>
              <h5 className="p-3 text-dark mb-0">Notifications (37)</h5>
              <div style={{ maxHeight: 230, overflowY: "auto" }}>
                {["Your order is placed", "New Message received", "Your item is shipped"].map((text, i) => (
                  <a href="#" className="text-reset notification-item" key={text}>
                    <div className="d-flex mt-3"><div className="avatar-xs me-3"><span className={`avatar-title bg-${["success", "warning", "info"][i]} rounded-circle font-size-16`}><i className={`mdi mdi-${["cart", "message", "flag"][i]}`} /></span></div><div className="flex-1"><h6 className="mb-1">{text}</h6><div className="font-size-12 text-muted"><p className="mb-1">If several languages coalesce the grammar</p></div></div></div>
                  </a>
                ))}
              </div>
              <div className="p-2 d-grid"><a className="font-size-14 text-center" href="#">View all</a></div>
            </div>
          </div>

          <div className={`dropdown d-inline-block ${userOpen ? "show" : ""}`}>
            <button type="button" className="btn header-item waves-effect" onClick={() => setUserOpen(!userOpen)}>
              <img className="rounded-circle header-profile-user" src={asset("images/users/avatar-4.jpg")} alt="Header Avatar" />
            </button>
            <div className={`dropdown-menu dropdown-menu-end ${userOpen ? "show" : ""}`}>
              {
              [
                ["account-circle", "Edit Account Details"], 
                ["wallet", "Payment Methods"], 
                ["wrench", "Contact/Sub-Accounts"],
                ["wrench", "Change Password"], 
                ["wrench", "Settings"],
                ["inbox", "Email History"],
              ].map(([icon, text]) => <a className="dropdown-item" href="#" key={text}>
                <i className={`mdi mdi-${icon} font-size-16 align-middle me-2 text-muted`} />
                <span>{text}</span>
              </a>)
              }
              <div className="dropdown-divider" />
              <a
                href="#"
                className="dropdown-item text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                <i className="mdi mdi-power font-size-16 align-middle me-2 text-primary" />
                <span>Logout</span>
              </a>
            </div>
          </div>

          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect" onClick={() => document.body.classList.toggle("right-bar-enabled")}>
              <i className="mdi mdi-cog bx-spin" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
