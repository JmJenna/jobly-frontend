import React from "react";
import { Link } from "react-router-dom";
import { HiOfficeBuilding } from "react-icons/hi";

import "./CompanyCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ name, description, handle }) {


  return (
      <Link style={{textDecoration:"none"}} className="CompanyCard card" to={`/companies/${handle}`}>
        <div className="card-body">
          <h3 style={{color:"#0072b1" }} className="card-title">
          <HiOfficeBuilding /> {name} 
          </h3>
          <p><small>{description}</small></p>
        </div>
      </Link>
  );
}

export default CompanyCard;
