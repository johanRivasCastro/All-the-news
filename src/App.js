import React, { Component } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';


export default class Class extends Component {

state = {
  noticias: []
}

  componentDidMount (){
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') =>{

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=834205e442f64d8d85aa34e03ea887f6`;
    console.log(url);

     fetch(url)
       .then(respuesta =>{
         return respuesta.json();
       })
       .then(noticias =>{
         this.setState({
           noticias:noticias.articles
         })
       })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header
          titulo="Noticias"
        />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias = {this.consultarNoticias}
          />
          <Noticias
            noticias = {this.state.noticias}
          />
        </div>
      </div>
    );
  }
}


