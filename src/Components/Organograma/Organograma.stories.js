import Organograma from ".";

export default {
  title: "Organograma",
  component: Organograma,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// export const Default = () => <Organograma />;
export const Matrix = {
  args: {
    title: "Organograma da empresa",
  },
};
