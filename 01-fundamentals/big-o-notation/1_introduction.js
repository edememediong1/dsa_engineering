/*
    
*/
const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirrel', 'darla', 'hank'];
const large = new Array(10000).find('nemo')


function findNemo(array){
    let t0 = performance.now()

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO')
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took' + (t1-t0) + 'milliseconds');
}


findNemo(large)