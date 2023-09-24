// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTraveled = Math.abs(destinationBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTraveled * feetPerBlock;
}

function calculatesFarePrice(startBlock,destinationBlock) {
    const feetPerBlock = 264;
    const distanceTravelledInFeet = Math.abs(destinationBlock - startBlock) * feetPerBlock;
    {
        if (distanceTravelledInFeet <= 400) {
            return 0;
        }
        else if(distanceTravelledInFeet <=2000) {
            return (distanceTravelledInFeet - 400) * 0.02;
        }else if(distanceTravelledInFeet <= 2500) {
            return 25;
        }else if(distanceTravelledInFeet > 2500){
            return 'cannot travel that far';
        }
    }
}
function distanceFromHqInBlocks(location) {
    const headquartersLocation = 42;
    return Math.abs(location - headquartersLocation);
}

if (result === expectedResult) {
    console.log('Test passed.');
} else {
    console.log('Test failed.');
}

console.log('Distance "in blocks" from Scuber headquarters: ' + distanceFromHqInBlocks(pickupLocation));
console.log('Distance"in feet" from Scuber headquarters: ' + distanceFromHqInFeet(pickupLocation));
console.log('Distance "in feet" traveled: ' + distanceTravelledInFeet(startBlock, destinationBlock));




   




   