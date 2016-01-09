var http = require('http'),
    Bot = require('telegram-bot-api'),
	fs = require('fs'),
	jQuery = require('jQuery'),
	//botan = require('botanio')('yQgq2Rn02CkBIBf4H580BVW7UWIIx-Wj'),
	MongoClient = require('mongodb').MongoClient,
    format = require('util').format;
 

var Hodr = new Bot({
	token: '143487305:AAF4FZRlkyau2AYkuGlvE8ehORDGG7AbmZ8',
	updates: {
		enabled: true
	}
});
	
//------------------------------------//
//FUNCTIONS//
function Handler(data){
	if(data.text[0]=="/"){//if its a command
		Cmd_Handler(data);
	}else{
		Input_Handler(data);
	}
}
function Cmd_Handler(data){

}
 
Hodr.on('message', function(message){
	console.log("@"+message.from.username+"("+message.from.id+")"+": "+message.text);
	if(message.chat.type=="private") {
		var tiny_message = {"id":message.from.id,
							"username":message.from.username,
							"first_name":message.from.first_name,
							"text":message.text,
							"date":message.date
							};
		Hanlder(tiny_message);
	}
});

// USER SETTINGS PART // 
function Update_User(usrId){
	//Your Data
	//Hodr.message
	
	//Wanted
	
}



// MATCHING //
/*
function rating(target){
	while(true){
		var kb = {
			keyboard: [
			['UP','DOWN'],
			],
			one_time_keyboard: true
		};
		//Hodr.sendMessage(target, "Sex + Name + Age");
		//Hodr.sendMessage(target, "Bio", undefined, undefined, kb);	
	}
}
*/