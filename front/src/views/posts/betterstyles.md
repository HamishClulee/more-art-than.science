# Organising Style Out Of Chaos
## Some things I've learned that might help you to stop your code base getting so messy it scares developers away
> This guide is intended to define how we will write our SCSS in our Vue repos moving forward. It is not intended as a rule book, but as a resource to guide you to making better decisions about where to write your SCSS and how to think about the SCSS that you are writing.
### Idea Way To Set Up SCSS Imports and Structure For FE Codebases
First things first. Let’s get the order of imports in our main.js files correct.
<ol>
    <li>
        Import any vendor styles, this means any third party packages, make sure you import the .min.css version, usually found in the /dist directory of the packages node_module
    </li>
    <li>
        index.scss file or whatever its called from the /style directory or whatever it is called.
    </li>
    <li>
        Commence JavaScript set up as usual.
    </li>
</ol>

Let’s quickly ensure everyone understands CSS Specificity, then we can talk about how to apply that idea to Aduro FE code bases. Have a look at <a class="sc-hDgvsY jFsdGs" href="https://stackoverflow.com/questions/25105736/what-is-the-order-of-precedence-for-css" title="https://stackoverflow.com/questions/25105736/what-is-the-order-of-precedence-for-css" >this</a>, the basic idea is to know which rule gets applied to the broswer when there is more than one option.
                  
Think about the following examples …

```scss
// main.css
.page-container {
    width: 98%;
    margin: 55px auto;
    max-width: $page-max-width;
    min-width: $min-width-mobile-device;
}
.home-page-container {
    width: 80%;
}
```
```html
// Home.vue
<template>
    <div class="page-container home-page-container">
        // content here
    </div>
</template>

```

It’s a very simple/basic one, but the idea here is that there are two rules for the width of the `<div>`. Which one does the broswer choose to use?
This example is simple, it's the most recently used rule. So the width would be 80%. 


What about if I added these two items…

```scss
// main.css
.page-container {
    width: 98%;
    margin: 55px auto;
    max-width: $page-max-width;
    min-width: $min-width-mobile-device;
}
.home-page-container {
    width: 80% !important;
}
```
```html
// Home.vue
<template
    <div class="page-container home-page-container" style="width: 1400px;">
        // content here
    </div>
</template>
```


Would the width be 1400px or 80%?

This is why the most important thing to learn in CSS is Specificity. Read the links above, even if you are a super pro, read them any way. Here is the very short version, in order of importance (meaning items at the top of the list will always override items lower down than them)

<ol class="ak-ol">
    <li>
        Styles written via Javscript (Vue included!)
    </li>
    <li>
        Inline styles written on HTML elements using the standard HTML syntax
    </li>
    <li>
        The !important rule
    </li>
    <li>
        The order in which the CSS is loaded into the broswer, in our use cases, basically the order in which things are imported. (more on this below)
    </li>
</ol>

Which brings us back to the image at the start of this section.

The order in which we import things is important, especially in complex SPA applications like ours.

So, we import the third party stuff first, so we can easily override it if we want to customise, and so we don't have to use !important or an inline style to do so.

### Where should I write this SCSS, man?

Again, the order of imports is important. Once we’ve dealt with the pure third party packages, the basic question become where do I put my SCSS. Read the comments in the image above and lets think more about why we are doing this.I’m sure all of you have found times recently when you have completed your tickets functionality, the Vue side of things is good, but your CSS just won’t do what you want. It’s most probably because we have too many rules competing for the browsers attention, our CSS bundles are HUGE. Some are above 1mb of CSS uncompressed, that has a huge impact on both runtime performance and the performance of our dev enviroments and sucks the fun out of life as a developer.

Want to use a hot reload in dev that takes 20ms instead of 3s….? 

### Write better SCSS 

Okay, so now we know why its important. Lets think about how to write SCSS in practice. The main goal, the most important factor in deciding what SCSS to write and where to write it, is to make resusable rules. In a perfect world, the /style directory would contain three things:

<ol class="ak-ol">
    <li>
        Variables
    </li>
    <li>
        Mixins
    </li>
    <li>
        Default styles written in a very general fashion
    </li>
</ol>

Default styles might look something like this….

```scss
// input.scss
input {
    font-size: 1.2em;
    border-bottom: 1px solid $medium-gray;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    font-size: 1.2em;
    padding: 7px 0;
    outline: none;
    &:hover {
        border-bottom: 1px solid $medium-gray;
        border-top: none;
        border-left: none;
        border-right: none;
    }
    &:focus {
        border-bottom: 1px solid $secondary;
        border-top: none;
        border-left: none;
        border-right: none;
        box-shadow: none;
    }
}
```
The goal here is write styles that apply to most `<inputs>` they would be based on the values from Aduro Design guide. You are trying to acheieve a set up that makes it possible to simply put a `<input>` or `<b-input/>` element on the page, and not have to write any SCSS at all… unless, something about this specific input calls for something different from the usual Aduro input. Maybe the ticket you are working on calls for the :foucs on the input to be red… Thats when you write your styles in the `<style scoped>` block of your Vue component.

Note here that until all our codebases are converted to vue-cli build systems, using $variables in the scoped style blocks should be done using the @use rule, don’t use @import it leads to duplicated styles.

The specificity list within our code.. (items at the top of the list will always override items lower down than them)

<ol class="ak-ol">
    <li>
        Scoped style blocks in .vue components
    </li>
    <li>
        General, reusable rules written in our /style folders
    </li>
    <li>
        Bootstrap styles.
    </li>
</ol>


### Really man, why are we doing this? It feels unnecessary…

The SCSS thing is always a hard battle to win. It’s always much easier to just bang out spagetti SCSS for every single ticket. I understand that. We are doing this because spagetti SCSS is fine for today, and tomorrow, and maybe next week. But what happens after 3 months? 6 months? 2 years….We really need to stop making it worse, otherwise the future won’t be much fun at all. I also realise that doing SCSS in the fashion above takes a bit of getting used to and can feel a little complex…All I can say here is please give it a try, communicate more, if you are unsure about where to write a rule, or how to make a rule more general, ask me or one of the more senior guys, or take a break and commit 10 mins of your time to thinking a bit more deeply about what the best way to attack. Once you understand the model, I’m confident you will start to see how much easier life as FE developer can be when your SCSS files and folders and imports are set up like the above.Also, lets take a second and think about where we are going longer term with our FE code bases.Currently we are using Bootstrap, longer term, the aim is remove it all together. If we start writting the general reusable rules described above, at some stage in the future we will be able to do this

```scss
@import "~bootstrap/scss/bootsrap.scss"
```

Comment out the Bootstrap import, and nothing will change.That day is still a while away, maybe 6 months, maybe more, but the more we commit to improving our SCSS, the faster it will come.Trust me, when it does come it will be a good day for all of us…Also in the works is the Figma integration with the Aduro Design Guide via API calls. So, when webpack spins up for you in dev, an API call is made to Figma, which sets all of the $variables in our variables file. You won’t have to worry about colors, or padding values or things like that anymore, the design team sets the values, you use the $variables, development speeds up, we all go to lunch early, everyone is happy. 

>But again, the more we participate in writting better SCSS, the faster we can make the big changes above a reality.Let’s make sure working on our codebases stays fun. There’s nothing worse than spending time battling bad CSS.All told.