function solve(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let element of array) {
        let catInfo = element.split(" ");

        const cat = new Cat(catInfo[0], catInfo[1]);
        
        console.log(cat.meow());
    }
}

solve(["Mellow 2", "Tom 5"]);
