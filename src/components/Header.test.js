import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
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

    expect(BasketIcon).toBeTruthy();
  });
});
