const my = new Promise((res,rej) => {
    let a = 1
    if (a == 1) {
       res('yes')
    }else{
       rej('no')
    }
})
my.then((r) => {
    document.writeln(r)
}).catch((e) => {
    document.writeln(e)
})