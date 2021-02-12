module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Music", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
