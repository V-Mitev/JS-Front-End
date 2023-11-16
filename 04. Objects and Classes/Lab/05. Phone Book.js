function solve(peopleInfo) {
    let result = {};

    for (const info of peopleInfo) {
        let [name, phoneNumber] = info.split(" ");
        result[name] = phoneNumber;
    }

    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);