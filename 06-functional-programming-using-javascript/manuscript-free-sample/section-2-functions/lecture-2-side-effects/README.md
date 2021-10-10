# Side effects 🤢

> A secondary, typically undesirable effect of a drug or medical treatment.

That what Google says about side effects, so how our baby functions cause that? 😦

**Well, our functions are more like medicines, aren't they?**

They do have a certain job and only one job to do, seems like a medicine to me where an anti-flu medicine should only heal your flu not causing you any other diseases.

**So, how could our functions cause side effects?**

Well let's create a metaphor for the word “function” to be the following code snippet

```js
function sum(...numbers) {
  let total = 0

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }

  console.log(total)
}
```

**So, what's up now with our `function`?**

This function is clearly calculating the sum of an array of numbers and storing it into a variable named `total`, that's alright by me and seems semantically related to its name which is good.

But why would a function that's calculating the sum of numbers print something to the `console`, that doesn't apply to its name or its job actually, actually, that would be more like a `side effect`, wouldn't it?

Revisiting the definition of side effects, `A secondary, typically undesirable effect of a function`, if you wouldn't mind, I just replaced the last couple of words with `function` as we're speaking in the context of functions.

That makes it quite obvious now that `console.log()` is some sort of side effect that's produced by a function.

**Note: we're ignoring the fact that this function does not meet the condition of being a function**

So to generalize that statement, any action that's not desirable by our function is meant to be a side effect, and that may apply to the following:

- Indirect inputs
- I/O interactions (files, console, etc)
- Hitting RESTful APIs
- Manipulating the DOM tree
- Interacting with databases
- Changing the state of the program
- Modifying data (inputs, shared states, local variables...)

I presume you're shocked by now, like WTF is left for me to do now?

Well allow me to shock you more 😄

- Heating up CPU

Yup, if your program causes your CPU to heat up, that's a side effect by your program.

But that's the upmost generalized version of side effects, surely we won't take it to that level, we'll just stick to our baby function defined earlier.

So what does each side effect infer to?

### Indirect inputs

If your function receives its data from any source other than its parameters, that would be considered as indirect input to the function, so the following functions are considered functions that cause side effects.

```js
var x = 5
function getX() {
  return x
}

/* ----------- */

async function fetch() {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  )
  return data
}

// Note: Check the files provided with the repository for more examples.
```

The first function `getX` is accepting the variable `x` from an outer scope which is the `global scope` which makes it an indirect input to the function.

The second function `fetch` is an asynchronous function that fetches the data provided by the RESTful API `jsonplaceholder` which makes it also some sort of indirect input to the data alongside hitting RESTful APIs is also considered a side effect.

Revisiting the definition we've stated for functions, that functions should accept inputs aka `parameters`, this rule would solve many problems in our case for those two functions, all we would need to do is move the `x` variable from the `global scope` to the `local scope` of the function where it's treated as a `function parameter` which solves that problem of being an indirect input to the function

The second case of the `fetch` function, we would make it a general function by providing it with a parameter `url` by which our `async` function would fetch data from, although that will only solve one problem of the function being receiving data from indirect inputs, but that's better than two problems to be left with.

Note: We'll revisit this point of causing side effects later on the manuscript

So our implementations would be something like the following

```js
function getX(x) {
  return x
}

async function fetch(url) {
  const { data } = await axios.get(url)
  return data
}
```

## I/O interactions

In our daily coding base, we usually interact with files, databases, and surely we'll write data to them, add data and maybe delete some of them.

That's what I refer to as I/O interactions, if your function is doing some of this sort, its considered a side effect which is not acceptable in the FP.

But let's be realistic, can we live without database/files interactions?

Hell no we can't, we'd have no programs if we never interact with databases or file systems, so we'd consider it just a theoretical thesis (for now, we'll revisit it later on)

## Hitting RESTful APIs

This one is almost the core of our programs nowadays, if you're a front-end developer surely you're hitting the back-end's developer server to retrieve data to show, and if you're a full-stack developer you'd be hitting your own servers to fetch the data to show.

The RESTful APIs are indispensable, how can we ignore them as side effects of the functions?!

Well, we are not ignoring them or omitting them out of our functions, but later on we will learn that we are allowed some rate of side effects `impurity` to occur as they are some sort of demand.

So you're free to use RESTful APIs, but later on we'll discuss how to structure your code to best fit `functions purity` and avoid side effects as much as possible.

## Manipulating DOM and others

I hope by now you've grasped your head about what a side effect is, another sort of causing a side effect by a function is modifying the DOM tree, you might not be doing that by your own hands like using `document` object in native JS or `JQuery` library.

But if you're using any framework for front-end development such as `React.js`, `Vue.js` or any other framework, surely these frameworks are modifying the state of your DOM tree which is considered as a side effect.

But don't worry, you're allowed to do so. I even think that `React.js` takes into consideration not causing side effects by treating your DOM tree as an `Immutable data structure` which preserves the `purity` of the core functions in `React.js`, but that's only a hypothesis of my own.

I presume by now you're shocked of how many smelly functions you've written through your career and how many side effects you've caused

Well, no worries, as stated before, you're allowed to cause side effects but keep it minimal, we cannot run programs with sharing states, modifying DOM trees, hitting RESTful APIs.

But if you do, make it obvious to the reader of your code that there exists a side effect here.

And as much as possible try to separate your side effective code away from your [pure functions](https://github.com/ahmedosama-st/functional-javascript/tree/master/manuscript-free-sample/section-2-functions/lecture-3-functions-purity) which are meant to be small units.

<a href="https://github.com/ahmedosama-st/the-real-functional-javascript/tree/master/manuscript-free-sample/section-2-functions/lecture-1-do-you-know-what-is-a-function">
  <img  src="https://img.shields.io/badge/-Previous-blueviolet" align="left"  />
</a>

<a href="https://github.com/ahmedosama-st/the-real-functional-javascript/tree/master/manuscript-free-sample/section-2-functions/lecture-3-functions-purity">
  <img  src="https://img.shields.io/badge/-Next-blueviolet" align="right"  />
</a>

<br>
<br>

## Stay tuned, and don't forget to follow us to stay updated ^^

<br>

[<img src="https://img.shields.io/badge/-Facebook-1877F2?style=for-the-badge&logo=Facebook&logoColor=white"/>](https://www.facebook.com/SecTheaterEG)
[<img src="https://img.shields.io/badge/-Telegram-26A5E4?style=for-the-badge&logo=Telegram&logoColor=white"/>](https://t.me/sectheater)
[<img src="https://img.shields.io/badge/-Discord-7289DA?style=for-the-badge&logo=Discord&logoColor=white"/>](https://discord.com/invite/4VqCstahAR)
[<img src="https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=YouTube&logoColor=white"/>](http://youtube.com/c/SecTheater/)
