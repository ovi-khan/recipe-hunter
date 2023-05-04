import React from "react";

const ChefStatus = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mb-20">
        Our Current Client
      </h1>
      <div className="lg:flex  gap-5 shadow mb-20 p-5">
        <div className="stat place-items-center bg-blue-400 rounded-lg mt-2">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-orange-400 rounded-lg mt-2">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center bg-cyan-300 rounded-lg mt-2">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default ChefStatus;
