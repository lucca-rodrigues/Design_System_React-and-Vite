import PropTypes from "prop-types";

export default function Organograma({ title, ...rest }) {
  return (
    <div className="organograma">
      <h1>{title}</h1>
    </div>
  );
}

Organograma.propTypes = {
  title: PropTypes.string.isRequired,
};
Organograma.defaultProps = {
  title: "Organograma da empresa",
};
