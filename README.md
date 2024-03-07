View the project - https://mushokutensei.vercel.app/
Screenshot of the game - https://mushokutensei.vercel.app/assets/screenshots/Screen1.png

### About the project

https://youtu.be/O7-yUV-xWgs video demonstration of the project

This is a full-fledged MMORPG in which you can do quests, level up, compete with other players (player ratings), chat, navigate locations, communicate with NPMs, fight with 5 types of attacks, heal, listen to music, localized into 2 languages.

### Back end

This repository is the front version of the MMORPG, requests to the server are made at https://mushokutensei-api.vercel.app, when developing locally, you need to change it to the localhost on which the backend is running. The backend is in the react-mmorpg-backend repository; by default, localhost:5000 is launched there.

### .env

`REACT_APP_STATUS` - PROD/DEV depending on whether it’s on dev or prod

`REACT_APP_REST_API` - URL where the frontend will make requests to the backend, prod: https://mushokutensei-api.vercel.app, dev: http://localhost:5000

### Node version

The project is made on nodejs v18.18.2, npm v10.2.0, any current version will do

### Project information

1) Modular architecture of frontend applications
2) Modules are located in src/modules
3) Made UI kit in src/kit
4) To store data, use: Redux (src/store)

### Available scripts

`yarn install` - install dependencies

`yarn start` - run development server with hot reload mode

`yarn build` - build distributor package

### Stack

JavaScript, TypeScript, React, Redux, Saas, HTML5
