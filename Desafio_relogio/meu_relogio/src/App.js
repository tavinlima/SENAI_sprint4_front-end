import React from 'react';
import './App.css';

function DataFormatada(props){
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
};

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    };
  }

    thick(){
      this.setState({
        date: new Date()
      });
    }

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);

    console.log("Eu sou o relógio " + this.timerID);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  pararRelogio(){
    clearInterval(this.timerID);

    console.log('O relógio ' + this.timerID + ' está parado');
  }

  retomarRelogio(){
    this.timerID = setInterval(() => this.thick(), 1000);

    console.log(`Relógio retomado`);
    console.log('Agora sou o relógio ' + this.timerID);
  }

  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button type='button' className='btn_parar' onClick={() => this.pararRelogio()}>Parar relógio</button>
        <button type='button' className='btn_voltar' onClick={() => this.retomarRelogio()}>Retomar relógio</button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;