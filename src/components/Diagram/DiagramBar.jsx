import "./DiagramBar.css";

const DiagramBar = ({ label, value, maxValue }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="diagram__bar">
      <div className="diagram__bar__inner">
        <div
          className="diagram__bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="diagram__bar__label">{label}</div>
    </div>
  );
};

export default DiagramBar;
