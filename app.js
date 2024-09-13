// Callback hell
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     getNextData();
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });


// // Promise chain
// function getData(dataId) {
//     return new Promise((resolve,reject)=> {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success")
//           }, 2000);
//     });
//   }

// getData(1).then(()=>
// {
//     return getData(2);
// }).then(()=>
// {
//     return getData(3);
// }).then((res)=>
// console.log(res));

// Async await
function getData(dataId) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success")
          }, 2000);
    });
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();