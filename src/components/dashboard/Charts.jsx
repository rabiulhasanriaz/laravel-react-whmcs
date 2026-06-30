export function AreaChart() {
  return (
    <svg className="dashboard-svg-chart" viewBox="0 0 720 300" role="img" aria-label="Sales report chart">
      <line x1="40" y1="260" x2="700" y2="260" stroke="#e9ecef" />
      {[0, 100, 200, 300, 400].map((v, i) => <text key={v} x="18" y={260 - i * 55} fill="#8a93a2" fontSize="12">{v}</text>)}
      {[2011,2012,2013,2014,2015,2016,2017].map((y, i) => <text key={y} x={55 + i * 105} y="285" fill="#8a93a2" fontSize="12">{y}</text>)}
      <path d="M40 260 C90 245 130 220 170 120 C220 30 245 250 300 235 C370 210 390 35 460 40 C515 45 530 260 700 245 L700 260 L40 260 Z" fill="rgba(27,130,236,.18)" />
      <path d="M40 260 C110 235 150 250 210 165 C270 75 300 240 345 250 C430 260 470 245 520 170 C575 70 610 180 700 245 L700 260 L40 260 Z" fill="rgba(241,180,76,.45)" />
      <path d="M40 260 C115 240 145 250 205 155 C265 55 310 245 360 260 C430 265 450 40 505 35 C560 30 565 170 700 245 L700 260 L40 260 Z" fill="rgba(27,130,236,.55)" />
    </svg>
  );
}

export function DonutChart() {
  return (
    <div className="donut-wrap">
      <svg width="260" height="260" viewBox="0 0 260 260" role="img" aria-label="Sales analytics donut chart">
        <circle cx="130" cy="130" r="88" fill="none" stroke="#eef1f5" strokeWidth="42" />
        <circle cx="130" cy="130" r="88" fill="none" stroke="#1b82ec" strokeWidth="42" strokeDasharray="360 553" strokeDashoffset="-20" />
        <circle cx="130" cy="130" r="88" fill="none" stroke="#f1b44c" strokeWidth="42" strokeDasharray="180 553" strokeDashoffset="-390" />
        <text x="130" y="122" textAnchor="middle" fontSize="20" fontWeight="700" fill="#8a93a2">Mail-Order Sales</text>
        <text x="130" y="152" textAnchor="middle" fontSize="28" fill="#8a93a2">20</text>
      </svg>
    </div>
  );
}
