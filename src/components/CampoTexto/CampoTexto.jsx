import "./CampoTexto.css";

export const CampoTexto = (props) => {
  const alterar = (e) => {
    props.aoAlterar(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={alterar}
        required={props.obrigatorio}
      />
    </div>
  );
};