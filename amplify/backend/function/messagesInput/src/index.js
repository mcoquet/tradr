/* Amplify Params - DO NOT EDIT
	API_TRADR_GRAPHQLAPIENDPOINTOUTPUT
	API_TRADR_GRAPHQLAPIIDOUTPUT
	API_TRADR_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 
import { default as E } from "./Exchange";

 const channels = ["vip-signals", "crypto-signals"];
 

 function isSignal(message) {
     const hasEntry = message.includes('Entry');
     const hasBuyLong = message.includes('BUY/LONG');
     const hasSellShort = message.includes('SELL/SHORT');
     
     return hasEntry && (hasBuyLong || hasSellShort)
 }
 
 function extractToken(message) {
     let messageLines = message.split('\n');
     let firstLine = messageLines[0];
     let firstLineParts = firstLine.split('\s');
     let token = firstLineParts[0];
     
     return token;
 }
 
 function extractTP(message) {
     let messageLines = message.split('\n');
     messageLines = messageLines.map((line) => line.trim());
     let targetLine = messageLines.find((line) => {
         let test = line.toLowerCase().startsWith('target 1:');
         return  test
     })
     let lineParts = targetLine.slice(9).split(' ');
     let TP = lineParts[1];
     
     return TP;
 }
 
 function extractSL(message) {
     let messageLines = message.split('\n');
     messageLines = messageLines.map((line) => line.trim());
     let targetLine = messageLines.find((line) => {
         let test = line.toLowerCase().startsWith('stoploss:');
         return  test
     })
     
     let lineParts = targetLine.split(' ');
     let TP = lineParts[2];
     
     return TP;
 }
 
 function extractType(message) {
     const hasBuyLong = message.includes('BUY/LONG');
     
     if (hasBuyLong) return "BUY";
     return "SELL";
 }
 
 function extractData(message) {
     const token = extractToken(message);
     const TP = extractTP(message);
     const SL = extractSL(message);
     const type = extractType(message);
     
     return { token, type, TP, SL }
 }
 
 
 exports.handler = async (event) => {
     console.log(event.body);
     const {canal, message} = JSON.parse(event.body);
     
     let response;
     
     if (channels.includes(canal))
     {
         response = `message found in tracked channel: '${canal}'`
         if (isSignal(message)) {
             console.log('SIGNAL found');
             const extractedData = extractData(message);
             console.log("extractedData", extractedData);
             response = JSON.stringify(extractedData);
             
         } else {
             console.log('signal not found. Discarding message. ');
         }
         
         
     } else {
         response = `channel '${canal}' not currently tracked. Ignoring message `;
     }
     console.log(response);
     return {
         statusCode: 200,
         headers: {
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Headers": "*"
         }, 
         body: JSON.stringify(response),
     };
 };
 