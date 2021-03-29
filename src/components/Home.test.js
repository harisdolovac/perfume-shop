import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("Should render correct props to Filter", () => {
    const Filter = wrapper.find("Filter");

    expect(Filter.prop("checkedCompanies")).toEqual([]);
  });

  it("Should render correct props to Filter", () => {
    const Filter = wrapper.find("Filter");

    expect(Filter.prop("niz")).toEqual([]);
  });
});
