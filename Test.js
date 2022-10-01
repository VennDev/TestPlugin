let PLUGIN_NAME = "Test";   
let PLUGIN_DESCRIPTION = "First plugin for VennV"; 
let VERSION = [1, 0, 0];
let AUTHOR = "VennV";   

if (!ll.requireVersion(2, 1, 4))
{
    throw new Error("This plugin requires VennV version 2.1.4 or higher");
}
else
{
    onEnable();
    ll.registerPlugin(PLUGIN_NAME, PLUGIN_DESCRIPTION, VERSION, {
        "Author":AUTHOR
    });
};

function onEnable()
{
    logger.info("Plugin is enabled");
}

function getForm(player)
{

    let form = mc.newCustomForm();

    form.setTitle("This is a title");
    form.addLabel("This is an label!");

    player.sendForm(form, function(player, data){
        if (data === null)
        {
            player.sendText("You closed the form");
        }
        else
        {
            player.sendText("You submitted the form");
        }
    });
}

mc.listen("onJoin", (player) => {
    getForm(player);
    log(`${player.name} has joined the server.`);
});

let config = new JsonConfigFile(".\\plugins\\Test\\config.json");

