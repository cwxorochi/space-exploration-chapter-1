# Naluri Space Exploration - Chapter 1 

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Project Local Setup Guide

#⚠️ Is recommended to setup backend first due to Step 3 needed the url

Pre-requisite for MacOs
> node - https://formulae.brew.sh/formula/node
> yarn - https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable
> nvm - https://formulae.brew.sh/formula/nvm


#### Steps
1. Pull from the git.
2. ```cd``` to the root directory
3. Create .env at root directory and insert the key as below
    BACKEND_API_URL=http://space-exploration-chapter-1-console.test
4. At terminal, execute ```yarn```
5. Again at terminal, execute ```yarn dev```
6. Open the link shown on the terminal. And you are good to go.

![Preview of the app](https://res.cloudinary.com/kurtcloudspace/image/upload/v1660491540/space-preview-2_ro11ec.gif)

## Application flow
In nuxtjs, first we view the ```pages``` as independent route itself, meaning ```pages/index.vue``` is actually home page (```/```) of the application, ```pages/help.vue``` is the url of ```/help``` itself.

At folder ```layouts/default.vue```, defines the layout to use throughout the pages, in layout file, ```<nuxt/>``` tag will render the vue file from ```pages```.

To make it scalable and reusable, base components are produced in ```components/base``` file. One is ```BaseButton``` which has pre-designed styling which can be reused. Second is ```CircleLoader``` for loading animation preview.

This application used ```@nuxtjs/axios``` as a client to communicate with backend endpoint. Information is stored at vue store management (```vuex```)