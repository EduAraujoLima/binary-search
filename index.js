function BinarySearch(min, max, key, attempt = 1) {
    const mid = Math.floor((min + max) / 2);

    if(mid === key) {
        console.log(`Attempt ${attempt} - ${key} is matched`);
        return attempt
    };

    if(key < mid) {
       console.log(`Attempt ${attempt} - ${key} is less than ${mid}`);
        return BinarySearch(min, mid - 1, key, attempt + 1);
    } else {
        console.log(`Attempt ${attempt} - ${key} is higher than ${mid}`);
        return BinarySearch(mid + 1, max, key, attempt + 1)
    }
}

let maxnumber = 1000000

function randomNumber(max = maxnumber, min = 1) {
    let maxAttemp = -1;

    for(let i = 0; i < 10; i++ ) {
        const rdn = Math.floor(Math.random() * (max - min) + min);
        const attempt = BinarySearch(min, max, rdn)
        if(!isNaN(attempt)) {
            maxAttemp = maxAttemp < attempt ? attempt : maxAttemp
        }
        console.log('-------------------------------')
    }

    console.log("MaxAttemp", maxAttemp)
}

randomNumber()