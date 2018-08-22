import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

//Importar o componente BarraNavegacao
import Navbar from './navbar';

const btnAlfabeto = require('../imgs/icon-abc.png');
const btnCategorias = require('../imgs/icon-categorias.png');
const titTopo = require('../imgs/tit-abc.png');

export default class ScreenCategorias extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<StatusBar hidden={true}/>
			<Navbar voltar navigator={this.props.navigator} titulo={titTopo} corFundo='#10374c'/>
	    	<View style={styles.menu}>
				<View style={styles.menuGrupo}>
					<View style={styles.menuItem}>
						<TouchableHighlight
							underlayColor={'#F2F5F7'}
							activityOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({id: 'animais'});
							}}
						>
							<Image
							source={btnAlfabeto} style={styles.imgMenu}/>
						</TouchableHighlight>
						<Text style={styles.txtItem}>ANIMAIS</Text>
					</View>
					<View style={styles.menuItem}>
						<TouchableHighlight
							underlayColor={'#F2F5F7'}
							activityOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({id: 'objetos'});
							}}
						>
							<Image
							source={btnCategorias} style={styles.imgMenu}/>
						</TouchableHighlight>
						<Text style={styles.txtItem}>OBJETOS</Text>
					</View>
				</View>
	    	</View>
			<View style={styles.footer}>
				<Text style={styles.txtFooter}>Todos os direitos reservados</Text>
			</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	logo: {
		marginTop: 30,
		marginBottom: 30,
		alignItems: 'center'
	},
	menu: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	menuGrupo: {
		flexDirection: 'row'
	},
	menuItem: {
		alignItems: 'center',
		margin: 10
	},
	txtItem: {
		fontSize: 18,
		color: '#000'
	},
	imgMenu: {
		width: 120,
		height: 120,
		margin: 15
	},
	footer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f2f5f7',
		height: 80
	},
	txtFooter: {
		fontSize: 16,
		color: '#000'
	}
});