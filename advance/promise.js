const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('task in running');
    resolve();
  }, 2000);
});

promise.then(function () {
  // console.log('promise completed');
});

new Promise((resolve, reject) => {
  setTimeout(function () {
    // console.log("promise in running");
    resolve();
  }, 2000);
}).then(function () {
  //   console.log("promise completed");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "vaibhav", id: 3 });
  }, 1000);
});
promise3.then((user) => {
  //   console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "vaibahv", id: 2 });
    } else {
      // console.log('error was detected');
      reject();
    }
  }, 1000);
});

promise4
  .then((user) => {
    // console.log(user);
    return user.username;
  })
  .then((username) => {
    // console.log(username);
  })
  .catch((error) => {
    // console.log("error does not solve yet");
  })
  .finally(() => {
    // console.log("the promise either solve or rejected");
  });

const promise5 = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(function () {
    if (!error) {
      resolve({ username: "sagar", id: 5 });
    } else {
      reject();
    }
  }, 1000);
});

async function promiseCon() {
  try {
    const res = await promise5;
    console.log(res);
  } catch (error) {
    console.log("error: Network issue");
  }
}
promiseCon()

/*note 
.then makes the connection with resolve
promise is an object
*/
