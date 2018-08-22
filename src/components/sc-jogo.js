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
const titTopo = require('../imgs/tit-abc.png');

export default class ScreenCategorias extends Component {
    constructor(props) {
        super(props);
        this.state = {img: require('../imgs/icon-categorias.png'), op1: '', op2: '', op3: '', op4: '', palavra: ''};
    }

    componentWillMount() {
        this.gerarPalavra();
    }

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
								this.verificarResposta(this.state.op2);
							}}
						>
							<Image source={this.state.img} style={styles.imgMenu} testID='a'/>
						</TouchableHighlight>
					</View>
					<View style={styles.menuItem}>
						<TouchableHighlight
							underlayColor={'#F2F5F7'}
							activityOpacity={0.3}
							onPress={() => {
								this.verificarResposta(this.state.op1);
							}}
						>
							<Image source={btnCategorias} style={styles.imgMenu}/>
						</TouchableHighlight>
					</View>
				</View>
	    	</View>
			<View style={styles.footer}>
				<Text style={styles.txtFooter}>Todos os direitos reservados</Text>
			</View>
    	</View>
    );
  }

  gerarPalavra() {
    let op = 'icon-jogar';
    this.setState({
      img: require('../imgs/icon-jogar.png'),
      op1: palavras[0],
      op2: palavras[2],
      op3: palavras[3],
      op4: palavras[4],
      palavra: palavras[2]
    });
  }

  verificarResposta(op) {
    if(op==this.state.palavra) {
        alert('Acertou!');
    }
  }
}

const palavras = ['banana','maçã','morango','uva'];

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