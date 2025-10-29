// any
// from typescript docs -
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

// any - means turn off typechecking, use only in special cases

// bad practice
// ...here typescript will infer hero as "any", since it doesn't know about the value

let hero;

function myHero(){
    return "Batman"
}

hero = myHero()
console.log(hero);

export {}

// --------------------------------

// good practice
// ...here typescript will infer hero as "any", since it doesn't know about the value

let isThemeToggled: boolean;

function toggleTheme(){
    return true
}

isThemeToggled = toggleTheme()
console.log(isThemeToggled);

export {}
