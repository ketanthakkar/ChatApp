# Chat Application

A React single page chat application (Tech Stack):
- React with TypeScript
- Redux
- Express.js with Socket.io
- styled-components (SASS)
- Jest/Enzyme

## Application features:

#### Chat Page
- [x] Message Send 
- [x] Display Username(If not current User), Time, Message (Floating Left and Right)
- [x] Chat Tab blink util they doesn't read message
- [x] Smiley Support (No selection but, send as text and display as smiley)

#### Setting Page
- [x] Username
- [x] Theme (Light and Dark)
- [x] Clock display (12 Hour and 24 Hour)
- [x] Send Message on CTRL + Enter
- [ ] Reset Button (Not working properly yet. Need to fix. Able to accomplish)

### Running The App locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [npm](https://www.npmjs.com/).
3. From the project folder, execute the following commands:

To run it locally, make sure to change the __host__ variable in Socket.ts (line:28) and its value to match
 your local network address - the one of the computer you are running the server app.

To install dependencies:
```shell
  npm install
```
To run the client app:

```shell
  npm start
```
To run the server app:

```shell
  npm run server
```
To run the tests:

```shell
  npm test
```
Browse to [http://localhost:8000](http://localhost:8000) and see the running app. 

To test, open it in two different browsers. (Or one of it in incognito mode). 