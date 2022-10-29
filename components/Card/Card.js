import React from "react";
import { Text ,View, StyleSheet, TouchableOpacity } from 'react-native';
const color = require('../../assets/style.json');
console.log({color})
const Card = ({title='title', category, amount='20'}) => {
	return(
		<View style={Styles.container}>
            <View style={[Styles.view, {backgroundColor:color.transactionType[category]}]}>
                <Text> {title}</Text>
				<Text> {amount}</Text>
            </View>
        </View>
	)
}
export default Card;

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin:5,
        borderRadius:10
	},
	view:{
		flex:1,
		flexDirection:"row",
        justifyContent: "space-around",
        borderRadius:4,
		backgroundColor:'red',
		padding:10
	}
})
