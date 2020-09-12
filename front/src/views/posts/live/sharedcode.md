# One Build System - Multiple Apps - Shared Components
## How to achieve this and how to maintain developer experience while doing so.
_Last updated September 12, 2020_

>Written with specific references to VueCli v3, but I think a good portion of whats contained within should be applicable across most FE codebases.

### The What And The Why

While working on WelcomeQr I was in a position where it made sense to create a seperate app for serving published content at a user's subdomain. So, I started by making a new app scafolled using VueCli in the root on my current mono repo for the project. Prior to the subdoms app, the repo contained a frontend application and an ExpressJs server for endpoints, database and serving static content (static could possibly have been done faster at the Nginx level, but that's another story, and I'm happy with the current set up). So now I have two seperate Frontend apps, two build systems, two lint configs and I haven't even started writing code yet. Pretty early on in writing the new app I start using components from the main app, at this stage by just copying them into the new directory.

So, that is also the _why_. I wanted to manage all my frontend code using one build and lint setup (I'm using typescript so linting etc is a little more complex, and therefore makes using one config all the more important.)

### Things I Tried On The Road To Completetion

I generally start things in a naieve manner, that's by no means a negative, but I find when I'm attempting something that is new to me making a branch and trying to go directly from A to B has been useful and effective. Sometimes it works first time, other times not so much, this was the latter.

First thing I tried to do was simply make a shared folder at the root of repo and move all the shared code into it, then change the paths in both apps that referenced anything shared. Guess the problem? No linting or typechecking. Ok, so no problems, I'll move the tsconfig file into the root of the project, but then of course I'll need to install some tooling. It's quickly becoming obvious that this isn't going to be a quick fix.

The next thing I tried doing was using two distinct `vue.config.[app-name].js` files, and the Vue env variable: `VUE_CLI_SERVICE_CONFIG_PATH`. I found a couple of references to it from the author of [this](https://serebrov.github.io/html/2020-05-03-vue-cli-multiple-configs.html) post, who found it buried in the Vue source code, it's not documented, but I looked at the source and it seemed legit - Famous last words right?

I did actually think that this would be a winner for a while, but got backed into a corner by realtive paths and needing to have two very different `index.html` files for each app. The code below is the first attempt at splitting the `vue.config.js` files, taken from the `package.json` scripts section.
```javascript
  "scripts": {

    "serve:main": "env VUE_CLI_SERVICE_CONFIG_PATH=\"$PWD/vue.config.main.js\" vue-cli-service serve --port 8080 main-app/src/main.ts --fix --skip-plugin @vue/cli-plugin-pwa,pwa --dest main-app/dist",
    "build:main": "env VUE_CLI_SERVICE_CONFIG_PATH=\"$PWD/vue.config.main.js\" vue-cli-service build --dest main-app/dist main-app/src/main.ts",

    "serve:subdoms": "env VUE_CLI_SERVICE_CONFIG_PATH=\"$PWD/vue.config.subdoms.js\" vue-cli-service serve --port 7070 subdoms-app/src/main.ts",
    "build:subdoms": "env VUE_CLI_SERVICE_CONFIG_PATH=\"$PWD/vue.config.subdoms.js\" vue-cli-service build --dest subdoms-app/dist subdoms-app/src/main.ts --fix --skip-plugin @vue/cli-plugin-pwa,pwa"

  },
```

It _does work_ but it produced some strange results, and I think I found a better solution whihc stayed closer to the documented way of doing things.

### VueCli Limitations

> Disclaimer: I'm really liking VueCli, this is by no means a critique, but like any abstraction designed to make life easier, there is a point where if your use-case becomes sufficently different from the norm the abstraction can actually become a hinderance, I'm getting pretty close to that point, but believe that this item of work should add enough future proofing so that I don't ever hit the tipping point in this project.

Because I have enough experience writing webpack configs to have been able to achieve what I wanted by rewritting from scratch, I did come very close to removing it VueCli altogether, in the end I stayed with it, reasons to follow.

The biggest issue was the inability to configure the `/public` folder, but I got around that using some hackery, and am happy with the results. 

### The Solution

### `vue.config.js`
```javascript
const path = require('path')

const isMainApp = process.env.APP_TYPE === 'main-app'
const appDir = isMainApp ? 'main-app' : 'subdoms-app'

module.exports = {
    outputDir: path.resolve(__dirname, `${appDir}/dist`),
    chainWebpack: config => {

        // I've ommited all the non-relevant config stuff

        config.resolve.alias.set('@I', path.resolve(__dirname, '../interfaces'))
        config.resolve.alias.set('@shared', path.resolve(__dirname, './shared'))

        config.plugin("html").tap(args => {
            args[0].template = path.resolve(__dirname, `${appDir}/index.html`)
            return args
        })

    },
    devServer: {
        port: isMainApp ? 8080 : 7070
    },
}
```

### `package.json`
```javascript
{
  "name": "example config",
  "version": "0.1.0",
  "scripts": {

    "serve:main": "env APP_TYPE=\"main-app\" vue-cli-service serve main-app/src/main.ts",
    "build:main": "env APP_TYPE=\"main-app\" vue-cli-service build main-app/src/main.ts",

    "serve:subdoms": "env APP_TYPE=\"subdoms-app\" vue-cli-service serve subdoms-app/src/main.ts",
    "build:subdoms": "env APP_TYPE=\"subdoms-app\" vue-cli-service build subdoms-app/src/main.ts"

  },
  "dependencies": {
      // deps...
  }
}
```

### Folder Structure
```
/
    .git
    .gitignore
    rundev.sh
    deploy.sh
    /front
        /main-app
            /dist
            /src
            index.html
        /subdoms-app
            /dist
            /src
            index.html
        /public
            /images
                logo.png
                ...
            /icons
                check.svg
                ...
        /shared
            /components
                component.vue
                ...
            /api
                auth.ts
                api.ts
            /utils
                seo.ts
        jsconfig.ts
        eslint.js
        package.json
        vue.config.js
    /server
        ...
    /scripts
        bleh.sh
        ....
```

### The Result

One build system, one tsconfig and linting set up, shared code and as many apps as you want all of them able to be run concurrently.

### The Drawbacks

One `package.json`, although this won't affect bundle size, it could be argued that it will become noisy over time. It's an acceptable issue for me.

> Hope you enjoyed reading and found some of this useful.