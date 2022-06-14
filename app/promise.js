const display = (ls1, ls2) => {
    let promise = new Promise((resolve, reject) => {
        (ls1.length > ls2.length) ? resolve("bothLs will be displayed: ") : reject("bothLs can't be displayed!")
    })
    promise.then(
        (message) => console.log(message + ls1)
    ).catch((message) => console.log(message))
}
module.exports.Display = display;