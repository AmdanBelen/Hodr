var http = require('http'),
    Bot = require('telegram-bot-bootstrap'),
	fs = require('fs');//,
	//botan = require('botanio')('yQgq2Rn02CkBIBf4H580BVW7UWIIx-Wj'),
    //sqlite3 = require('sqlite3').verbose(),
    //db = new sqlite3.Database('hodr');
	
	
var Hodr = new Bot('143487305:AAF4FZRlkyau2AYkuGlvE8ehORDGG7AbmZ8');
//Hodr.sendMessage("26560517","test");
//Hodr.getUpdates().then(console.log);
// ? you'll see an update message. Look for your user_id in "message.from.id"
// USER SETTINGS PART // 

//Your Data
//Wanted


// MATCHING //
function rating(target){
	while(true){
		var kb = {
			keyboard: [
			['UP','DOWN'],
			],
			one_time_keyboard: true
		};
		Hodr.sendMessage(target, "Sex + Name + Age");
		Hodr.sendMessage(target, "Bio", undefined, undefined, kb);	
	}
}