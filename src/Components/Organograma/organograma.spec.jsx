import React from "react";
import { render, screen } from "@testing-library/react";

import Organograma from "./index";

jest.mock("./styles.css", () => jest.fn());
describe("Organograma", () => {
  it("should be render component title", async () => {
    render(<Organograma divisionsData={[]} title="Organograma" />);

    const title = await screen.findByTestId("title");

    expect(title.textContent).toEqual("Organograma");
  });

  // it("should be render component matriz", async () => {
  //   const data = [
  //     {
  //       name: "Vexpro IT",
  //       segmentationType: { key: "1", value: "Matriz" },
  //       branches: [],
  //     },
  //   ];
  //   render(<Organograma divisionsData={data} />);

  //   const title = await screen.findAllByTestId("matriz-item");

  //   // expect(title.textContent).toEqual("Organograma");
  // });

  it("should be render component branches", async () => {
    const data = [
      {
        name: "Vexpro IT",
        segmentationType: { key: "1", value: "Matriz" },
        branches: [
          {
            id: 1,
            name: "Vexpro IT",
            segmentationType: { key: "1", value: "CostCenter" },
            branches: [],
          },
          {
            id: 2,
            name: "Vexpro IT",
            segmentationType: { key: "1", value: "Department" },
            branches: [],
          },
        ],
      },
    ];
    render(<Organograma divisionsData={data} />);

    const branchesList = await screen.findAllByTestId("branches-level-one");

    expect(branchesList.length).toEqual(2);

    branchesList[0].branches?.forEach((item) => {
      const branchName = screen.getByText(item.name);
      expect(branchName.textContent).toEqual(item.name);
    });
  });
});
