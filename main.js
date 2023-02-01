const prompt = require 
("prompt-sync")({sigint: true})

let colorCombine1 = prompt(`Choose from the following  by typing "1" for Combine: "2" for Deconstruct: `)
let r = "red"
let b = 'blue'
let y = "yellow"
let p = "purple"
let g = "green"
let o = "orange"

if(colorCombine1 === "1"){
    let Combine1 = prompt(`What is your first color from the following "red" "blue "yellow" you would like to pick: `)
    let Combine2 = prompt(`What is your first color from the following "red" "blue "yellow" you would like to pick: `)

        if(Combine1 === r && Combine2 === b || Combine1 === b && Combine2 === r ){
            console.log("Your color is (purple)")
    }   else if(Combine1 === r && Combine2 === y || Combine1 === y && Combine2 === r ){
            console.log("Your color is (orange)")
    }   else if(Combine1 === b && Combine2 === y || Combine1 === y && Combine2 === b ){
        console.log("Your color is (green)")
        } else{console.log("Error, Please Pick From The Following Colors 'blue' 'yellow' 'red'.")}
}
else if(colorCombine1 === "2" ){
    let colorDeconstruct = prompt(`Please pick from the following colors you would like to deconstruct "purple" "orange" "green": `)

        if(colorDeconstruct === p){ console.log(`(${r} + ${b})`)}
        else if(colorDeconstruct === p)
            { console.log(`(${r} + ${b})`)}
        else if(colorDeconstruct === g)
            { console.log(`(${y} + ${b})`)}
        else if(colorDeconstruct === o)
            { console.log(`(${r} + ${y})`)}

}
else{
    console.log("Error Please Pick From The Options '1' or '2'.")
}



// if(colorInput === "purple" || colorInput === "red blue"){
// console.log(``)
