# HTZ-sassBP
A sass boilerplate for the Haaretz Group websites

## Installation
### Install dependancies
Using the boilerplate requires having the following installed:
- Ruby [windows](http://rubyinstaller.org/downloads), linux (link required)
- [SASS](http://sass-lang.com/) (Install using Ruby Gem)
- [Node.js](https://nodejs.org) or [io.js](https://iojs.org)

### Install boilerplate
`cd` into your project's front-end root directory and run:  
`npm install --save htz-sassbp`  

This will download the boilerplate files into the `node_modules` directory and note them as `dependencies` in the project's `package.json`.  
**Please make sure the the `node_modules` directory is not version controlled (i.e. _ignored_)**

You can now `@import` the boilerplate files to your project's `sass` files using a relative path (most likely `../node_modules/styles/htz-sassbp`.

## Updating to a newer version
To update the boilerplate with recent changes, first note the current version installed in the project:

```bash
cd <project-dir>
npm list htz-sassbp
```

Then, go to (https://github.com/Haaretz/htz-sassbp/releases) and check if there are any breaking chenges between the currently installed version and latest. If there are, and they are relevant to your project, implement them in you project when upgrading.  
When you are ready to upgrade, `npm install htz-sassbp@* --save` in your project's root. **Don't forget to commit `package.json` and notify everyone else of the changes.**

## Documentation
See documentation at [here](http://www.haaretz.co.il/st/inter/hass-docs/sass/)
