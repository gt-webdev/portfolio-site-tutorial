# Your New Website!

## What are we doing?
This tutorial covers Basic HTML and CSS.

## What do we have to work with?
- `index.html` - The layout of the site and what will be seen when we deploy it to Github Pages. You will make the majority of your edits in this file. (Overriding our example code)
- `index.css` - A style declaration file that will have some elements that are nice to talk about as well as the special ones we'll have aside from the imported styles.
- Boostrap - A very comprehensive CSS styles library. The majority of our website's style will come from using Bootstrap classes.
- `index.js` - Most modern websites use some kind of JavaScript (JS). For this tutorial, you do not need to edit this file (nor will we cover it in detail). Just know that this is what makes our website just a bit more *fancy*.

## Tutorial
### What is HTML
### What is CSS

### (Bonus) What does that JS file do?
(Note for the live version - This may not exist due to time constraints)

There is a single function in the JavaScript file and it does something very particular. Notice that at the top of our page, we have options you can click on. If we look in the HTML file, you will see something like the following:
```html
<div onclick={() => scrollTo('about')}>About</div>
```
So then you might ask, what's with the arrow? In modern JavaScript, we can make functions using a pair of parenthesis (with any number of parameters), an arrow (the `=>`), and either its return value or what other functions it will call. If you want multiple lines of code that this function runs, you can make the arrow point at a code block denoted by a pair of curly braces (`() => {}`). Do note, to return something from curly braces, you need the `return` keyword.

Anyway, onclick is an attribute on all HTML elements that tells the browser what to do if the user clicks on the element with the left mouse button. It expects a JavaScript function as an input. Thus, we gave it a function using the special syntax.

Now then, what does this function do? We can summarize it in three steps.
1. First, find the element using its id.
2. Calculates its position relative to the user's current position
3. Update the user's position such that element is now at the top of the browser window.

And that's it!