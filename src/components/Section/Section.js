import propTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
