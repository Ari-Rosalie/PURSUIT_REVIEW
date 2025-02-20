// console.log('🌌 Space. The final frontier.');
// function waveHello() {
//     return '👋 Hello!';
//   }
  
//   waveHello();

//   const result = waveHello();
// console.log(result);

// console.log(process);

function waveHello(name) {
    let result = '👋 Hello!';
    if (name) {
      return `👋 Hello, ${name}!`;
    }
    return result;
  }
  
  const nameInput = process.argv[2];
  const result = waveHello(nameInput);
  console.log(result);