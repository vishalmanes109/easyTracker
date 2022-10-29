import { ScrollView, StyleSheet } from 'react-native';
import { useState, useCallback } from 'react';
import DropDownPicker from "react-native-dropdown-picker";

import { TextInput } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import DatePicker from '../components/DatePicker/DatePicker';

export default function Recorder() {
  const [formData, setFormdata] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);

  const onGenderOpen = useCallback(() => {
    // setCompanyOpen(false);
  }, []);

  const props = {
    mode: 'outlined',
    outlineColor: "#BD85EF"
  }
  return (
    <View style={{ height: '100%' }}>

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
          <DropDownPicker style={[styles.fields]}
            // style={styles.dropdown}
            open={genderOpen}
            value={genderValue} //genderValue
            items={gender}
            setOpen={setGenderOpen}
            setValue={setGenderValue}
            setItems={setGender}
            placeholder="Select Transaction Type"
            placeholderStyle={styles.placeholderStyles}
            onOpen={onGenderOpen}
            // onChangeValue={onChange}
            zIndex={3000}
            zIndexInverse={1000}
          />
          <DropDownPicker style={[styles.fields]}
            // style={styles.dropdown}
            open={genderOpen}
            value={genderValue} //genderValue
            items={gender}
            setOpen={setGenderOpen}
            setValue={setGenderValue}
            setItems={setGender}
            placeholder="Transaction Category"
            placeholderStyle={styles.placeholderStyles}
            onOpen={onGenderOpen}
            // onChangeValue={onChange}
            zIndex={3000}
            zIndexInverse={1000}
          />
          <TextInput style={styles.fields}
            label="Amount"
            value={amount}
            onChangeText={amount => setAmount(amount)}
            {...props}
            multiline
            keyboardType="numeric"
          />
          <TextInput style={styles.fields}
            label="Amount"
            value={amount}
            onChangeText={amount => setAmount(amount)}
            {...props}
            multiline
            keyboardType="numeric"
          />
          <TextInput style={styles.fields}
            label="Amount"
            value={amount}
            onChangeText={amount => setAmount(amount)}
            {...props}
            multiline
            keyboardType="numeric"
          />
          <TextInput style={styles.fields}
            label="Amount"
            value={amount}
            onChangeText={amount => setAmount(amount)}
            {...props}
            multiline
            keyboardType="numeric"
          />
          
          <View>
          <DatePicker></DatePicker>
          </View>
          <TextInput style={styles.fields}
            label="Amount"
            value={amount}
            onChangeText={amount => setAmount(amount)}
            {...props}
            multiline
            keyboardType="numeric"
          />
        </View>
      </ScrollView >
    </View>
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
});
