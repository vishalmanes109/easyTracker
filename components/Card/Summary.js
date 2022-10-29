import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import "intl";
import "intl/locale-data/jsonp/en";

const data = require('../../assets/messages.json');
const month = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(new Date());
const income='500'+ data.currency.IN;
const title = data.summary.header + ' of month ' +month
const Summary = () => { 
  return (
  <Card raised style={Styles.container}>
    <Card.Title style={Styles.text} title={title}/>
    <Card.Content >
      <View style={[[Styles.textContainer,{backgroundColor: "#01796f",}]]}>
      <Text style={Styles.text}>{data.summary.type.income}</Text>
       <Text style={Styles.text}>{income}</Text>
      </View>
      <View style={[Styles.textContainer,{backgroundColor: "#F4364C",}]}>
      <Text style={Styles.text}>{data.summary.type.expense}</Text>
       <Text style={Styles.text}>{income}</Text>
      </View>
      <View style={[Styles.textContainer,{backgroundColor: "#008E97",}]}>
      <Text style={Styles.text}>{data.summary.type.investment}</Text>
       <Text style={Styles.text}>{income}</Text>
      </View>
      <View style={[Styles.textContainer,{backgroundColor: "purple",}]}>
      <Text style={Styles.text}>{data.summary.type.transfer}</Text>
       <Text style={Styles.text}>{income}</Text>
      </View>
      <View style={[Styles.textContainer,{backgroundColor: "grey",}]}>
      <Text style={Styles.text}>{data.summary.type.other}</Text>
       <Text style={Styles.text}>{income}</Text>
      </View>
    </Card.Content>
  </Card>
)};

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin:20,
        borderRadius:10
	},
    textContainer: {
        flex: 1,
        justifyContent: "space-around",
        margin:5,
        padding:10,
        flexDirection:'row',
        borderRadius:15,
    },
    text:{
    padding: 5,
    color:"#ffffff",
    fontSize:15,
    fontWeight:'900'
    }
})
export default Summary;