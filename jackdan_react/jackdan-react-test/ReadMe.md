---
title: jackdan-react-test
tags: react, test
author: jackdan9

---
# jackdan-react-test
## Introducing JSX
- Consider this variable declaration:
- `const element = <h1>Hello, world!</h1>`
- This funny tag syntax is neither a string nor HTML
- It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
- JSX produces React "elements". We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.

------

## Why JSX ?
- React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
- Instead of artificially separating *technologies* by putting markup and logic in separate files, React separates *concerns* with loosely coupled units called "components" that contain both. We will come back to components in a further section, but if you're not yet comfortable putting markup in JS, this talk might convince you otherwise.
- React doesn't require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
- With that out of the way, let's get started.

------

## Embeding Expressions in JSX
- You can embed any JavaScript expression in JSX by wrapping it in curly braces.
```
funcion formatName(user) {
	return user.firstName + ' ' + user.lastName
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
}

const element = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
);

ReactDOM.render(
	element,
	document.getElementById('example')
)
```

- Try it on CodePen.