import Colaborador from "../Colaborador";
import "./Time.css";

export const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  return (
    (props.colaboradores.length > 0) && <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
      {props.colaboradores.map((colaborador , indice) => {
        return (
          <Colaborador
          corDeFundo={props.corPrimaria}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
          key={indice}
          aoDeletar={props.aoDeletar}
        />
        )
      })}
      </div>
    </section>
  );
};
