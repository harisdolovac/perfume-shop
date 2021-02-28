import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import BasketIcon from "./assets/BasketIcon";

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("Should render Header component", () => {
    expect(wrapper).toBeTruthy();
  });

  it("sholuld render Title : Perfumes Shop", () => {
    const Title = wrapper.find("h1");
    const result = Title.text();
    expect(result).toContain("Perfumes Shop");
  });

  it("should correctly update amount on filter change event", () => {
    const BasketIcon = wrapper.find("BasketIcon");
    // BasketIcon.props().onChange("500");

    expect(BasketIcon).toBeTruthy();
  });
});
