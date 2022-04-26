import React from "react";
import { Link } from "react-router-dom";

export const Card = () => (
  <div className="card">
    <img src="" alt="" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Name</h5>
      <Link to={"/profile/" + "boo"} className="btn btn-primary">
        Open
      </Link>
    </div>
  </div>
);