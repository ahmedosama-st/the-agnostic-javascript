# Functions purity

<br>

So far we've discussed the idea of having smelly functions that may cause [side effects](https://github.com/ahmedosama-st/the-real-functional-javascript/tree/master/curriculum/section-2-functions/lecture-2-side-effects) on the state of your program.

So what if my function does not do any of that? What semantic name would my function have then?

Well, consider the following code snippet as a replacement for the `function` keyword.

```js
// Note, try to implement this `findSum` function in a declarative style, if you couldn't, you'll find the solution provided with lectures' files.

function findSum(...numbers) {
  let sum = 0

  for (let number of numbers) {
    sum += number
  }

  return sum
}
```

Such a cutie function, right?

Well this function from the first glance may look smelly to you as it modifies the `sum` variable, but hold on, we agreed that our functions cannot modify anything other than its own state, right?

As the `sum` variable is defined within the `local scope` of the function, it's now considered within its own state which is modifiable for the function `findSum`, so this function is not a smelly function that modifies the global state of a program.

So what would we call this function?

The general term known for these functions is `pure functions`

> Pure functions are functions that do not cause any type of side effects.

The previous definition may not be an official definition for a pure function, sure it's not, I made it up.

But I hope it delievers the gesture, that any function that is truly a `function` and does not cause any side effect, we'd immediately call it a pure function.

But let's restrict our definition further more to.

Let's define our `pure functions` that they are `functions` which adhere to the following conditions:

- Independent functions
- Do not pollute the global state
- Do not cause any side effects
- Their output is predictable (Idempotence)

Umm, what are those buzzy conditions?

Well these also are some made-up conditions I came up with to justify the definition of pure functions to my brain, so I can grasp the concept easily, I hope you do too.

Let's discuss each one of them.

## Indepdent functions

The concept of a function being indepedent is that a function shouldn't rely on any other inputs than its inputs, which we have stated earlier in the previous [lecture]() where `indirect inputs` are considered as side effects, so we should avoid them.

But furthermore, I'd like to denote that an independent function is a function that can run on its own, it shouldn't wait for an output from another function or any reliance in any sorts.

The concept of having `pure functions` is like building very teeny tiny utilities where each utility is only responsible for one single task and does it pretty damn well, and yea, that's the applying of the `SRP - Single Responsibility Principle` in functional programming, where your functions are in their own definition are pure which makes them only responsible for one task and have only and only one reason to change.

## Do not pollute the global state

This may be a coerced version of #3 which is not causing any side effects, But I'd like to separate them apart as _from my own point of view_ polluting the global state can be embodied in changing `arrays, objects` or any global variables that the function should not have access to.

Yes that's an obvious side effect, but still I consider it a special type of function causing a side effect because later on, we will find out that this may cause serious problems of `mutating state` and causes performance issues in [Chapter 7 - Immutability]()

## Do not cause any side effects

I think that one is quite obvious as it has a semantic name, in order for your function to be pure it should not cause any kind of side effects, which is pretty axiomatic.

I hope you remember from the previous lecture we had a `function` called `sum` right?

```js
function sum(...numbers) {
  let total = 0

  for (let number of numbers) {
    total += number
  }

  console.log(total)
}
```

Isn't this function the same signature we have defined for our function above `findSum` ?

The only difference that we didn't log the `total, sum` we defined to the console, but returned it as an output from the function, this small difference changed the function `sum` from being impure and smelly function to a pure and valid function that can be treated functionally and operate the FP patterns on.

I hope you're convinced by now that when we defined that for a function to be pure it should send an output, this output is meant to become valuable for the flow of your program, we'll learn that later in [Chapter 5 - Nesting functions]()

## Their output is predictable (Idempotence)

Tbh, I consider this rule the most important condition of them all, it is even crucial that it may define your functions to be pure even if your definition of your function isn't.

Let's imagine this scenario that you have

```js
var x = 3
const z = 35
function impureOne() {
  return x
}
function impureTwo() {
  return z
}
```

Logically, you'd go all yelling at me “You're defining impure functions purposely!”

Well, are they really impure?

I hope I got you to the `Nani` nirvana now, it's quite obvious that I have just negated what I've defined 20-25 lines before, okay bare with me a bit.

The definition I've given to pure functions implied that they should not rely on inputs they're not defined within their definition aka (parameters), but now I've told you that the most crucial part of a function to become a pure function that its output should be predictable.

Imagine invoking both functions `impureOne` and `impureTwo` 1000 times, would their output change?

Utterly no, their output is bound to the values of `x` and `z` variables so if `x` is meant to never change, we can treat the function `impureOne` as a pure function, right?

Well since we have defined the `x` using `var` keyword, we can never guarantee that it would never change, we're in some sort of doubt.

What about `impureTwo`, this function's output is bound to the value of the `const z` and as far we're told, `const` variable declarations are non-reassignable values, so its value will never change during the execution of your program.

Well doesn't that make its ouput always predictable given the same `const z`?

Hell yeah it does, then why shouldn't we consider that this rule is more applicable to us than a function should not depend on outer variables?

If you're not yet convinced by the power of Idempotent functions, just wait till we get to [Referential Transparency - Chapter 4, Lecture 9]() and hopefully you'll be fully convinced why this rule is surely one of the most applicable rules.

<a href="https://github.com/ahmedosama-st/the-real-functional-javascript/tree/master/manuscript-free-sample/section-2-functions/lecture-2-side-effects">
  <img  src="https://img.shields.io/badge/-Previous-blueviolet" align="left"  />
</a>

<br>
<br>

## Stay tuned, and don't forget to follow us to stay updated ^^

<br>

[<img src="https://img.shields.io/badge/-Facebook-1877F2?style=for-the-badge&logo=Facebook&logoColor=white"/>](https://www.facebook.com/SecTheaterEG)
[<img src="https://img.shields.io/badge/-Telegram-26A5E4?style=for-the-badge&logo=Telegram&logoColor=white"/>](https://t.me/sectheater)
[<img src="https://img.shields.io/badge/-Discord-7289DA?style=for-the-badge&logo=Discord&logoColor=white"/>](https://discord.com/invite/4VqCstahAR)
[<img src="https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=YouTube&logoColor=white"/>](http://youtube.com/c/SecTheater/)
