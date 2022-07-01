export const foo = () => 'hello Ashar and Rui and Ed'

export const calculate = (numbers: number[]): number => {
    if (numbers.length !== 5) throw new Error('Hahahahahaha')

    numbers.forEach(number => {
        if (number < 1 || number > 6) {
            throw new Error('Hahahahahaha')
        }
    })

    var score = 0
    var orderedList = numbers.sort((x,y) => x-y).filter ( z => z === 1)

    while (orderedList.length > 0) {
        if (countOccurances(orderedList, 1) >= 3) {
            score += 1000
            removeItemFromArray(orderedList, 1, 3)
        }

        if ( countOccurances(orderedList, 1) < 3) {
            const numberOfOccurances = countOccurances(orderedList, 1)
            score += (100 * numberOfOccurances)
            removeItemFromArray(orderedList, 1, numberOfOccurances)
        }
    }

    return score
}

function removeItemFromArray (numbers: number[], numberToRemove: number, removalCount: number) {
    if (numbers.length === 1) {
        numbers.pop()
    } else {
        numbers.splice(numbers.indexOf(numberToRemove), removalCount)
    }
}

function countOccurances (numbers: number[], numberToCount: number) : number {
    return numbers.filter(x => x === numberToCount).length
}