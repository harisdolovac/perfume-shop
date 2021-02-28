import React from "react";
import "../css/Filter.css";
import FilterBar from "./FilterBar";

const Filter = ({ niz, setCheckedCompanies, checkedCompanies }) => {
  const handleFilter = (companyId) => {
    const index = checkedCompanies.indexOf(companyId);
    if (index === -1) {
      setCheckedCompanies([...checkedCompanies, companyId]);
    } else {
      setCheckedCompanies(
        checkedCompanies.filter(
          (checkedCompany) => checkedCompany !== companyId
        )
      );
    }
  };

  return (
    <div>
      <strong>Brand</strong>
      <div className="filer_search">
        {niz.map((item) => {
          const { company, companyId } = item;
          return (
            <FilterBar
              key={companyId}
              company={company}
              companyId={companyId}
              handleFilter={handleFilter}
              checkedCompanies={checkedCompanies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
