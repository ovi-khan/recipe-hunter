import React from "react";

const ChefStatus = () => {
  return (
    <div>
        <h1 className="text-center text-5xl font-bold mb-20">Economic Growth</h1>
        <div className="stats shadow w-full mb-20">
      <div className="stat place-items-center">
        <div className="stat-title">Downloads</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-secondary">4,200</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
    </div>
  );
};

export default ChefStatus;
