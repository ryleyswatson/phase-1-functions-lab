// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const hq = 42
    return Math.abs(blocks-hq)
}

function distanceFromHqInFeet(blocks){
    const hq=42
    return Math.abs((blocks-hq)*264)
}

function distanceTravelledInFeet(start,destination){
    return Math.abs((start-destination)*264)
}

function calculatesFarePrice(start,destination){
    const distanceTravelledInFeet = Math.abs(destination-start)*264
    if (distanceTravelledInFeet <=400){
    return 0
    }
    if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000){
        return (distanceTravelledInFeet-400)*.02
    }
    if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500) {
        return 25
    }
    if (distanceTravelledInFeet > 2500){
        return 'cannot travel that far'
    }
}