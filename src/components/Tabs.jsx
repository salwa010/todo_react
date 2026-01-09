export default function Tabs({ active, setActive }) {
  return (
    <div className="tabs">
      {["All", "Completed", "Pending"].map(tab => (
        <button
          key={tab}
         className={`tab-btn ${active === tab ? "active" : ""}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
