import {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, View, } from '../Themed';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker() {
    const [date, SetDate] = useState(new Date());
    const [ mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isDateSelected, setIsDateSelected]=useState(false);
    const onChange =(event, selectedDate)=>{
const currentDate = selectedDate || date;
let tempDate= new Date(currentDate);
let fDate = tempDate.getDate()+'/'+ (tempDate.getMonth()+1) +'/'+ tempDate.getFullYear();
setText(fDate);

setShow(Platform.OS === 'ios');
SetDate(currentDate)
console.log("date datenjds",date)
    }
    const showMode=(currentMode) =>{
      setShow(true);
      setMode(currentMode);
      setIsDateSelected(true);
    }
    return (
      <View style={styles.container}>
        <Button style={styles.button} icon="pen" mode="contained" onPress={() => showMode('date')}>
        Select Date of transaction   </Button>
        {show &&
        <DateTimePicker 
        value={date}
        mode={mode}
        is24Hour
        display='default'
        onChange={onChange}
        >
        </DateTimePicker> 
        }
        {isDateSelected && <Text> Transaction Date:- {date.toDateString()}</Text>}
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%"
    },
    button:{
      width:"90%",
      margin:10,
      padding:5
    }
  });