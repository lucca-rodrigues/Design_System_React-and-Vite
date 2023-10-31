import Organograma from ".";

export default {
  title: "Organograma",
  component: Organograma,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Matrix = {
  args: {
    title: "Organograma da empresa",
    divisionsData: [
      {
        name: "Vexpro IT",
        segmentationType: { key: "1", value: "Matriz" },
        branches: [],
      },
    ],
  },
};

export const MatrixBranches = {
  args: {
    title: "Organograma da empresa",
    divisionsData: [
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
          {
            id: 3,
            name: "Vexpro IT",
            segmentationType: { key: "1", value: "BusinessUnit" },
            branches: [],
          },
        ],
      },
    ],
    handleClick: (value) => {
      alert(`selecionado: ${JSON.stringify(value)}`);
    },
  },
};
