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
const btnJogo = require('../imgs/icon-jogar.png');
const btnConfig = require('../imgs/icon-config.png');

export default class ScreenHome extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<StatusBar hidden={true}/>
			<Navbar/>
	    	<View style={styles.menu}>
				<View style={styles.menuGrupo}>
					<TouchableHighlight
						underlayColor={'#FFFFFF'}
						activityOpacity={0.9}
						onPress={() => {
							this.props.navigator.push({id: 'alfabeto'});
						}}
					>
						<View style={styles.menuItem}>
							<View style={styles.cardTexto}>
								<Text style={styles.txtItem}>ALFABETO</Text>
							</View>
							<View style={styles.cardImg}>
								<Image source={btnAlfabeto} style={styles.imgMenu}/>
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={'#FFFFFF'}
						activityOpacity={0}
						onPress={() => {
							this.props.navigator.push({id: 'categorias'});
						}}
					>
						<View style={styles.menuItem}>
							<View style={styles.cardTexto}>
								<Text style={styles.txtItem}>SINAIS</Text>
							</View>
							<View style={styles.cardImg}>
								<Image source={btnCategorias} style={styles.imgMenu}/>
							</View>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.menuGrupo}>
					<TouchableHighlight
						underlayColor={'#FFFFFF'}
						activityOpacity={0}
						onPress={() => {
							this.props.navigator.push({id: 'jogo'});
						}}
					>
						<View style={styles.menuItem}>
							<View style={styles.cardTexto}>
								<Text style={styles.txtItem}>JOGO</Text>
							</View>
							<View style={styles.cardImg}>
								<Image source={btnJogo} style={styles.imgMenu}/>
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={'#FFFFFF'}
						activityOpacity={0}
						onPress={() => {
							this.props.navigator.push({id: 'config'});
						}}
					>
						<View style={styles.menuItem}>
							<View style={styles.cardTexto}>
								<Text style={styles.txtItem}>CONFIGURAR</Text>
							</View>
							<View style={styles.cardImg}>
								<Image source={btnConfig} style={styles.imgMenu}/>
							</View>
						</View>
					</TouchableHighlight>
				</View>
	    	</View>
			<View style={styles.footer}>
				<Text style={styles.txtFooter}>© 2018 Ideal - Todos os direitos reservados</Text>
			</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#C1C7CC'
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
	cardImg: {
		height: 100,
		width: 140,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#FFFFFF',
    	borderBottomLeftRadius: 10,
    	borderBottomRightRadius: 10
	},
	cardTexto: {
		height: 40,
		width: 140,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#fff',
    	borderTopLeftRadius: 10,
    	borderTopRightRadius: 10
	},
	txtItem: {
		fontSize: 16,
		color: '#000'
	},
	imgMenu: {
		width: 80,
		height: 80
	},
	footer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eaedef',
		height: 80
	},
	txtFooter: {
		fontSize: 16,
		color: '#000'
	}
});