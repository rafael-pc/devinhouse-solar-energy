import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Header from "../../components/Header";

// import Container from "../../components/Container";

import { Container, ContainerContent } from "./styles";
import axios from "axios";

function RegisterMonthly() {
  //   vv(()=>{
  //     async function getData() {
  //       await axios.get("http://localhost:4000/unidades/").then((resp)=>{
  //         const dataFiltered = resp.data.filter(
  //           (unidade) => unidade.ativo === true
  //         )
  //       })
  //     }
  //     getData()
  // },[])

  // async function handlePostData(){
  //   axios.post("http://localhost:4000/geracoes/")
  // {
  //   unidade_id: id,
  //   energia_gerada: energy,
  //   mes: month,
  // })

  // }

  // Validação
  // function handleSubmit(e){
  //   e.preventDefault()
  //   handlePostData()
  // }

  const url = "http://localhost:4000/geracoes"
  const [data, setData] = useState({
    unidade: "",
    date:"",
    energy:"",
  })

  function handleSubmit(e){
    e.preventDefault()
    axios.post(url, {
      unidade: data.unidade,
      date: data.date,
      energy: data.energy
    })
    .then(resp => (resp.data))
  }

  function handle(e){
      const newData= {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
  }

  return (
    <Container>
      <Menu />
      <ContainerContent>
        <Header title="Lançamento de geração mensal"></Header>

        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label>
            Unidade Geradora
            <select
              defaultValue=""
              // onChange={(e) => {
              //   setId(e.target.value)
              // }}
            >
              <option value="" disabled>
                Selecione
              </option>
              {/* {data.map((unidade)=>{
              return <option value={unidade.id}>{unidade.apelido}</option>
            })} */}
            </select>
          </label>
          <label>
            mes/ano
            <input
              type="date"
              onChange={(e)=> handle(e)}
              id="date"
            ></input>
          </label>
          <label>
            total kw gerado
            <input
              type="text"
              onChange={(e)=> handle(e)}
              id="energy"
            ></input>
          </label>
          <input type="submit" value="Cadastar"></input>
        </form>
      </ContainerContent>
    </Container>
  );
}

export default RegisterMonthly;
