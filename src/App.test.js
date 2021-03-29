import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop/Shop";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Should render component", () => {
    expect(wrapper).toBeTruthy();
  });
  it("Should render correct props to Header", () => {
    const Header = wrapper.find("Header");

    expect(Header.prop("total")).toBe(0);
  });

  it("Should render correct props to Home", () => {
    const Home = wrapper.find("Home");

    expect(Home.prop("addedItems")).toEqual([]);
  });
  it("Should render correct props to Shop", () => {
    const Shop = wrapper.find("Shop");

    expect(Shop.prop("addedItems")).toEqual([]);
  });
});
