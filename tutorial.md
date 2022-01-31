# Your New Website!

## What are we doing?
This tutorial covers Basic HTML and CSS as well as a simple deployment for a portfolio website. For those in the live takes of this workshop, we will not be doing live coding. Instead, find all comments (denoted in the `index.html` file as `<!-- -->`) and edit according to the comments' instructions.

Let's get started!

## What do we have to work with?
- `index.html` - The layout of the site and what will be seen when we deploy it to Github Pages. You will make the majority of your edits in this file. (Overriding our example code)
- `index.css` - A style declaration file that will have some elements that are nice to talk about as well as the special ones we'll have aside from the imported styles.
- Boostrap - A very comprehensive CSS styles library. The majority of our website's style will come from using Bootstrap classes.
- `index.js` - Most modern websites use some kind of JavaScript (JS). For this tutorial, you do not need to edit this file (nor will we cover it in detail). Just know that this is what makes our website just a bit more *fancy*.

## HTML

## CSS
This workshop will not cover all of CSS, but it will cover the basics. CSS, or Cascading Style Sheets, defines what our website will look like beyond the base styles of HTML. Styles include things like background and text colors, text alignment, and even 3D transformations! In order to apply styles, we first need to *select* the element to which the styles will be applied. This is the first part of CSS that will be covered, the **selector**.

### The Selector
A key part of CSS are its selectors. These could be the tag itself, children, a class, or an id. Let's look at how these will be used in a CSS file. Say you have some element in your HTML that looks like this:
```html
<div class="align-text-bottom" id="hello-world">
    <p>Hello World!</p>
</div>
```
Now, let's look at what the CSS file will look like.
```css
div {
    /* Styles for any <div> tag */
}
div p {
    /* Styles for any <p> tag that is the child of a <div> */
}
.align-text-botton {
    /* Styles for every element with the class align-text-botton */
}
#hello-world {
    /* Styles for the element with the id "hello-world" */
}
```
Selectors correspond to declarations (the text inside the `{}`). Declarations must all end with semicolons and any missing syntax will cause your CSS to not be read properly.

All of this has been said, but what does this mean? Well, these are very important for specificity as well and priority. Selecting by tag is very generic and will apply to all types of elements in the page.

Classes are a great way to apply consistent styles to many different elements using the most generic kinds of selectors. The library we are using in this workshop is Bootstrap. Bootstrap is a CSS library consisting of hundreds of classes (and some JS for special functions) that enable developers to quickly apply styles without needing to write their own stylesheets.

The last type of selector is an id. Ids are unique to a single element. There cannot be more than one that have an id. Thus, it is effectively a unique identifier. Thus, any styles declared for an id will only apply to the element with the id. There are other ways we can use this id, but that involves diving into JavaScript, to which this workshop will not cover (LIVE: due to time constraints).

### Overriding Styles
Sometimes you need to override the styles of some files in a specific location. You have four ways to do this.
1. Applying a class to an element. 
2. Redeclaring the class in a later import
3. Using an id
4. Using `!important`

### Selector Priority
But why are the styles overridden when using those methods? That all boils down to selector priorities. All selectors have a priority to decide which styles are going to be applied (expressed as a 3-tuple or a 3-digit number). There are two special cases in which priorities appear quite weirdly. The first is a class redeclaration in a later file. These classes have the same effective priority, but because HTML reads top-down, only the latest version of the class styles is taken. The other is the keyword in the fourth option which will be explained soon.

* `div` - (0, 0, 0)
* `div p` - (0, 0, 1)
* `.align-text-bottom`- (0, 1, 0)
* `hello-world` - (1, 0, 0)
* (not a selector) `!important` - top priority

Let's take a deeper look at these numbers. Pure tag selections have the lowest priority, at all 0s. That means any other selector can and will override styles within its declaration. Adding children give +1 to the rightmost digit, which gives the selector slightly more priority, but still very low.

The next are classes. Class specificity carries a 1 on the middle digit. If we expess this as a number, we get 10, which is greater than any single digit priority. While it is possible to reach (0, 0, 10) on a tag selector, that number is still considered less than (0, 1, 0).

The last type of selector, the id, has the highest specificity, at an effective numebr of 100. This will override any other selector aside from adding children (which also gives it a priority +1 = 101). Id style overriding and declaring is usually very reliable, but sometimes that isn't the case.

In order to guarantee an override, you should use `!important` on the declaration you want to be expressed. The keyword throws the declaration to the maximum priority and it only works on a specific style declaration, unlike all other selector overrides which can cover more than one. This can overtake priority of even id selections and therefore, if you *really* need to override a specific declaration or cannot figure out how to do it, throwing a `!important` onto declaration will do the trick.

## Github Pages
All public repositories have the ability to enable Github Pages. Github has an internal tool that builds web applications using Jekyll. There are other tools that people may use to build web apps like Webpack or Parcel, but Github uses Jekyll so we'll stick with that.

## (Bonus) What does that JS file do?
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