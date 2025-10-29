"use strict";
// any
// from typescript docs -
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
Object.defineProperty(exports, "__esModule", { value: true });
// any - means turn off typechecking, use only in special cases
// bad practice
// ...here typescript will infer hero as "any", since it doesn't know about the value
var hero;
function myHero() {
    return "Batman";
}
hero = myHero();
console.log(hero);
// --------------------------------
// good practice
// ...here typescript will infer hero as "any", since it doesn't know about the value
var isThemeToggled;
function toggleTheme() {
    return true;
}
isThemeToggled = toggleTheme();
console.log(isThemeToggled);
