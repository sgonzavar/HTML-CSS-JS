let miPromise = new Promise((resolve, reject) => {
    let expression = true;
    if(expression) {
        resolve("resolvio");
    }else {
        reject("fallo");
    }
});

miPromise.then(value => {console.log(value)}, error => {console.log(error)});