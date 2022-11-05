import {Picker} from '@react-native-picker/picker';
import {useState, useRef} from 'react';

export default function Dropdown (){
    const [selectedLanguage, setSelectedLanguage] = useState();

    const pickerRef = useRef();

const open=() =>{
  pickerRef.current.focus();
}

const close=()=> {
  pickerRef.current.blur();
}

const onChange=(itemValue="other",index)=>{
    setSelectedLanguage(itemValue);
    console.log(selectedLanguage);
}
const type=[{label:'Java',value:'Java'},{label:'Java1',value:'Java1'},{label:'Java2',value:'Java2'}]
const picketItem=[];
const showPicker=()=>{
    return type.forEach((ele,index)=>{
         <Picker.Item  key ={index} label={ele.label} value={ele.value} />
    })
}

return (<Picker
  style={{flex:1, width:"100%"}}
  ref={pickerRef}
  selectedValue={selectedLanguage}
  onValueChange={onChange}
  >
    {showPicker}
</Picker>)
}