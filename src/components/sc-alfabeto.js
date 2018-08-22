import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

//Importar o componente BarraNavegacao
import Navbar from './navbar';

const letra = require('../imgs/libras.gif');
const titTopo = require('../imgs/tit-abc.png');

export default class TelaClientes extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<StatusBar hidden={true}/>
	    	<Navbar voltar navigator={this.props.navigator} titulo={titTopo} corFundo='#10374c'/>
	    	<View style={styles.menu}>
					<AppIntroSlider
						slides={slides}
						showPrevButton
						prevLabel='nterior'
						nextLabel='Póximo'
						hideDoneButton
					/>
	    	</View>
    	</View>
	);
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#CCC',
		flex: 1
	},
	cabecalho: {
		flexDirection: 'row',
		marginTop: 20,
		marginLeft: 10
	},
	txtTitulo: {
		fontSize: 30,
		color: '#B9C941',
		marginLeft: 10,
		marginTop: 25
	},
	menu: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	clientes: {
		marginTop: 20,
		padding: 20
	},
	detalheCliente: {
		fontSize: 18,
		marginLeft: 30
	},
	image: {
		width: 320,
		height: 320,
	},
	txtAlfabeto: {
		fontSize: 35,
		color: '#000'
	}
});

const slides = [
	{
	  key: 'a',
	  title: 'Aa',
	  titleStyle: styles.txtAlfabeto,
	  image: require('../imgs/libras.gif'),
	  backgroundColor: '#CCCCCC',
	},
	{
	  key: 'b',
	  title: 'Bb',
	  titleStyle: styles.txtAlfabeto,
	  image: require('../imgs/libras.gif'),
	  backgroundColor: '#fcfcfc',
	},
	{
	  key: 'c',
	  title: 'Cc',
	  titleStyle: styles.txtAlfabeto,
	  image: require('../imgs/libras.gif'),
	  backgroundColor: '#fcfcfc',
	}
];