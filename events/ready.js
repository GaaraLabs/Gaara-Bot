module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("m! help | for commands", { // Change your bot's status here
    type: "LISTENING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
