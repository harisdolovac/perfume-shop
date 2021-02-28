import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("should rednder title", () => {
  const wrapper = shallow(<Card />);
  const title = wrapper.find("p").text();

  expect(title).toBe("price: $");
});
