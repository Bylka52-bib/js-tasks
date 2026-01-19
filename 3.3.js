for (let i = 1; i <= 10; i++) {
    for (let t = 1; t <= 10; t++) {
        if (i === 5 || t === 5) {
            continue;
        }
        console.log(`${i} * ${t} = ${i * t}`);
    }
}