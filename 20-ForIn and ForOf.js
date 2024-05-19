const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"]

//Prints the values
for(const n of names){
    console.log(n)
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    gb: "facebook",
    lco: "LearnCodeOnline.in"
}

///Prnts the keys
for (const n in symbols){
    console.log(n)
}

//Printing the key value pair
for (const n in symbols){
    console.log(`Key is: ${n} and valye is: ${symbols[n]}`)
}
