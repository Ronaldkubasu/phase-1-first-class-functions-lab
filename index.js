// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}
const returnLastTwoDrivers=function(array){
    return array.slice(-2,)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(factor){
    return function(fare){
        return(fare*factor)
    }
}
const fareDoubler = function(fareOne){
    return(createFareMultiplier(fareOne)(2))
    
}
const fareTripler = function(fareOne){
    return(createFareMultiplier(fareOne)(3))
}
const selectDifferentDrivers = function( array, func){
    return func(array)
}