class originDestinationInformation {
  originLocationCode: any;
  destinationLocationCode: any;
  departureDateTime: any;
  arrivalDateTime: any;
  constructor(
    originLocationCode,
    destinationLocationCode,
    departureDateTime,
    arrivalDateTime,
  ) {
    this.originLocationCode = originLocationCode;
    this.destinationLocationCode = destinationLocationCode;
    this.departureDateTime = departureDateTime;
    this.arrivalDateTime = arrivalDateTime;
  }
}

// class BargainFinderMaxRqDto {
//   originDestinationInformation:{
//     PPH: number,
//     departureDateTime: string,
//     originLocation:{
//       locationCode: string,
//     },
//     destinationLocation:{
//       locationCode: string,
//   },}[],

//     maxStopsQuantity: number,
//     cabinPref: {
//       cabin: string,
//     },

//   }

//   {

//     "travelPreferences": {
//         "maxStopsQuantity": 1,
//         "validInterlineTicket": true,
//         "carbinPref": {
//             "cabin": "Economy"
//         },
//         "tpaExtensions": {
//             "onlineIndicator": {
//                 "ind": false
//             },
//             "longConnectTime": {
//                 "enable": true,
//                 "min": 780,
//                 "max": 1439
//             },
//             "jumpCabinLogic": {
//                 "disabled": true
//             }
//         }
//     },

// }
// }
export default originDestinationInformation;
