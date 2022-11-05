import { ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect, useCallback, SetStateAction } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import DatePicker from '../components/DatePicker/DatePicker';
import {
  transactionTypeDefaultData,
  incomeCategoryDefaultData,
  expenseCategoryDefaultData,
   investmentCategoryDefaultData,
    transactionModeDefaultData
} from './data/transactionsData';

export default function Recorder() {
  const [formData, setFormdata] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionTypeValue, setTransactionTypeValue] = useState(null);
  const [transactionTypeOpen, setTransactionTypeOpen] = useState(false);
  const [transactionCategoryValue, setTransactionCategoryValue] = useState(null);
  const [transactionCategoryOpen, setTransactionCategoryOpen] = useState(false);
  const [showTransactioCategory, setShowTransactionCategory] = useState(false);

  const [transactionModeValue, setTransactionModeValue] = useState(null);
  const [transactionModeOpen, setTransactionModeOpen] = useState(false);
  const [showTransactionMode, setShowTransactionMode] = useState(false);
  
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const onChange = (event: any, selectedDate: Date) => {
    setShow(Platform.OS === 'ios');
    const currentDate = selectedDate || date;
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setDate(currentDate)
  }
  const showMode = (currentMode: SetStateAction<string>) => {
    setShow(true);
    setIsDateSelected(true);
  }

  const [transactionType, setTransactionType] = useState(
    transactionTypeDefaultData
  );

  const [transactionMode, setTransactionMode] = useState(
    transactionModeDefaultData
  );

  let categoryData = expenseCategoryDefaultData;
  const [transactionCategory, setTransactionCategory] = useState(categoryData);

  useEffect(() => {
    switch (transactionTypeValue) {
      case "Income":
        setTransactionCategory(incomeCategoryDefaultData);
        break;
      case "Expense":
        setTransactionCategory(expenseCategoryDefaultData);
        break;
      case "Investment":
        setTransactionCategory(investmentCategoryDefaultData);
        break;
    }
  }, [transactionTypeValue])

  const onTransactionTypeOpen = useCallback(() => {
    setTransactionCategoryOpen(false);
  }, []);

  const onTransactionCategoryOpen = useCallback(() => {
    setTransactionTypeOpen(false);
  }, []);

  const _onSubmitHandler = () => {
    setFormdata({
      title, description, amount, transactionType: transactionTypeValue, transactionCategory: transactionCategoryValue, date
    });
    console.log("lol data", { title, description, amount, transactionType: transactionTypeValue, transactionCategory: transactionCategoryValue, date })
    setTitle("");
    setDescription("");
    setAmount("")
    setTransactionTypeValue(null);
    setTransactionCategoryValue(null);
    setShow(false);
  }
  const props = {
    mode: 'outlined',
    outlineColor: "#BD85EF"
  }
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.title}>Recorder</Text>
        <TextInput style={styles.fields}
          label="Entry Title (Dine out, Salary etc..)"
          value={title}
          onChangeText={text => setTitle(text)}
          {...props}
        />
        <TextInput style={styles.fields}
          label="Entry Discription"
          value={description}
          onChangeText={text => setDescription(text)}
          {...props}
          multiline
        />
        <TextInput style={styles.fields}
          label="Amount"
          value={amount}
          onChangeText={amount => setAmount(amount)}
          {...props}
          multiline
          keyboardType="numeric"
        />
        {/* Transaction Type */}

        <DropDownPicker style={[styles.fields]}
          // style={styles.dropdown}
          open={transactionTypeOpen}
          value={transactionTypeValue} //genderValue
          items={transactionType}
          setOpen={setTransactionTypeOpen}
          setValue={(transactionTypeValue) => {
            setTransactionTypeValue(transactionTypeValue),
              setShowTransactionCategory(true);
          }}
          setItems={setTransactionType}
          placeholder="Select Transaction Type"
          placeholderStyle={styles.placeholderStyles}
          onOpen={onTransactionTypeOpen}
          zIndex={3000}
          onPress={() => {
            setShowTransactionCategory(false);
            setTransactionCategoryValue(null);
            setShowTransactionMode(false);
            setTransactionModeValue(null);
            console.log("pressed")
          }}
        />
        {/* Transaction category */}
        {
          showTransactioCategory && <DropDownPicker style={[styles.fields]}
            // style={styles.dropdown}
            open={transactionCategoryOpen}
            value={transactionCategoryValue} //genderValue
            items={transactionCategory}
            setOpen={setTransactionCategoryOpen}
            setValue={(transactionCategoryValue)=>{
              setTransactionCategoryValue(transactionCategoryValue);
              setShowTransactionMode(true);
            }}
            setItems={setTransactionCategory}
            placeholder="Transaction Category"
            placeholderStyle={styles.placeholderStyles}
            onOpen={onTransactionCategoryOpen}
            zIndex={3000}
            onPress={() => {
              setShowTransactionMode(false);
              setTransactionModeValue(null);
              console.log("pressed lol")
            }}
          />
        }
{
          showTransactionMode&& <DropDownPicker style={[styles.fields]}
            open={transactionModeOpen}
            value={transactionModeValue}
            items={transactionMode}
            setOpen={setTransactionModeOpen}
            setValue={setTransactionModeValue}
            setItems={setTransactionMode}
            placeholder="Transaction Category"
            placeholderStyle={styles.placeholderStyles}
            onOpen={onTransactionCategoryOpen}
            zIndex={3000}
          />
        }
        {/* <DatePicker showDate></DatePicker> */}

        <View style={styles.container}>
          <Button style={styles.button} icon="pen" mode="contained" onPress={() => showMode('date')}>
            Select Date of transaction   </Button>
          {show &&
            <DateTimePicker
              value={date}
              is24Hour
              display='default'
              onChange={onChange}
            >
            </DateTimePicker>
          }
          {isDateSelected && <Text> Transaction Date:- {date.toDateString()}</Text>}
        </View>
        <Button icon="plus" mode="contained" onPress={_onSubmitHandler}>
          Add Transaction
        </Button>
        <View
          style={{ height: 200 }}
        ></View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    padding: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fields: {
    width: '90%',
    margin: 10,
    color: 'red',
    backgroundColor: '#f4edf9',
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  placeholderStyles: {
    color: "grey",
  },
  datePicker: {
    width: "100%",
    color: "red",
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width:"100%"
  // },
  button: {
    width: "90%",
    margin: 10,
    padding: 5
  }
});
