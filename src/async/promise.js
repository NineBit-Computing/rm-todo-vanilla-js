function promiseDemo() {
  // promiseType1();
  promiseType2();
}

function promiseType1() {
  console.log(`main callstack: statement 1`);
  // to get the API data either pass a callback Fn or Handle Promise
  // const apiData = delegate();
  delegate().then(function (apiData) {
    console.log('success handler: statement 2: ', apiData);
  }).catch(function (err) {
    console.log('error handler: statement 3: ', err);
  }).finally(function () {
    console.log('I am printed inside Finally handler');
  });
  console.log('statement 4');
}

function promiseType2() {
  console.log(`main callstack: statement 1`);
  // to get the API data either pass a callback Fn or Handle Promise
  // const apiData = delegate();
  delegate().then(function (apiData) {
    console.log('success handler: statement 2: ', apiData);
  }, function (err) {
    console.log('error handler: statement 3: ', err);
  });
  console.log('statement 4');
}

/**
 * Creates a Promise and returns a pending Promise
 */
function delegate() {
  const delegatePromise = new Promise(function (resolve, reject) {
    console.log(`inside promise: statement 5`);
    // we should make an API call to exibit async programming
    const bool = 0;
    if (bool) {
      resolve('I have passed the exam');
    } else {
      reject('I have failed the exam');
    }
  });
  return delegatePromise;
}

window.promiseDemo = promiseDemo;