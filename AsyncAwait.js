let beta = async delay => {
  let promise = new Promise((resolve) => {
    setTimeout(() => { resolve('beta') }, delay)
  })

  let result = await promise
  
  return result
}

//Modify the function such that the console output is exactly:
//alpha
//beta [after a two second delay]
//gamma
let output = () => {
  console.log('alpha')
  console.log(beta(2000))
  console.log('gamma')
}

output()