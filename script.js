function hello(name,...num) {
    let sum = 0
    for(let i in num){
        sum+= num[i]
    }
    return `output: ${name} ${sum}`
}
console.log(hello('total sum is', 2,3,9,8,788))
