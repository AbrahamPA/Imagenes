import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
class App extends Component {

  state = {
    termino :'',
    imagenes : [],
    pagina :''
   }

   scroll = () => {
     const elemento = document.querySelector('.jumbotron');
     elemento.scrollIntoView('smooth', 'start');
   }

   paginaAnterior = () => {
       //leer el state de la pagina
       let pagina = this.state.pagina;
       //si la pagina es 1 que no haga nada null
       if(pagina === 1) return null;
       //resta uno a la pagina actual
       pagina -= 1;
       //agregar el cambio al state
       this.setState({
         pagina
       }, () => {
         this.consultarApi();
         this.scroll();
       });
   }

    paginaSiguiente = () => {
       //leer el state de la pagina
       let pagina = this.state.pagina;

       //sumar uno a la pagina actual
       pagina += 1;
       //agregar el cambio al state
       this.setState({
         pagina
       }, () => {
         this.consultarApi();
         this.scroll();
       });
   }
   //consumiendo Api de Pixabay para imagenes
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13191278-af0db0f8b1703caf4caa7681b&q=${termino}&per_page=30&page=${pagina}`;


    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits}) )

  }

  datosBusqueda = (termino) =>{

    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    });
  }

 render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Coleccion de Imagenes</p>
          <Buscador
            datosBusqueda = {this.datosBusqueda}
          />   
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes = {this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div> 
      
    );
  }
}
export default App;
