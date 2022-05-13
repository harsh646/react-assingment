import React from "react";

export default function ListItem({ list, onDelete }) {
  return (
    <div className="fl">
      <div className="con4">
          <div className="pro"> 
              <div className="pro2">
                  <h5 className="pro4">{list.name[0]}</h5>
              </div>
              <div className="pro3">
        <h4>{list.name}</h4>
        <h6>{list.des}</h6>
        </div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger but"
          onClick={() => {
            onDelete(list);
          }}
        >
          delete
        </button>
      </div>
      <hr></hr>
    </div>
  );
}
