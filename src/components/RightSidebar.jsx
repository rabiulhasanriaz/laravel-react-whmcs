function asset(path) { return `/assets/${path}`; }

function setTheme(value) {
  document.documentElement.setAttribute("data-theme-mode", value);
}

export default function RightSidebar() {
  return (
    <div className="right-bar">
      <div className="h-100" style={{ overflowY: "auto" }}>
        <div className="rightbar-title px-3 py-4">
          <a href="#" className="right-bar-toggle float-end" onClick={(e) => { e.preventDefault(); document.body.classList.remove("right-bar-enabled"); }}>
            <i className="mdi mdi-close noti-icon" />
          </a>
          <h5 className="m-0">Settings</h5>
        </div>
        <hr />
        <h6 className="text-center mb-0">Choose Layouts</h6>
        <div className="p-4">
          <div className="mb-2"><img src={asset("images/layouts/layout-1.png")} className="img-fluid img-thumbnail" alt="" /></div>
          <div className="form-check form-switch mb-3"><input type="checkbox" className="form-check-input theme-choice" id="light-mode-switch" defaultChecked /><label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label></div>
          <div className="mb-2"><img src={asset("images/layouts/layout-2.png")} className="img-fluid img-thumbnail" alt="" /></div>
          <div className="form-check form-switch mb-3"><input type="checkbox" className="form-check-input theme-choice" id="dark-mode-switch" /><label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label></div>
          <div className="mb-2"><img src={asset("images/layouts/layout-3.png")} className="img-fluid img-thumbnail" alt="" /></div>
          <div className="form-check form-switch mb-5"><input type="checkbox" className="form-check-input theme-choice" id="rtl-mode-switch" /><label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label></div>
          <h6 className="mb-2">Select Custom Colors</h6>
          {[["default", "Default"], ["red", "Red"], ["green", "Green"]].map(([value, label]) => (
            <div className="form-check form-check-inline" key={value}>
              <input className="form-check-input theme-color" type="radio" name="theme-mode" id={`theme-${value}`} value={value} onChange={() => setTheme(value)} defaultChecked={value === "default"} />
              <label className="form-check-label" htmlFor={`theme-${value}`}>{label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
