// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0,2)

const returnLastTwoDrivers = array => array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return fare => fare * multiplier
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func1) {
    return func1(arrayOfDrivers)
}