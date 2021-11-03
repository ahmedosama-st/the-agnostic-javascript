# What is functional programming 😐??

I bet that you are familiar with the coding paradigm OOP and probably implemented it many times through your programming journey, but never asked yourself if it's the only existing paradigm?

There exists another paradigm which is as robust as OOP which is Functional Programming.

The word itself comes from a mathematical background built on top of [Lambda Calculus](https://www.youtube.com/watch?v=qTHGmVrOGZo&ab_channel=JSHeroes)

> "Lambda Calculus" also known as The λ-calculus can be defined as the following The λ-calculus is an elegant notation for working with applications of functions to arguments.

More information can be found here

- https://plato.stanford.edu/entries/lambda-calculus/

- https://en.wikipedia.org/wiki/Lambda_calculus

The `Lambda Calculus` is meant to define functions in terms of primitive types such as numbers for instance, you cannot define any complex data structure like an `array` or an `object`, only primitives.

Which leads to only having `Lambda Functions` defined in your program.

> The lambda functions are uni arity functions, therefore, most of our functions will be defined this way.

> Arity is the number of parameters that a function accepts within its definition

## Examples

- uni-arity function == `const fn = x => x` the function `fn` is a uni-arity or unary function as it receives only one input in its parameters.
- binary-arity function == `const add = (x, y) => x + y` the function `add` is a binary-arity or binary function as it receives two input in its parameters.
- ternary-arity function == `const addThreeNumbers = (x, y, z) => x + y + z` the function `addThreeNumbers` is a ternary function as it receives three inputs in its parameters.

Any other function is considered `enary` function which is a function that accepts a number `n` of parameters.

I presume by now you're astonished by the fuzz-words that are commonly used with functional programming, I cannot argue with that, the FP paradigm does really have some strong sounding words that seem complex and makes you look really smart and every article I've read mentioned that actually 😄

I can now gladly tell you that there's much, much more of that! The functional programming is full of buzz words and sexy words that really will make you look smarter between your colleagues and peers.

But sure that's not enough motive for you to learn functional programming.

## So why to learn functional programming?

Functional programming is

- More predictable and safer.

  Whenever you structure your code in a functional way, your functions are made to be pure functions which implies that your output is always predictable.

- Easier to test/debug

  Testing is a required skill in your daily-coding life, mostly you're unit-testing your components, well functional programming is all about unifying your functions into small units which make them more testable.

  On the other hand, after you've published all of your functions and tests for them, what happens if some test wasn't covering every single case of your function? You'd surely need to debug it, because you've structured your code in a way that all functions are just small utilities doing some small tasks, you can debug where the error is and easily fix it by adding more test cases to guarantee that your functions flow are working properly.

- Preserving Immutability

  As we'll see later on, `immutability` is a pillar of the functional programming paradigm.

  Structuring your code in pure functions, you'll be obliged not to modify global states or cause any side effects, therefore, you'll preserve the state to not be mutated, which grants you more secure flow and higher performant code.

<a href="https://github.com/ahmedosama-st/the-real-functional-javascript/tree/master/manuscript-free-sample/section-1-introduction/lecture-2-the-four-pillars-of-fp">
  <img  src="https://img.shields.io/badge/-Next-blueviolet" align="right"  />
</a>

<br>
<br>
<br>

## Don't forget to follow us to stay updated with everything.

<br>

[<img src="https://img.shields.io/badge/-Facebook-1877F2?style=for-the-badge&logo=Facebook&logoColor=white"/>](https://www.facebook.com/SecTheaterEG)
[<img src="https://img.shields.io/badge/-Telegram-26A5E4?style=for-the-badge&logo=Telegram&logoColor=white"/>](https://t.me/sectheater)
[<img src="https://img.shields.io/badge/-Discord-7289DA?style=for-the-badge&logo=Discord&logoColor=white"/>](https://discord.com/invite/4VqCstahAR)
[<img src="https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=YouTube&logoColor=white"/>](http://youtube.com/c/SecTheater/)
