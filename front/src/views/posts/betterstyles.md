# Organising Style Out Of Chaos
## Some things I've learned that might help you to avoid CSS fatigue

> This guide is intended to assist Frontend devs that are looking for guidance around how to organise their CSS and pre-processors. Specifically focused on projects that conform to the `vue-cli` structure, but the majority of info here will be applicable to all Vue codebases that are run behind a build system, basically any code bases that use SFC. I have used a lot of the ideas here with React codebases as well. This more of a guide than a rule book, hopefully you can glean some useful info and find ways to improve your approach.

### The Ideal Way To Set Up SCSS Imports and Structure For FE Codebases
First things first. Let’s get the order of imports in our main.jsentry point JS file correct.

1. Import any vendor styles at the top of the entry point javascript file, this means any third party packages, make sure you import the `*.min.css` version, usually found in the `/dist` directory of the packages node_module. You may need to ensure that these imports can be parsed (assuming you are not using `vue-cli`), for memory webpack won't parse non-js imports by default.

2. Create a folder for your global styles, I lean towards `/src/style/` then create an index file using whatever pre-processor extention you've choosen, for me, genrally it's `index.sass`. Import the index file or whatever its called from the /style directory into the main.js / entry point javascript file, _after the vendor styles_. This order of imports is somewhat subjective dependent on your aims and use cases. I use this order because I feel like I want the ability to overwrite vendor any badly written vendor styles, leveraging the CSS hieracy rule. Ie, imported later = higher in the hieracy.

3. Commence JavaScript set up as usual.

That deals with all styles that are global. Next let’s quickly ensure everyone understands CSS Specificity, then we can talk about how to apply that idea to FE code bases. Have a look at <a class="sc-hDgvsY jFsdGs" href="https://stackoverflow.com/questions/25105736/what-is-the-order-of-precedence-for-css" title="https://stackoverflow.com/questions/25105736/what-is-the-order-of-precedence-for-css" >this</a>, the basic idea is to know which rule gets applied to the broswer when there is more than one option.

### Grok CSS Specificity

The image below is also pretty good as a visual representation of the point I'm trying to make.

![CSS Specificity](/images/css.png "Diagram displaying CSS Specificity")
                  
The aim of the list - _the order of imports in your entry point_ - is to place all of the vendor and pre-processed styles in the user-agent category seen in the image above, and have the vendor styles lower in the hieracy so they can be overridden without any problems. I am aware that the image and the examples I'm providing do not share a 1:1 relationship, bear with and try to take a higher level view at this point, things will become clear as you read on. Think about the following examples:

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

It’s a simple one. The idea is that there are two rules for the width of the `<div>` right? So which one does the broswer choose to use? In this case it's the most recently used rule. So the width would be `80%`. What about if I added these two items...

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
<template>
    <div class="page-container home-page-container" style="width: 1400px;">
        // content here
    </div>
</template>
```
Would the width be `1400px` or `80%`?

This is why the most important thing to learn in CSS is Specificity. Read [this link](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#:~:text=Specificity%20is%20the%20means%20by,different%20sorts%20of%20CSS%20selectors.), it's an MDN article explaining CSS specificity, and well worth a read.

### Writing Better Styles - How To Use Your Global Style Directory

In a perfect world, the `/style` directory would contain three things:

- Variables
- Mixins
- Default rules written in a broad fashion (examples below) aimed at catching the majority of use cases; typography, forms, containers etc

The grey area begins when you start to think about adding helpers and utility rules to your global styles, it's a good idea and the theory is solid, but it can go too far and slow down the dev environment if not kept in check, speaking from experience, if you have a lot of juniors it will quickly become very grey. I think a good rule of thumb is based on reusage, if you know that the rule you are writting can be used in multiple places, it probably belongs in the global space.

Default styles might look something like this...

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
The goal here is write styles that apply to most `<inputs>` they could be based on the values from your organisations design guide, possibly. You are trying to acheieve a set up that makes it possible to simply put a `<input>` element on the page, and not have to write any additional styles in your SFC, unless something about this specific input calls for something different from the usual design guide inspired `<input/>`. Maybe the ticket you are working on calls for the :foucs on the input to be red... Thats when you write your styles in the `<style scoped>` block of your Vue component.

```sass
// Example of what a typography.sass file might look like
h1, h2, h3, h4, h5, h6
    line-height: 1.5
    font-weight: lighter
    font-family: $heading-font

h1
    font-size: $h1-fontsize
    line-height: 110%
    margin: ($h1-fontsize / 2.3) 0 ($h2-fontsize / 2.9) 0
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: ($h1-fontsize / 1.3)
    @media (min-width: 0px) and (max-width: 520px)
        font-size: ($h1-fontsize / 2.3)

h2
    font-size: $h2-fontsize
    line-height: 110%
    margin: ($h2-fontsize / 2.3) 0 ($h2-fontsize / 2.9) 0
h3
    font-size: $h3-fontsize
    line-height: 110%
    margin: ($h3-fontsize / 2.3) 0 ($h2-fontsize / 2.9) 0
h4
    font-size: $h4-fontsize
    line-height: 110%
    margin: ($h4-fontsize / 2.3) 0 ($h2-fontsize / 2.9) 0
h5
    font-size: $h5-fontsize
    line-height: 110%
    margin: ($h5-fontsize / 2.3) 0 ($h2-fontsize / 2.9) 0
h6
    font-size: $h6-fontsize
    line-height: 110%
    margin: ($h6-fontsize / 2.3) 0 ($h2-fontsize / 2.9) 0

a
    text-decoration: none
    color: $link
    font-family: $body-font
    &:hover
        color: darken($link, 10)

p
    font-size: 1.5em
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: 1.2em
    @media (min-width: 0px) and (max-width: 520px)
        font-size: 1em
strong
    font-weight: bold
small
    font-size: 75%
    .light
        font-weight: 300
    .thin
        font-weight: 200
```
The goal here is to set reasoanbly wide defaults that apply in _most_ cases. The desired result is reduce the amount of styles being written in our SFC. The same as the `<input>` example above, if for some reason an atypical `<h1>` was required, you would write the rules in the `scoped` style block in your SFC. Don't forget that because of the order of your imports, and CSS Specificity rules, these global styles are organised in way that encourages them to be overidden within your SFC.

### A Quick Note On Pre-Processor Usage and Global Variables

Without getting too far off track, a `vue-cli` project can easily be modified to allow usage of pre-processor variables and mixins _within_ `scoped` style blocks. Example as follows.

I would suggest you **do not** use `@import` in your style blocks, it can lead to large scale duplication of CSS in your final bundle. If for some reason you can't use the examples below (possibly an older build system, or badly written webpack config) check out the `@use` rule. Apologies to those of you using LESS or Stylus, I don't know if this applies.

```bash
yarn add style-resources-loader
```
```javascript
// vue.config.js - located at root
const path = require('path')

module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
    },
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/style/index.sass'),
            ],
        })
}
```
This is just one of many ways to place global pre-processor variables in scope of `scoped` style blocks, I hope it helps!

### Styles Being Used Within Vue Single File Components

> I find it very rare to need to use a style block without the `scoped` attribute, it does happen, but this post is centered around the assumption that all SFC style blocks use `scoped`.

So following on from the ideas above, the styles I'm about to talk about will be nearer the bottom of the hieracy image. Namely; Document, inline and computed styles. Again, not a 1:1 relationship becuase styles that use the Vue `scoped` attribute effectively short circuit that list, but let's press on and things will become more clear.

Here is the list of style instances that you will end up using in a typical vue-cli codebase, in the same format as the image - lower in the list will override items higher in the list.

1. Styles written inside Vue `scoped` style blocks. 
    - Don't forget that anything written in `scoped` style block will not apply to things like `v-html` content, or any html added dynamically via javascript (useless you are crafty and scrape the `v-data` attribute from the component, and apply it to every node of dynamic html)
2. Inline styles written on HTML elements using the standard HTML syntax, but in our case this would most likely become styles added by the Vue `style` attribute.
3. Styles written via Javscript.


Which should bring us to a place where the traditional model - _shown in the hieracy image above_ - is now replaced by our new paradigm.

> Things to keep in mind. The order in which we import things is important, especially in complex SPA applications like ours. So, we import the third party stuff first, so we can easily override it if we want to customise, and so we don't have to use !important or an inline style to do so. After the imports are set, then the hieracy within our SFC is basically (from low to high): Style blocks, Scoped Style Blocks, Vue `style` attribute, html inline `style` attribute (these two have slighly different syntax) finally styles written via Javascript. 

### A Note On Performance In Dev Envs

Want to use a hot reload in dev that takes 20ms instead of 3s...?

I suggest trying to minimise the amount of CSS pre-processing you are performing. Use vendor styles that are already compiled and import them early to allow for ease of override. Recently I worked with a code base that made no use of `scoped` style blocks and contained a vast number of .scss files (around 8k lines when compiled). The hot reload was so slow that it became useless, as it was faster to switch tabs and hit refresh in the browser. After completing the steps described above, the hot-reload was back down to matter of milliseconds. It works.

> What we are trying to do here is achieve a system where we build smart defaults, that work in as many cases as possible, then when overrides are required, we have the awesome power of the Vue `scoped` style blocks. This will mean our CSS bundle stays small and we don't spend time fighting our CSS. It takes a bit of time to understand but once you hit grok, it's a big win for developer satisfaction - and lead time will drop as well!
 
All told.