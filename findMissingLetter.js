function findMissingLetter(array) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  let arrayABC = abc.split('')
  let indexABC = arrayABC.indexOf(array[0])

  if (indexABC === -1) {
    arrayABC = abc.toUpperCase().split('')
    indexABC = arrayABC.indexOf(array[0])
  }
  const lastIndexABC = arrayABC.indexOf(array[array.length - 1])
  const newArray = arrayABC.slice(indexABC, lastIndexABC + 1)

  const filtered = (char, i, arr) => {

    return char !== array[i]

  }


  return newArray.filter(filtered)[0]

}


findMissingLetter(['o', 'p', 'r', 's', 't'])