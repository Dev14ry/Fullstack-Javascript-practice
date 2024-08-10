// function getData(dataId,nextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data ID: ",dataId);
//             resolve("Success!");
//             reject("error");
//             if(nextData){
//                 nextData();
//             }
//         },5000)
//     })
// }


// const getPromiseData = (dataId)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data ID: ",dataId);
//             resolve("Data Successfully Loaded!!!");
//             // reject("Sorry! Network Erorr....");
//         },3000)
//     })
// }
// let promise = getPromiseData(23344);
// promise.then((res)=>{
//     console.log("Hello Everyone it's me @Dev",res);
// })
// promise.catch((err)=>{
//     console.log("Data Not fetched...",err);
// })


//  const asyncfunc1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Hello EveryOne......");
//             resolve("Sucess!");
//         },4000)
//     })
// }
//  const asyncfunc2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Hello EveryOne Once Again.......");
//         resolve("Sucess Again!");
//     },4000)
// }
// console.log("Data1 fetching.....");
// let p1 = asyncfunc1();
// p1.then((res)=>{
//     console.log("Data2 fetching.......");
//     let p2 = asyncfunc2();
//     p2.then((res)=>{
        
//     })
// })

// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Hello EveryOne....");
//             resolve("Sucess!");
//         },3000)
//     })
// }

// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Hello EveryOne Once Again......");
//             resolve("Data Loaded Sucessfully!!!!!");
//         },3000)
//     })
// }

// function asyncfunc3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Hello EveryOnce for third time.......");
//             resolve("Data Loaded Sucessfully!!!!!");
//         },3000)
//     })
// }
// console.log("Data1 fetching.......");
// asyncfunc1().then((res)=>{
//     console.log("Data2 fetching........");
//     asyncfunc2().then((res)=>{
//         console.log("Data3 fetching......")
//         asyncfunc3.then((res)=>{
//             console.log(res);
//         })
//     })
// })

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("Data ID: ",dataId);
//         resolve("Sucess!");
//        },3000)
//     })
// }
// (async function () {
//     console.log("Data1 fetching......");
//     await getData(232);
//     console.log("Data2 fetching......");
//     await getData(2342);
//     console.log("Data3 fetching......");
//     await getData(433);
//     console.log("Data4 fetching......");
//     await getData(3323);
// })();

