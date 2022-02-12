function BinarySearch(min, max, key, attempt = 1) {
    const mid = Math.floor((min + max) / 2);

    if(mid === key) return `${key} found in ${mid}`;

    if(key < mid) {
        console.log(`Attempt ${attempt} - ${key} is less than ${mid}`);
        return BinarySearch(min, mid - 1, key, attempt + 1);
    } else {
        console.log(`Attempt ${attempt} - ${key} is higher than ${mid}`);
        return BinarySearch(mid + 1, max, key, attempt + 1)
    }
}


//BinarySearch(1, 100, 45)

function randomNumber(max = 1000, min = 0) {
    for(let i = 0; i < 1000; i++ ) {
        const rdn = Math.floor(Math.random() * (max - min) + min);
        BinarySearch(min, max, rdn)
    }
}

randomNumber()