const titulo = "Hola";

export const TodoApp = (props) => {
  return (
    <>
      <h1>
        {titulo} {props.title}
      </h1>
      <p>esto es un parrafo</p>
    </>
  );
};