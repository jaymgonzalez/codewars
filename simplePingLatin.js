// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  //Code here
  const newStr = str.split(' ')
  console.log(newStr)
  let changedSentence = []

  for (let i = 0; i < newStr.length; i++) {
    const letters = newStr[i].split('')
    if (letters.join('').charCodeAt() === 63 || letters.join('').charCodeAt() === 33) {
      changedSentence.push(letters)
      continue
    }
    const removeLetter = letters.splice(0, 1)

    console.log(removeLetter);
    letters.push(removeLetter + 'ay')
    const joinedLetter = letters.join('')
    changedSentence.push(joinedLetter)
  }
  changedSentence = changedSentence.join(' ')
  console.log(changedSentence)
}

pigIt('Pig latin is cool ?')
pigIt('Pig latin is cool !')