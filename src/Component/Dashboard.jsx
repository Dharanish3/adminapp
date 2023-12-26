import React from "react";
import Card from "./Card";

function Dashboard() {
    const data = [{
        name : "Earnings (Monthly)",
        price : "$40,000",
        color : "primary",
        icon : "fas fa-calendar",
        isBar : false
      },
      {
        name : "Earnings (Annual)",
        price : "$215,000",
        color : "success",
        icon : "fa-dollar-sign",
        isBar : false
      },
      {
        name : "Tasks",
        price : "60",
        color : "info",
        icon : "fa-clipboard-list",
        isBar : true
      },
      {
        name : " Pending Requests",
        price : "18",
        color : "warning",
        icon : "fa-comments",
        isBar : false
      },]
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>

            <div className="row">
            {
              data.map((e,i) => {
                return (<Card card={e}  key={i}/>)
              })
            }

           

            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
