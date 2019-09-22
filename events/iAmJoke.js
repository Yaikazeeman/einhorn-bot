module.exports = (client) => {
    client.on('message', message => {
        let text = message.content;
        let name = text.substring(text.indexOf("I'm") + 3, text.indexOf('.') || text.indexOf(',') || text.indexOf('!') || text.length); 
        if (text.includes("I'm")) { 
           message.channel.send(`Hello ${name}, my name is Einhorn`);
        }
    });
}