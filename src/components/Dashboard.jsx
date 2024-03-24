import React from "react";
import { useState } from "react";
//import car from "../images/Screenshot (38).png";

import ChartsOverviewDemo from "./BarCharts";
import LineCharts from "./LineCharts";

function Dashboard() {
  const [showBtns, setShowBtns] = useState(null);
  const [showFooter, setShowFooter] = useState("");
  const [activeBtn, setActiveBtn] = useState(0);
  const [showCharts, setShowCharts] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const items = [
    { name: "Research", img: "img1" },
    { name: "Planning", img: "img2" },
    { name: "Design", img: "img3" },
    { name: "Manufacturing", img: "img5" },
    { name: "Sales/Marketing", img: "img5" },
  ];

  const internalStages = ["Online", "Interview", "Public Data", "Health"];

  const handleClick = () => {
    setShowFooter("show-footer");
  };

  const handleClick2 = (index) => {
    setActiveBtn(index);
  };

  const handleB2CClick = (index) => {
    setActiveButtonIndex(index);
    setShowCharts(!showCharts);
  };

  return (
    <>
      <header>
        <center>
          <h1>Dashboard</h1>
        </center>
      </header>
      <div className="phases">
        {items.map((item, index) => {
          return (
            <>
              <div
                className="stages"
                key={index}
                onMouseEnter={() => setShowBtns(index)}
                onMouseLeave={() => setShowBtns(null)}
              >
                {/* <img src="" alt="phases-images" /> */}
                <h1>{item.name}</h1>
                <div className={`hide ${showBtns === index ? "show" : ""}`}>
                  <button className="externalBtn" onClick={handleClick}>
                    External
                  </button>
                  <button className="externalBtn" onClick={handleClick}>
                    Internal
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={`footer ${showFooter}`}>
        <div className="external">
          <button
            className={`btnl ${activeButtonIndex === 0 ? "btnl-active" : ""}`}
            onClick={() => handleB2CClick(0)}
          >
            B2C
          </button>
          <button
            className={`btnl ${activeButtonIndex === 1 ? "btnl-active" : ""}`}
            onClick={() => handleB2CClick(1)}
          >
            B2C
          </button>
        </div>
        {showCharts ? (
          <div className="charts">
            <div className="progress-indicator">
              {internalStages.map((stages, index) => {
                return (
                  <button
                    className={`items ${
                      index === activeBtn ? "active-btn" : ""
                    }`}
                    key={index}
                    onClick={() => handleClick2(index)}
                  >
                    {stages}
                  </button>
                );
              })}
            </div>
            {activeButtonIndex === 0 ? <ChartsOverviewDemo /> : <LineCharts />}
            {/* <ChartsOverviewDemo /> */}

            {/* <LineCharts /> */}

            {/* <div className="image">
            <img className="car" src={car} alt="" width={1050} height={300} />
          </div> */}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Dashboard;
