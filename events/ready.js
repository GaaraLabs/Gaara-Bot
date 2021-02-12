module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("MiCKY#4519 | @Gaara for commands", {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
