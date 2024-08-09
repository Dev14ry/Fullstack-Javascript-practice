// # Asynchronous SetTimeout Method
// function hello(){
//     console.log("Hello Everyone..");
// }
// setTimeout(hello,2000);

// # Call Back Hell method
// function getData(dataId,nextData){
//     setTimeout(()=>{
//         console.log("Data ID : ",dataId);
//         if(nextData){
//             nextData();
//         }
//     },3000)
// }
// getData(1232,()=>{
//     console.log("Getting next Data....");
//     getData(12323,()=>{
//         console.log("Getting next Data....");
//         getData(2323,()=>{
//             console.log("Getting next Data....");
//             getData(2322);
            
//         })
//     })
// });
