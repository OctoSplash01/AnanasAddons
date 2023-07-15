register("command", () => {
    ChatLib.say("i love ananas");
  }).setName("ananas");

register("messageSent", (message, event) => {
    if (message.toLowerCase().includes("pineapple")) {
      ChatLib.say("*ananas");
    }
  });

  /* if (issue) {
    wait for the issue to resolve itself;
  } */