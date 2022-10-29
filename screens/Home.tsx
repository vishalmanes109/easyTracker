import { ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card/Card';
import Summary from '../components/Card/Summary';
// import Pie from '../components/Chart/Pie';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const user="Vishal"
export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const recentTransactions=[
    {key:1, title:'expense dine',amount:'100',category:'expense'},
    {key:2, title:'income 1',amount:'100',category:'income'},
    {key:3, title:'transfer',amount:'100',category:'transfer'},
    {key:4, title:'investment',amount:'100',category:'investment'},
    {key:5, title:'other',amount:'100',category:'other'},
    {key:6, title:'expense 1',amount:'100',category:'expense'},
    {key:7, title:'income 2',amount:'100',category:'expense'}
  ];
  let output:any=[]
  recentTransactions.forEach(transaction => {
    output.push( <Card {...transaction}></Card>
    )
  });
  return (
    <ScrollView >
      <View style={Styles.container}>
      <Text style={Styles.text}> Welcome {user}</Text>
      </View>
      <Summary></Summary>
      
      <View style={Styles.recent}>
        <Text  style={Styles.text}>
          Recent Transactions
        </Text>
         <View style={Styles.card} >
          {output}
         </View>
      </View>
      {/* Charts */}
      <View>
        {/* <Pie></Pie> */}
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    margin:5,
    padding:10,
    flexDirection:'column',
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 18,
    flex:1,
    flexDirection:'column'
  },
  recent:{
    margin:15,
    padding:16,
    flexDirection:'column',
    borderRadius:15,
  },
  card:{
    flex:1,
    flexDirection:'column'
  }

});
