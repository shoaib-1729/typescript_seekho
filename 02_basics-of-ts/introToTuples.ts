let userIds: (string | number)[] = [828, "717", "919"]

// array of fix length
let ids: [string, number, number] = ["0", 282, 919]

// use cases
const rgb: [number, number, number] = [171, 118, 219]

// since, tuple bss javascript ke array ke upar ek extra type layer add karta hai, isiliye yeh array ke saare operations ko support karta hai, aur yahi iska major drawback bhi hai ki tuple conceptual level par fixed length ka hone ka baawjood bhi technically grow kar sakta hai
rgb.push(818)

console.log(rgb)

// solutions
// make it readonly taaki push naa ho paaye
let ratings:readonly [number, string, number] = [74, "Good", 64]

// now this is not allowed
// ratings.push("Bad")

console.log(ratings);

// use cases
// tuples with functions
function greetUser({greeting, userId}: {greeting: string, userId: number}): [string,number]{
    return [greeting, userId]
}

const res  = greetUser({
    greeting:"Hello",
    userId:123
})
let [name, id] = res;
console.log(res);
console.log(res.join(""));


// tuples with types
type heroCodeName = [string, number]

let thor: heroCodeName = ["Thor123", 8181]

// tuples ki values change bhi kar sakte hai, immutable nahi hai python ki tarah
thor[0] = "Superman818"

console.log(thor);






export {}