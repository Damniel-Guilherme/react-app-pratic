import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.aoAlterar(event.target.value)}
        value={props.value}
      >
        <option value=""></option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
