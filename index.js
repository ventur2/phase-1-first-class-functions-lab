// //when doing an annoymus function const returnFirstTwoDrivers =(drivers) =>{
//     or const returnFirstTwoDrivers =(function (drivers){

const returnFirstTwoDrivers =(first) =>{
    console.log(first.slice(0,2)) 
return (first.slice(0,2))
};
 
const returnLastTwoDrivers = function (last){
    return(last.slice(-2)) 
    }

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (fareMultiplier){
return function (number) {
    return fareMultiplier * (number)
}
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers,func){
return func(drivers)
}

// function ben(x){

//     return x
// }