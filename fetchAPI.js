// const URL = "https://cat-fact.herokuapp.com/facts";
// const URL = "https://api.cricapi.com/v1/currentMatches?apikey=bc726753-297c-40b2-a960-5108fe8a9507&offset=0";

// const getData = async ()=>{
//     console.log("Getting Data.....");
//     let response = await fetch(URL);
//     let images = response.json();
//     console.log(images);
// }


// (async function (){
//     console.log("Getting Data......");
//     let response = await fetch(URL);
//     // console.log(response);
//     let datas = response.json();

//     console.log(datas);
      
    
// })();




// const input = document.getElementById("city-input")
// const button = document.getElementById("search-button");
// const cityName = document.getElementById("city-name");
// const cityTime = document.getElementById("city-time");
// const cityTemp = document.getElementById("city-temp");

// const getData = async(cityName)=>{
//    const promise = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=3085ef67e527403399b123048241008&q=${cityName}&aqi=yes`);
//    return await promise.json();
// };


// button.addEventListener("click",async()=>{
//     const value = input.value;
//     console.log(value);
//     console.log(cityName);
//     const result = await getData(value);
//     cityName.innerText = `${result.location.name}, ${result.location.region},${result.location.country}`
//     cityTime.innerText = result.location.localtime;
//     cityTemp.innerText = result.current.temp_c;

// })


