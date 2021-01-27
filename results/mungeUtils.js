
export function makeEncounteredArray(arrayOfObjects) {
    const encounteredArray = [];
    for (let item of arrayOfObjects) {

        encounteredArray.push(item.Encountered);
    }
    return encounteredArray;
}

export function makeCapturedArray(arrayOfObjects) {
    const capturedArray = [];
    for (let item of arrayOfObjects) {
        capturedArray.push(item.Captured);
    }
    return capturedArray;
}


export function makeLabelsArray(arrayOfObjects) {
    const nameArray = [];
    for (let item of arrayOfObjects) {
        nameArray.push(item.species_id);
    }
    return nameArray;
}