import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { Container } from 'react-bootstrap';

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

function CompanyList() {
  console.debug("CompanyList");

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads companies. */
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
      <div className="CompanyList col-md-8 offset-md-2">
        <Container>
        <h2  className="text-center" style={{ padding: "2rem"}}>Find your dream company</h2>
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
            </Container>
      </div>
  );
}

export default CompanyList;
