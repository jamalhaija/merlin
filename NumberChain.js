const addNumberTo = numbers => {
  return [...numbers, numbers.length + 1]
}

let nums = [1, 1, 3, 5]

//What will be the output of the console message
console.log(addNumberTo(nums))