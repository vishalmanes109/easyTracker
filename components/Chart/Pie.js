// import React from "react";
// import { Text ,View, StyleSheet,  } from 'react-native';
// import {
//     PieChart
//   } from "react-native-chart-kit";

//   import { Dimensions } from "react-native";
// const screenWidth = Dimensions.get("window").width;

// const chartConfig={
//     backgroundColor: "#e26a00",
//     backgroundGradientFrom: "#fb8c00",
//     backgroundGradientTo: "#ffa726",
//     decimalPlaces: 2, // optional, defaults to 2dp
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     },
//     propsForDots: {
//       r: "6",
//       strokeWidth: "2",
//       stroke: "#ffa726"
//     }
//   }

// const data = [
//     {
//       name: "Seoul",
//       population: 21500000,
//       color: "rgba(131, 167, 234, 1)",
//       legendFontColor: "#7F7F7F",
//       legendFontSize: 15
//     },
//     {
//       name: "Toronto",
//       population: 2800000,
//       color: "#F00",
//       legendFontColor: "#7F7F7F",
//       legendFontSize: 15
//     },
//     {
//       name: "Beijing",
//       population: 527612,
//       color: "red",
//       legendFontColor: "#7F7F7F",
//       legendFontSize: 15
//     },
//     {
//       name: "New York",
//       population: 8538000,
//       color: "#ffffff",
//       legendFontColor: "#7F7F7F",
//       legendFontSize: 15
//     },
//     {
//       name: "Moscow",
//       population: 11920000,
//       color: "rgb(0, 0, 255)",
//       legendFontColor: "#7F7F7F",
//       legendFontSize: 15
//     }
//   ];
// const Pie = () => {
// 	return(
// 		<PieChart
//   data={data}
//   width={screenWidth}
//   height={220}
//   chartConfig={chartConfig}
//   accessor={"population"}
//   backgroundColor={"transparent"}
//   paddingLeft={"15"}
//   center={[10, 50]}
//   absolute
// />
// 	)
// }
// export default Pie;

// const Styles = StyleSheet.create({
// 	container :{
// 		alignContent:'center',
// 		margin:5,
//         borderRadius:10
// 	},
// 	view:{
// 		flex:1,
// 		flexDirection:"row",
//         justifyContent: "space-around",
//         borderRadius:4,
// 		backgroundColor:'red',
// 		padding:10
// 	}
// })
