interface Employee {
    readonly name: string,
    age?: number,
    address: string
}


let employee: Employee = {
    name: "Quyet",
    address: "Ha noi"
}

let {address} = employee;
console.log(address);