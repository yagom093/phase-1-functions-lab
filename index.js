// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
if (blocks > 42) {
    return blocks - 42;
} else {
    return 42- blocks;
}

}
function distanceFromHqInFeet(anyValueHere) {
    distanceFromHqInBlocks(anyValueHere);
    return distanceFromHqInBlocks(anyValueHere) * 264;
} 

function distanceTravelledInFeet(start, ending) {
    if (start > ending) {
        return (start - ending) * 264;
    } else {
        return (ending - start) * 264;
    }
    }

    function calculatesFarePrice(start, ending) {
        let distance = distanceTravelledInFeet(start, ending);
        if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500){
        return 'cannot travel that far'
    }
    }
