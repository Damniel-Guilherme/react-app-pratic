import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Button from "../Button";
import { useState } from "react";

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          value={nome}
          aoAlterar={(nome) => setNome(nome)}
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          value={cargo}
          aoAlterar={(cargo) => setCargo(cargo)}
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          value={imagem}
          aoAlterar={(imagem) => setImagem(imagem)}
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          label="Time"
          value={time}
          aoAlterar={(time) => setTime(time)}
          items={props.times}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
