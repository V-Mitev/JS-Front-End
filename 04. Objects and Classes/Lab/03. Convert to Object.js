function converToObj(jsonText) {
    let obj = JSON.parse(jsonText);

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

converToObj('{"name": "George", "age": 40, "town": "Sofia"}');