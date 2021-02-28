import React from "react";

const FilterBar = ({ companyId, company, handleFilter, checkedCompanies }) => {
  return (
    <div>
      {company}
      <input
        type="checkbox"
        onChange={() => handleFilter( companyId)}
        checked={checkedCompanies.includes(companyId)}
      />
    </div>
  );
};

export default FilterBar;
