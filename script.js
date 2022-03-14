const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includeUppercaseElment = document.getElementById('includeUppercase')
const includeNumbersElment = document.getElementById('includeNumbers')
const includeSymbolsElment = document.getElementById('includeSymbols')
const passwordDisplay = document.getElementById('passwordDisplay')


const UPPERCASE_CHAR = arrayFromHighToLow(65, 90)
const LOWERCASE_CHAR = arrayFromHighToLow(97, 122)
const NUMBER_CHAR = arrayFromHighToLow(48, 57)
const Symbol_CHAR = arrayFromHighToLow(33, 47).concat(
    arrayFromHighToLow(58, 64)
).concat(
    arrayFromHighToLow(91, 96)
).concat(
    arrayFromHighToLow(123, 126)
)



characterAmountNumber.addEventListener('input', synchCharacterAmount)
characterAmountRange.addEventListener('input', synchCharacterAmount)


form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElment.checked
    const includeNumbers = includeNumbersElment.checked
    const includeSymbols = includeSymbolsElment.checked
    const password = generatePassowrd(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password

})



function generatePassowrd(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR
    if (includeUppercase) charCodes= charCodes.concat(UPPERCASE_CHAR)
    if (includeNumbers) charCodes= charCodes.concat(NUMBER_CHAR)
    if (includeSymbols) charCodes= charCodes.concat(Symbol_CHAR)
    const passwordCharacters = []
    for(let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
    
}

function arrayFromHighToLow(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}


function synchCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}