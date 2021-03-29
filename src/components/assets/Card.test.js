import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("should rednder title", () => {
  const wrapper = shallow(<Card />);
  const title = wrapper.find("p").text();

  expect(title).toBe("price: $");
});
describe("Testing of Image component", () => {
  it("render image component with default value", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("img").length).toEqual(1);
  });
  it("render image component with props ", () => {
    const props = {
      altName: "parfem",
    };
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("img").length).toEqual(1);
  });
});
