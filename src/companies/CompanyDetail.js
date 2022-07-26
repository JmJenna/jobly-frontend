import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import { Container } from 'react-bootstrap';

/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();
  console.debug("CompanyDetail", "handle=", handle);

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
      <div className="CompanyDetail col-md-8 offset-md-2">
        <Container>
        <h3 style={{ color:"#0072b1", padding:"1.5rem"}} className="text-center">{company.name}</h3>
        <h6 style={{paddingBottom:"2rem"}} className="text-center">{company.description}</h6>
        <JobCardList jobs={company.jobs} />
        </Container>
      </div>
  );
}

export default CompanyDetail;
