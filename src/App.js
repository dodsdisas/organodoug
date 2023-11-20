
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';
import { useState } from 'react'
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: 'Primeira Categoria',
      corprimaria: '#D9f7E9',
      corsecundaria: '#57C278'
    },
    {
      nome: 'Segunda Categoria',
      corprimaria: '#E8F8FF',
      corsecundaria: '#82CFFA'
    },
    {
      nome: 'Terceira Categoria',
      corprimaria: '#F0F8E2',
      corsecundaria: '#A6D157'
    },
    {
      nome: 'Quarta Categoria',
      corprimaria: '#FDE7E8',
      corsecundaria: '#E06B69'
    },
    {
      nome: 'Quinta Categoria',
      corprimaria: '#FAE9F5',
      corsecundaria: '#DB6EBF'
    },
  ] 

  const [colaboradores, SetColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {

    SetColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time =>time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corprimaria} 
        corSecundaria={time.corsecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.categoria === time.nome)}/>)}

  
     
    </div>
  );
}

export default App;
