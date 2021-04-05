import React, { useState } from 'react';
import styled from 'styled-components';

const Aplicativo = styled.div`
  text-align:center;
`;
const Form = styled.div`
  background-color:#F9F9F9;
  padding:20px;
  margin-bottom:30px;
`;
const Titulo = styled.h1`
  margin:0;
  text-transform:uppercase;
`;
const Input = styled.input`
  margin:30px 10px;
  width:300px;
  padding:10px 15px;
  border:1 solid #CCC;
  background-color:#F9F9F9;
  border-radius:8px;
`;

function App(){

  const [conta, setConta]       = useState(0);
  const [gorjeta, setGorjeta]   = useState(10);

  let valorConta    = parseFloat(conta).toFixed(2);
  let valorGorjeta  = parseFloat((conta*gorjeta)/100).toFixed(2);
  let total         = (parseFloat(conta) + parseFloat(valorGorjeta)).toFixed(2);

  return (
    <Aplicativo>
      <Form>
        <Titulo>Calculadora de Gorjeta!</Titulo>
        <label>Valor da Conta?</label>
        <Input type="number" value={conta} onChange={(e)=>{setConta(e.target.value)}}></Input>
        <label>Porcentagem da Gorjeta?</label>
        <Input type="number" value={gorjeta} onChange={(e)=>{setGorjeta(e.target.value)}}></Input>
      </Form>
      {conta != 0 &&
        <>
          <p>
            Sub-Total: <b>R$ {valorConta}</b> - 
            Gorjeta ({gorjeta}%): <b>R$ {valorGorjeta}</b>
          </p>
          <p><b>Total: R$ {total}</b></p>
        </>
      }
    </Aplicativo>
  );
}

export default App;