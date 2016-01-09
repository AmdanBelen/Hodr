var http = require('http'),
    Bot = require('telegram-bot-api'),
	fs = require('fs');//,
	//botan = require('botanio')('yQgq2Rn02CkBIBf4H580BVW7UWIIx-Wj'),
    //sqlite3 = require('sqlite3').verbose(),
    //db = new sqlite3.Database('hodr');
 
var Hodr = new telegram({
	token: '143487305:AAF4FZRlkyau2AYkuGlvE8ehORDGG7AbmZ8',
	updates: {
		enabled: true
	}
});
 
Hodr.on('message', function(message){
    console.log(message);
});


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