import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');
const logo = require('../imgs/logo-nav.png');

export default class Navbar extends Component {
  render() {
  	if(this.props.voltar){
  		return (
	    	<View style={[styles.barraTopo, {backgroundColor: this.props.corFundo}]}>
	    		<TouchableHighlight
	    			underlayColor={this.props.corFundo}
	    			activityOpacity={0.3}
	    			onPress={() => {
	    				this.props.navigator.pop();
						}}
						style={{position: 'absolute', paddingLeft: 15}}
	    		>
	    			<Image source={btnVoltar} />
	    		</TouchableHighlight>
					<View style={styles.imgTitulo}>
						<Image source={this.props.titulo}/>
					</View>
	     	</View>
	    );
  	}
    return (
    	<View style={styles.barraTopo}>
				<View style={styles.imgTitulo}>
     			<Image source={logo}/>
				</View>
     	</View>
    );
  }
}

const styles = StyleSheet.create({
	barraTopo: {
		backgroundColor: '#10374c',
		padding: 10,
		height: 80,
		flexDirection: 'row',
		alignItems: 'center'
	},
	imgTitulo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});