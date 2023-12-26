import React from "react";

function Card({card}) {
  return (
    card.isBar?
    <>
     <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left-${card.color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}>
                  {card.name}
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      {card.price}%
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className={`progress-bar bg-${card.color}`}
                        role="progressbar"
                        style={{ width: `${card.price}%`,
                        ariaValueNow:`${card.price}`,
                        ariaValueMin:"0",
                        ariaValueMax:"100"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${card.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
     </> : <>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left-${card.color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}>
                {card.name}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                {card.price}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${card.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      

     

      
    </>
  );
}

export default Card;
