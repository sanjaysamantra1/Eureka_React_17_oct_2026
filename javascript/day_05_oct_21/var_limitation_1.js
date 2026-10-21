function var_demo() {
    if (true) {
        var courseName = 'ReactJS'; // declared inside a block
        console.log(`inside block courseName:${courseName}`)
    }
    console.log(`outside block courseName:${courseName}`)
    // even though courseName is declared inside a block, its still accessible outside the block, hence its proven that var doesn't support block scope
}
var_demo()
// even though courseName is declared inside a block, its scope is function( 1 step up)


function let_demo() {
    if (true) {
        let branchName = 'Virginia';
        console.log(`inside block branchName:${branchName}`)
    }
    console.log(`outside block branchName:${branchName}`) // branchName is not defined
}
let_demo()