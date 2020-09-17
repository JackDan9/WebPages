function test() {
  console.log('start');
  setTimeout(() => {
    console.log('children1')
    new Promise().resolve().then(() => {
      console.log('children2');
    })
  }, 0);
  setTimeout(() => {
    console.log('children3');
    let promise1 = new Promise((resolve, reject) => {
      resolve()
    });
    promise1.then(() => {
      console.log('Children2');
      return 1;
    }).then((1) => {
      
    });

  }, 0);
  new Promise().resolve().then(() => {
    console.log('children5');
  })
  console.log('end');
}

test();