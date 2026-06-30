import { AreaChart, DonutChart } from "./dashboard/Charts";

function asset(path) { return `/assets/${path}`; }

function StatCard({ title, value, badge, badgeClass, icon, label }) {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="card bg-primary mini-stat position-relative">
        <div className="card-body">
          <div className="mini-stat-desc">
            <h5 className="text-uppercase verti-label font-size-16 text-white-50">{label}</h5>
            <div className="text-white">
              <h5 className="text-uppercase font-size-16 text-white-50">{title}</h5>
              <h3 className="mb-3 text-white">{value}</h3>
              <span className={`badge bg-light ${badgeClass}`}>{badge}</span><span className="ms-2">From previous period</span>
            </div>
            <div className="mini-stat-icon"><i className={`mdi mdi-${icon} display-2`} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Inbox() {
  const users = [["avatar-1.jpg", "Irene", "13:40 PM"], ["avatar-2.jpg", "Jennifer", "13:34 PM"], ["avatar-3.jpg", "Richard", "13:17 PM"], ["avatar-4.jpg", "Martin", "12:20 PM"], ["avatar-5.jpg", "Sean", "11:47 AM"]];
  return <div className="card"><div className="card-body"><h4 className="card-title mb-3">Inbox</h4><div style={{ maxHeight: 334, overflowY: "auto" }}><div className="inbox-wid">{users.map(([img,name,time]) => <a href="#" className="text-dark" key={name}><div className="inbox-item"><div className="inbox-item-img float-start me-3"><img src={asset(`images/users/${img}`)} className="avatar-md rounded-circle" alt="" /></div><h6 className="inbox-item-author mb-1 text-dark">{name}</h6><p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p><p className="inbox-item-date text-muted">{time}</p></div></a>)}</div></div></div></div>;
}

function RecentActivity() {
  return <div className="card"><div className="card-body"><h4 className="card-title mb-5 text-dark">Recent Activity Feed</h4><ul className="nav nav-pills nav-justified recent-activity-tab mb-4">{["21 Sep", "22 Sep", "23 Sep", "24 Sep"].map((d,i)=><li className="nav-item" key={d}><a className={`nav-link ${i===0?"active":""}`} href="#">{d}</a></li>)}</ul><div className="p-3 text-muted"><p>21 Sep, 2018</p><h5 className="text-dark font-size-16">Responded to need “Volunteer Activities”</h5><p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p><a href="#" className="text-primary">Read More...</a></div></div></div>;
}

function Products() {
  const rows = [["Computers", "The languages only differ", "70%"], ["Laptops", "Maecenas tempus tellus", "84%"], ["Ipad", "Donec pede justo", "62%"], ["Mobile", "Aenean leo ligula", "89%"]];
  return <div className="card"><div className="card-body"><h4 className="card-title mb-4">Top product sales</h4><div className="table-responsive"><table className="table table-hover align-middle mb-0"><tbody>{rows.map(([name, desc, val])=><tr key={name}><td><h5 className="font-size-16">{name}</h5><p className="text-muted mb-0">{desc}</p></td><td><div className="progress" style={{ width: 54, height: 8 }}><div className="progress-bar" style={{ width: val }} /></div></td><td><h5 className="font-size-16">{val}</h5><p className="text-muted mb-0">Sales</p></td></tr>)}</tbody></table></div></div></div>;
}

function DataTable({ title }) {
  const people = ["Jeanette James", "Christopher Taylor", "Edward Vazquez", "Michael Flannery", "Jamie Fishbourne"];
  return <div className="card"><div className="card-body"><h4 className="card-title mb-4">{title}</h4><div className="table-responsive"><table className="table table-hover align-middle mb-0"><thead><tr><th>(#) Id</th><th>Name</th><th>Date</th><th>Amount</th><th colSpan="2">Status</th></tr></thead><tbody>{people.map((p,i)=><tr key={p}><th>#{15236+i}</th><td><img src={asset(`images/users/avatar-${i+2}.jpg`)} alt="" className="avatar-md rounded-circle me-2" />{p}</td><td>{14+i}/8/2018</td><td>${104+i*4}</td><td><span className={`badge bg-${i===1?"warning":i===3?"primary":"success"}`}>{i===1?"Pending":i===3?"Cancel":"Delivered"}</span></td><td><a href="#" className="btn btn-primary btn-sm">Edit</a></td></tr>)}</tbody></table></div></div></div>;
}

export default function MainContent() {
  return (
    <div className="main-content">
      <div className="page-content"><div className="container-fluid">
        <div className="row"><div className="col-12"><div className="page-title-box d-flex align-items-center justify-content-between"><div className="page-title"><h4 className="mb-0 font-size-18">Dashboard</h4><ol className="breadcrumb"><li className="breadcrumb-item active">Welcome to Agroxa Dashboard</li></ol></div><div className="state-information d-none d-sm-block"><div className="state-graph"><div className="info">Balance $ 2,317</div></div><div className="state-graph"><div className="info">Item Sold 1230</div></div></div></div></div></div>
        <div className="page-content-wrapper">
          <div className="row">
            <StatCard title="Orders" value="1,587" badge="+11%" badgeClass="text-info" icon="cube-outline" label="Orders" />
            <StatCard title="Revenue" value="$46,785" badge="-29%" badgeClass="text-danger" icon="buffer" label="Revenue" />
            <StatCard title="Average Price" value="15.9" badge="0%" badgeClass="text-primary" icon="tag-text-outline" label="Av. Price" />
            <StatCard title="Product Sold" value="1890" badge="+89%" badgeClass="text-info" icon="briefcase-check" label="Pr. Sold" />
          </div>
          <div className="row"><div className="col-xl-9"><div className="card"><div className="card-body"><div className="row"><div className="col-xl-8 border-end"><h4 className="card-title mb-4">Sales Report</h4><AreaChart /></div><div className="col-xl-4"><h4 className="card-title mb-4">Yearly Sales Report</h4><div className="p-3"><ul className="nav nav-pills nav-justified mb-3"><li className="nav-item"><a className="nav-link active" href="#">2015</a></li><li className="nav-item"><a className="nav-link" href="#">2016</a></li><li className="nav-item"><a className="nav-link" href="#">2017</a></li></ul><div className="p-3"><h2>$17562</h2><p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus Nullam quis ante.</p><a href="#" className="text-primary">Read more...</a></div></div></div></div></div></div></div><div className="col-xl-3"><div className="card"><div className="card-body"><h4 className="card-title mb-4">Sales Analytics</h4><DonutChart /></div></div></div></div>
          <div className="row"><div className="col-xl-4"><Inbox /></div><div className="col-xl-4"><RecentActivity /></div><div className="col-xl-4"><Products /></div></div>
          <div className="row"><div className="col-xl-6"><DataTable title="Latest Transaction" /></div><div className="col-xl-6"><DataTable title="Latest Order" /></div></div>
        </div>
      </div></div>
      <footer className="footer"><div className="container-fluid"><div className="row"><div className="col-sm-12 text-center">{new Date().getFullYear()} © Agroxa <span className="d-none d-sm-inline-block">- Crafted with <i className="mdi mdi-heart text-primary" /> by Themesbrand.</span></div></div></div></footer>
    </div>
  );
}
