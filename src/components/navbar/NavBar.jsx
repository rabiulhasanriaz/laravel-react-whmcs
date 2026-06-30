import { useState } from "react";

const sections = [
  { icon: "home", label: "Dashboard", badge: "3" },
  { icon: "email", label: "Email", children: ["Inbox", "Read Email", "Email Compose"] },
  { icon: "buffer", label: "UI Elements", children: ["Alerts", "Buttons", "Badge", "Cards", "Carousel", "Dropdowns", "General", "Grid", "Images", "Modals", "Pagination", "Popover & Tooltips", "Progress Bars", "Tabs & Accordions", "Typography", "Video"] },
  { icon: "black-mesa", label: "Components", children: ["Lightbox", "Range Slider", "Session Timeout", "Sweet-Alert"] },
  { icon: "clipboard", label: "Forms", badge: "6", children: ["Form Elements", "Form Validation", "Form Advanced", "Form Editors", "Form File Upload", "Form Xeditable"] },
  { icon: "finance", label: "Charts", children: ["Chartist Chart", "Chartjs Chart", "Flot Chart", "C3 Charts", "Morris Charts", "Jquery Knob Chart"] },
  { icon: "table-settings", label: "Tables", children: ["Basic Tables", "Data Tables", "Responsive Table", "Editable Table"] },
  { icon: "album", label: "Icons", children: ["Material Design", "Ion Icons", "Font Awesome", "Themify Icons", "Dripicons", "Typicons Icons"] },
  { icon: "calendar-check", label: "Calendar" },
  { icon: "google-maps", label: "Maps", children: ["Google Maps", "Vector Maps"] },
];

const extras = [
  { icon: "page-layout-sidebar-left", label: "Layouts", badge: "New", children: ["Vertical", "Horizontal"] },
  { icon: "file-document-multiple", label: "Pages", children: ["Login", "Register", "Recover Password", "Lock Screen", "Timeline", "Invoice", "Directory", "Starter Page", "Pricing", "Error 404", "Error 500"] },
  { icon: "file-tree", label: "Multi Level", children: ["Level 1.1", "Level 1.2"] },
];

function MenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children?.length;
  return (
    <li className={open ? "mm-active" : ""}>
      <a href="#" className={`${hasChildren ? "has-arrow" : ""} waves-effect`} onClick={(e) => { if (hasChildren) { e.preventDefault(); setOpen(!open); } }}>
        <i className={`mdi mdi-${item.icon}`} />
        {item.badge && <span className={`badge ${item.badge === "New" ? "bg-warning" : item.badge === "6" ? "bg-success" : "bg-primary"} float-end`}>{item.badge}</span>}
        <span>{item.label}</span>
      </a>
      {hasChildren && (
        <ul className="sub-menu" style={{ display: open ? "block" : "none" }}>
          {item.children.map((child) => <li key={child}><a href="#">{child}</a></li>)}
        </ul>
      )}
    </li>
  );
}

export default function NavBar() {
  return (
    <div id="sidebar-menu">
      <ul className="metismenu list-unstyled" id="side-menu">
        <li className="menu-title">Main</li>
        {sections.map((item) => <MenuItem key={item.label} item={item} />)}
        <li className="menu-title text-uppercase">Extras</li>
        {extras.map((item) => <MenuItem key={item.label} item={item} />)}
      </ul>
    </div>
  );
}
