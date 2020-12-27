// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []



function anagrams(word, words) {
  console.log(word)
  console.log(words)


  const wordAsArray = word.split('')
  const returnedArray = []

  for (let i = 0; i < words.length; i++) {
    const check = words[i].split('')
    // console.log(wordAsArray.sort().join('') == check.sort().join(''))
    // console.log(wordAsArray.sort().join(''))


    if (wordAsArray.sort().join('') == check.sort().join('')) {

      returnedArray.push(words[i])

      // firstValue !== undefined ? secondValue = words[i] : firstValue = words[i]


      console.log(words[i])
      // console.log(words[i].split('').reverse().join(''))

      // words[i] == words[i].reverse()

    }
    // console.log(wordAsArray)
    // console.log(check)
  }

  // console.log(firstValue && secondValue ? [firstValue, secondValue] : [])

  // console.log(firstValue)
  // console.log(secondValue)
  // return firstValue && secondValue && firstValue.split('') == secondValue.split('').reverse() ? [firstValue, secondValue] : []

  console.log(returnedArray);

  return returnedArray



  // console.log(words.includes(wordAnagram))
  // console.log([wordAnagram, word]);


}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
anagrams('laser', ['lazing', 'lazy', 'lacer'])