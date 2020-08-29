# Tips For New VueJs Players
## Common mistakes seen in Vue codebases
_Last updated Apr 27, 2020_

>A list of common mistakes from junior Vue devs I have observed from the last few years.


### Not using the same name for component file, component template declarations and a components name property

```html
<template>
  <foo-bar-component></foo-bar-component>
<template>
```
```javascript
import FooBarComponent from '../components/FooBarComponent.vue'

default {
  name: 'FooBarComponent',
  components: {
    'foo-bar-component': FooBarComponent
  }
}
```

Component template declarations should be written in the snake-case version of the component file name, the file name should be written in PascalCase.

To convert PascalCase to snake-case, simply replace the capital letters (except for the first!) into hypens:

```
YouAreAwesome --> you-are-awesome
ThisMakesDebuggingEasier --> this-makes-debugging-easier
```

Yes - this makes debugging easier, when using VueDevTools, it's much easier to find everything if all the names: file name, name attribute in the component and the component decalration in template blocks, are all the same except for their case.

### Not line wrapping

**Bad**
```html
<div class="warning-subtext">{{firstLetterUpperCase(participant.fullName)}} will not be able to see your message until his/her employer turns Coach Chat on.</div>
```
**Good**
```html
<div class="warning-subtext">
  {{firstLetterUpperCase(participant.fullName)}} 
  will not be able to see your message until his/her employer 
  turns Coach Chat on.
</div>
```
**Bad**
```html
<div class="survey-popup-card-footer">
  <b-button class="btn-heartbeat small white" variant="secondary" @click="handleHidePopup">BACK TO SURVEY</b-button>
  <b-button class="btn-heartbeat small blue" variant="primary" @click="handleCancelSurveyToDeleteQuestions">CANCEL</b-button>
</div>
```
**Good**
```html
<div class="survey-popup-card-footer">

  <b-button
    class="btn-heartbeat small white"
    variant="secondary"
    @click="handleHidePopup"
  >BACK TO SURVEY</b-button>
  
  <b-button
    class="btn-heartbeat small blue"
    variant="primary"
    @click="handleCancelSurveyToDeleteQuestions"
  >CANCEL</b-button>

</div>
```
**Bad**

```javascript
import { FETCH_EMBER_PATHS, FETCH_EMBER_REVIVE_PATHS, FETCH_EMBER_FILTERED_PRACTICES, FETCH_EMBER_PRACTICES_BY_ID, FETCH_EMBER_PRACTICES_BY_PATHS, FETCH_EMBER_PATH_ELIGIBILITY } from '../../store/modules/embers/constants';
```
**Good**
```javascript
import { 
  FETCH_EMBER_PATHS,
  FETCH_EMBER_REVIVE_PATHS,
  FETCH_EMBER_FILTERED_PRACTICES,
  FETCH_EMBER_PRACTICES_BY_ID,
  FETCH_EMBER_PRACTICES_BY_PATHS,
  FETCH_EMBER_PATH_ELIGIBILITY 
} from '../../store/modules/embers/constants';
```

Line wrapping is an easy thing to do, it means we can have two or three files open in our editors at a time, it means we can read PR’s without side scrolling, which means reading them faster, it makes code easier to read, and if code is eaiser to read it's easier to debug. If code is well line wrapped, it’s also less likely to contain bugs, because you are not hiding things off screen.

This doesn't need to be done manually, the VSCode prettier extension has really good Vue support and does an excellent job at automating formmating.

### Not using the same NodeJ version between code bases

Swicthing between projects should be easy - pull repo, checkout branch, npm install, run dev - write code - should be quick, quick enough that you don't feel like you have to go and make a coffee after you run dev. You should be able to say to any other FE dev, “Run my branch and see what I mean” and they should be able to do this very quickly, having the same Node version is a big part of this. 

Generally this problem arises when SCSS/SASS is in use, if you are not using pre-processors, then you can probably ignore this. 

Node 12.x is an even version number, which means it's an LTS version, Long Term Stable release. This means bugs in Node get fixed but the Node maintainers. It also means that when we upgrade our build systems, there is one less thing to do.

I suggest using the `nvm` package, Node Version Manager. Instal it then say `nvm current` and see the output, if you are interesting in correctness you should see `12.xx.xx` or `14.xx.xx`. The most importnat thing here is seeing the same across team members.

TL;DR - install `nvm` the say:

`nvm install 12.16.1 && nvm alias default 12.16.1`

### Not providing a :key when using v-for

[For reference](https://stackoverflow.com/questions/47978853/whats-a-unique-key-in-vue-js-used-for) and [the docs](https://vuejs.org/v2/api/#key)
 

Basically, if you write a v-for you need to provide a key

```html
    <my-awesome-component
        class="intelligent-reusable-class-name"
        v-for="(value, index) in listOfThings"
        :key="index"
    ></my-awesome-component>
```
If you read the docs carefully, you will that there are some higher end performance use cases where you would not use a :key. If you think you have found one of those use cases, contact Hamish to discuss, otherwise, use a :key.

For our purposes, we use the :key every time we use v-for.


### Not writing reusable unit's of code or new components

This item is a preview of another doc that is currently being written. Even if you're using a framework like vuetify or vue-bootstrap (which I don't encourage or agree with, but regardless), that shouldn't mean that you never write new custom components. Common cases - when using a framework- would be things like wrapper components for commonly used groups of framework components, if you are often using a set of two or three buttons, write a wrapper component called HorizontalButtonWrapper, or writing v-if / v-else blocks in a top level router component, use a component to wrap the logic and reduce the number of lines in the template block.

Anytime you find you self using CTRL+C CTRL+V - write a new component, and reuse code rather than using the same code twice! One of the main advantages of using an SPA framework like Vue is code reusage. Components are how that advantage is manifested. It also provides developers the ability to really reduce bundle sizes if used correctly.

There is a limit to how far you should go, having thousands of files in your repository that are very rarely used is just another symptom of inexperience or disorganised thinking. But what I have seen much more of is huge Vue files, with a ton of spagetti code making debugging or refactoring much much slower, and as above, fully ignoring one of the main benefit's of using Vue in the first place.

The more code you resuse, the less bugs you will create.

The more code you resuse, the less unit tests you will have to write.

The smaller your unit's of code, the eaiser they will be to test.

Anytime you find you self using CTRL+C CTRL+V - write a new function, and reuse code rather than using the same code twice!

##### Some examples

**Bad**
```html
<template>
  <div class="row-container">
    <div class="row-item-container one">
      <div class="row-item-actual">{{ someData }}</div>
    </div>
  </div>
    <div class="row-container">
    <div class="row-item-container two">
      <div class="row-item-actual">{{ someOtherData }}</div>
    </div>
  </div>
    <div class="row-container">
    <div class="row-item-container three">
      <div class="row-item-actual">{{ someMoreData }}</div>
    </div>
  </div>
</template>
```

**Good**
```html
<template>
  <div
    class="row-container"
    :class="value.className"
    v-for="(value, index) in computedProperty"
    :key="index"
  >
    <div class="row-item-container>
      <div class="row-item-actual">{{ value.data }}</div>
    </div>
  </div>
</template>
```
```javascript
default {
  computed: {
    computedProperty() {
      return [
        { value: this.someData, className: 'one' },
        { value: this.someOtherData, className: 'two' },
        { value: this.someMore∂Data, className: 'three' }
      ]
    }
  }
}
```
**Even Better**
```html
<template>
  <row-container
    class="row-container"
    :class="value.className"
    v-for="(value, index) in computedProperty"
    :key="index"
    :dataAsProp="value.data"
  ></row-container>
</template>
```
```javascript
default {
  computed: {
    computedProperty() {
      return [
        { value: this.someData, className: 'one' },
        { value: this.someOtherData, className: 'two' },
        { value: this.someMore∂Data, className: 'three' }
      ]
    }
  }
}
```
Anytime you can reduce code reusage, you are actually _saving time_. Less bugs, less maintenace, making things easier to read and understand for the next guy.

You may think “But it’s faster this way!”

_It's not._

It’s faster today, but it means that once you are feature complete, you spend three sprints fixing bugs, instead of a couple of hours. You also learn nothing, which means that next time you have to do the same task, you do the same thing. If you wrote it well the first time, and wrote it in a way that you and everybody else could reuse it - you would be at lunch or at home with your family by now - but instead you’re furiously copy pasting code from somewhere, trying to meet a dead line.

This is real - if you want to move faster - go slower.

Anytime you find you self using CTRL+C CTRL+V - write a new function or a new component, and reuse code rather than using the same code twice!

Another doc about this topic is in the works currently, because this is one of the biggest issues we have in our code bases.

### Ignoring warnings from build system, eslint, or VSCode

Believe it or not - warnings exist for a reason!

They exist because, smarter people than us have determined that if we deal with the warning, it will reduce bugs, and if we ignore it….

We will have to spend time fixing bugs.

Warnings are your friends. If you see one, google it. Then fix it. Then commit it and push it. If you can’t fix it get in touch with one of the senior guys to get some help.

The problem that exists currently is that we have so many warnings, they just dont mean anything anymore. Let’s fix that! 

Dealing with warnings, from the Developer Console, from Webpack, from NPM and from VSCode extentions really can reduce the amount of time we spend fixing bugs… by a lot.

Try to fix one warning per day. It will make you a happier developer.

### Using eslint-disable
**Very Bad**
```javascript
// es-lint disable
const someDodgyCode = expressionThatTriggeredAnEslintWarning()
```

**Ok (but very very rare)**
```javascript
return () => {
    
    // Explain: 'arguments' is a javascript keyword, eslint is wrong
    // Blame: Hamish
    // eslint-disable-next-line no-undef
    const context = this, args = arguments

    const later = () => {
```

Eslint warnings are like the warnings mentioned above, they are there for a reason. They were written by people who are top level experts in this field, they are there to help you be a better dev, and there to stop you writing buggy code.

If you use es-lint disable, you must provide:

```javascript
    // Explain: reason for using, why you think eslint is wrong
    // Blame: Your Name Here
```

I’ve only ever found two or three places where eslint disable was the right thing to do. It's rare.

Instead of using disable - google the problem, then fix your code. If you can’t fix it so the warning goes away, contact one of the more senior guys, then work it out together.

If you think the eslint configuartion is wrong, talk to your team lead and change the configuration to reflect your reasoning.
 
### Use $forceUpdate

For reference on why (it's an okay exaplantion) and this does a pretty good job of explaining

In general, 99% of the time, you can achieve the same results using :key and $set, and sometimes $nextTick.

There is almost never a reason to reload an entire component tree.

If you find your self in a position in which you realy want to use it, contact me or one of the senior guys to work out a way to get around the problem. $forceUpdate can easily trigger a full page reload, which is super bad for user experience, and makes a Single Page Application behave the same way a standard HTML SSR app would behave. Not good - and can always be fixed using other Vue API methods.

### Include Magic Numbers and String Literals

**Bad**
```javascript
const foo = 300000
this.bar = 'some awesome string'
```
**Good**

```javascript
import { AWESOME_CONST } from '../constants/time.js'

const FIVE_MINUTES = 1 * 1000 * 60 * 60 // Five minutes in miliseconds
this.bar = AWESOME_CONST
```
Pretty simple: There shouldn’t be any numbers floating around the code base, declare a variable with a descriptive name and explanatory comment, same for strings, literals can’t be internationalised at a later date and magic numbers are hard to understand if you did not write them.

### Using unnecessary `<template>` blocks

**Bad**
```html
<template v-if="someThing">
  <template v-if="someOtherThing && anotherThing || somethingElse">
    <div>
      // some content here
    </div>
  </template>
<template>
```

Templates are invisible elements provided by VueJs to allow for grouping elements together. You dont need a template to use v-if or v-show. You can use v-if and v-show on any element!  

**Also Bad**
```html
<template v-if="something">
  <cool-component
    v-for="(datas, index) in arrayOfData"
    :key="index"
  ></cool-component>
</template>
```
Using a template because you can’t use v-if and v-for on the same element. Much easier to use a computed property and Array.filter() or Object.keys()

```html
<cool-component
  v-for="(datas, index) in filteredArrayOfData"
  :key="index"
></cool-component>
```
```javascript
computed: {
  filteredArrayOfData() {
    return arrayOfData.filter(value => {
      return value !== something
    })
  }
}
```
It will perform faster, it's easier to read and you are using the Vue API correctly.

There is really only one place where you should be using a `<template>` when you want to group a number of elements together for conditional visibility.

```html
<template v-if="something">
  <div>{{ someOtherData }}</div>
  <cooler-component></cooler-component>
  <span>{{ fooBar }}
</template>
```

#### Use `!important` when we don’t need to

Anytime you find you self using !important you are probably in the wrong. When you find your self in a position in which you feel like you have to use the !important rule, it is generally because the structure of the CSS/SCSS files in your code base is incorrect. The biggest thing to remember is that CSS built as a hieracy, the reason you have to use !important is either because someone else used it before you (which leads to a never ending battle in CSS of over ridding rules using !important) or, because third party vendor CSS files have been included too far down in the CSS hieracy.

I admit that some times you will have to use !important - but - before you use it, take a moment and ask your self why you are having to use it.

It's much better to fix the problem than avoid it. If you look at the CSS rules in the browser developer console, can you see if you’re over ridding a rule from a Vendor css file, or a rule that we wrote. If it’s a Vendor rule, then look at where it's being imported, is it in main.js? If it is, is it imported before,  or after the file you are currently working on? 

If you can’t work out why your having to use !important get in touch with Hamish and get some help, it's usually pretty easy to fix.


### Using a library when you could just write the code yourself

Currently, one of our biggest problems I see is bundle size. I've seen codebases downloading 10 MB of assets on load, which is slow to begin with, but those assets still need to be parsed and read into memory by the browser. This makes apps feel slow and that means users are less likely to use your product.

The main cause of our bundle size problems is too many libraries. This is very important, we need to stop using additional libraries to solve problems we could easily solve by writing code. After all, we are developers to right?

In some cases, a library is the right option, but in a lot of cases it isn’t. I've seen some hilarious examples of this, and have started to write a post on this specifically, enough said for now.

### Using `eval()`

Read the MDN docs, they have a good entry on this. Basically, it's a well known security risk, and should never really need to be used. You can just about always replace `eval()` with `window.Function()`.

### Forgetting to commit the package-lock.json

Always commit the package-lock.json. It's how we ensure that everyone on the team is running the same versions of packages in their node_modules folder. Basically, the package-lock.json builds a list of the dependencies of the packages in your package.json, in our code bases it can be thousands of packages. If one team member is running v0.12 and another team member is running v1.01 it can lead to some one saying…

How come your local works and mine doesn’t?

These problems can be really hard to debug, and it's easy to prevent!