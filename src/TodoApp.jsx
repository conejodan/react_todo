import PropTypes from "prop-types";

const titulo = "Hola";

export const TodoApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>
        {titulo} {title}
      </h1>
      <p>{subTitle}</p>
    </>
  );
};

TodoApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

TodoApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "Subtitulo",
  name: "Daniel Cornelio",
};
