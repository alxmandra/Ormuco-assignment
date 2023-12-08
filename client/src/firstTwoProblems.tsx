const orderVectors = (left, right) => {
    if (left < right) {
        return [left, right]
    }
    return [right, left]
}

const testVectors = (vectorOne = [], vectorTwo = []) => {
    try {
        const orderedOne = orderVectors(vectorOne[0], vectorOne[vectorOne.length - 1]);
        const orderedTwo = orderVectors(vectorTwo[0], vectorTwo[vectorTwo.length - 1]);
        return compareVectors(orderedOne, orderedTwo);
    } catch (e) {
        return `${e}`
    }

}
const compare = (vectorOne, vectorTwo) => {
    if ((vectorOne[0] < vectorTwo[0] && vectorOne[vectorOne.length - 1] > vectorTwo[0]) || vectorOne.includes(vectorTwo[0])) {
        return 'overlap'
    }
    return null
}
const compareVectors = (vectorOne, vectorTwo) => {
    let result = compare(vectorOne, vectorTwo)
    if (!result) {
        result = compare(vectorTwo, vectorOne)
    }

    return result || 'no overlap';
}
//#####################################################################
//Question B
// The goal of this question is to write a software library that accepts 2 version string as input and
// returns whether one is greater than, equal, or less than the other. As an example: “1.2” is
// greater than “1.1”. Please provide all test cases you could think of.
const compareStrings = (strOne = '', strTwo = '') => {
    if (strOne == null || strTwo == null) {
        return 'Not comparable'
    }
    let result = 'Equal'
    if (strOne > strTwo) {
        result = 'Greater'
    }
    if (strOne < strTwo) {
        result = 'Less than the other'
    }
    return result;
}
try {
    module.exports = testVectors;
    module.exports.compareStrings = compareStrings;
} catch (error) {
    console.log('we caught an error');
}