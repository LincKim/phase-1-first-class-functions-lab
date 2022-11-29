// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (firstTwo) => {
        return drivers.slice(0, 2);
}
returnFirstTwoDrivers()

const returnLastTwoDrivers = () => {
    return drivers.slice(2)
}
returnLastTwoDrivers()

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (value) {
        return fare =>  value * fare
} 
    
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
    

function selectDifferentDrivers(first2, last2) {
        return last2(first2)
}
selectDifferentDrivers()