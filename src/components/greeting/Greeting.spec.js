import React from "react";
import { shallow, mount, render } from "enzyme";

import Greeting from "./Greeting";

describe("<Greeting />", () => {
  const name = "Adam";

  it("should be selectable by class", () => {
    const isCorrectCssClass = shallow(<Greeting name={name} />).is(".greeting");

    expect(isCorrectCssClass).toBe(true);
  });

  it("should mount in a full DOM", () => {
    const numElementsFound = mount(<Greeting name={name} />).find(".greeting")
      .length;

    expect(numElementsFound).toBe(1);
  });

  it("should render a greeting to static HTML", () => {
    const renderedText = render(<Greeting name={name} />).text();

    expect(renderedText).toBe("Hello Adam!");
  });
});
