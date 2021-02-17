module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("ANIME WITH ANISH710", { // Change your bot's status here
    type: "STREAMING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
