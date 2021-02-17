## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [FFMPEG](https://www.ffmpeg.org/)

## Getting started

Make sure you have installed all required packages in your pc or virtual machine.

### Installation

```bash
# Clone the repository
git clone https://github.com/micky0singh/Gaara-Bot.git

# Enter into the directory.
cd Gaara-Bot/

# Install the dependencies
npm install
```

### Starting the application

```bash
# Run the bot
node index.js
```

### Configuration

- After cloning the project and installing all dependencies, you need to add your bot token and prefix in `.env` file.
- For some privacy reasons `help` file has been removed from bot but you can find it [Here](../Secrets/help.js) 
- In `help.js` edit line 23 and add footer of your choice.

```js
// Add your footer
.setFooter(`FOOTER OF YOUR HELP COMMAND HERE`)
```

### Changing bot status

- To Change your bot's status you need edit `ready.js` file which you can find [Here](../events/ready.js)
- In `ready.js` edit line xyz to change your bot's status and line xyz to change your bot's presence.

```js
// Change bot's status
  await client.user.setActivity("YOUR BOTS'S STATUS HERE", {

// Change bot's presence | Can be LISTENING, WATCHING, PLAYING, STREAMING
    type: "YOUR PRESENCE, SELECT ONE FROM ABOVE LINE",
```

##

Now you are all done to use your bot. If you face any bug or want to report contact me on Discord `MiCKY#4519` or email me at sahnisatinder2@gmail.com 🙃
