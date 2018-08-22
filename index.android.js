import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

//Importando os Componentes
import ScreenHome from './src/components/sc-home';
import ScreenAlfabeto from './src/components/sc-alfabeto';
import ScreenCategorias from './src/components/sc-categorias';
import ScreenJogo from './src/components/sc-jogo';
import ScreenConfig from './src/components/sc-config';
import ScreenAnimais from './src/components/categorias/sc-animais';

export default class idealibras extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{id: 'home'}}
        renderScene={(route, navigator) => {
          switch(route.id){
            case 'home':
              return(<ScreenHome navigator={navigator}/>);
            case 'alfabeto':
              return(<ScreenAlfabeto navigator={navigator}/>);
            case 'categorias':
              return(<ScreenCategorias navigator={navigator}/>);
            case 'jogo':
              return(<ScreenJogo navigator={navigator}/>);
            case 'config':
              return(<ScreenConfig navigator={navigator}/>);
            case 'animais':
              return(<ScreenAnimais navigator={navigator}/>);
            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('idealibras', () => idealibras);