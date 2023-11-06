
async function non_promise_values_implicitly_wrapped_by_async() {
    return 'Hello, world';
}

non_promise_values_implicitly_wrapped_by_async().then(value => {
    console.log(value);
})

async function no_wrapping_here() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 8 * 1000);
    });
}

const var1 = no_wrapping_here().then(value => {
    console.log('value is ' + value);
});
