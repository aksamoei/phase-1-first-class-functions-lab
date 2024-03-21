// Code your solution in this file!
const returnFirstTwoDrivers = function(scuberDrivers) {
    return scuberDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(scuberDrivers) {
    return scuberDrivers.slice((scuberDrivers.length - 2), scuberDrivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
    
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
}

