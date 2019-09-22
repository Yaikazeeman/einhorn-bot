module.exports = (client, messageAttachment) => {
    client.on('message', message => {
        if (message.content == 'chocolate') {
            const attachment = messageAttachment('https://i.imgflip.com/1hajft.jpg');
            message.channel.send(attachment);
        };
    })
}
