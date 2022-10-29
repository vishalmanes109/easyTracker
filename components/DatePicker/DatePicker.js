import * as React from 'react';
import { Button } from 'react-native-paper';
import { DatePickerModal, DatePickerInput } from 'react-native-paper-dates';

// export default function DatePicker() {
//   const [date, setDate] = React.useState(undefined);
//   const [open, setOpen] = React.useState(false);

//   const onDismissSingle = React.useCallback(() => {
//     setOpen(false);
//   }, [setOpen]);

//   const onConfirmSingle = React.useCallback(
//     (params) => {
//       setOpen(false);
//       setDate(params.date);
//     },
//     [setOpen, setDate]
//   );

//   return (
//     <>
//       <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
//         Pick single date
//       </Button>
//       <DatePickerModal
//         locale="en"
//         mode="single"
//         visible={open}
//         // onDismiss={onDismissSingle}
//         date={date}
//         onConfirm={onConfirmSingle}
//         // validRange={{
//         //   startDate: new Date(2021, 1, 2),  // optional
//         //   endDate: new Date(), // optional
//         //   disabledDates: [new Date()] // optional
//         // }}
//         // onChange={} // same props as onConfirm but triggered without confirmed by user
//         // saveLabel="Save" // optional
//         // saveLabelDisabled={true} // optional, default is false
//         // uppercase={false} // optional, default is true
//         // label="Select date" // optional
//         // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
//         // startYear={2000} // optional, default is 1800
//         // endYear={2100} // optional, default is 2200
//         // closeIcon="close" // optional, default is "close"
//         // editIcon="pencil" // optional, default is "pencil"
//         // calendarIcon="calendar" // optional, default is "calendar"
//       />
//     </>
//   );
// }

export default function DatePicker() {
    const [inputDate, setInputDate] = React.useState(undefined)
  
    return (
      <>
        <DatePickerInput
          locale="en"
          label="Birthdate"
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode="start"
          // mode="outlined" (see react-native-paper docs)
        //   calendarIcon="calendar" // optional, default is "calendar"
          // other react native TextInput props
        />
      </>
    )
  }
  