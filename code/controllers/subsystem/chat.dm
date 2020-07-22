SUBSYSTEM_DEF(chat)
	name = "Chat"
	flags = SS_TICKER
	wait = 1
	priority = FIRE_PRIORITY_CHAT
	init_order = INIT_ORDER_CHAT

	var/list/payload = list()

/datum/controller/subsystem/chat/fire()
	for(var/key in payload)
		var/client/client = key
		if(client)
			var/messages = payload[client]
			for(var/message in messages)
				send(client, message)
		payload -= key
		if(MC_TICK_CHECK)
			return

/datum/controller/subsystem/chat/proc/queue(client/client, message)
	LAZYADD(payload[client], list(message))

/datum/controller/subsystem/chat/proc/send(client/client, message)
	if(!client)
		return
	// Old style output window.
	SEND_TEXT(client, message["text"])
	if(!client.tgui_panel)
		return
	// New style output window
	client.tgui_panel.window.send_message("chat/message", message)

// /datum/controller/subsystem/chat/proc/queue(target, message, handle_whitespace = TRUE, trailing_newline = TRUE, confidential = TRUE)
// 	if(!target || !message)
// 		return
// 	if(!istext(message))
// 		stack_trace("to_chat called with invalid input type")
// 		return
// 	if(target == world)
// 		target = GLOB.clients
// 	//Some macros remain in the string even after parsing and fuck up the eventual output
// 	var/original_message = message
// 	message = replacetext(message, "\improper", "")
// 	message = replacetext(message, "\proper", "")
// 	if(handle_whitespace)
// 		message = replacetext(message, "\n", "<br>")
// 		message = replacetext(message, "\t", "[FOURSPACES][FOURSPACES]")
// 	if (trailing_newline)
// 		message += "<br>"
// 	//url_encode it TWICE, this way any UTF-8 characters are able to be decoded by the Javascript.
// 	//Do the double-encoding here to save nanoseconds
// 	var/twiceEncoded = url_encode(url_encode(message))
// 	if(islist(target))
// 		for(var/I in target)
// 			var/client/C = CLIENT_FROM_VAR(I) //Grab us a client if possible
// 			if(!C)
// 				continue
// 			//Send it to the old style output window.
// 			SEND_TEXT(C, original_message)
// 			if(!C?.chatOutput || C.chatOutput.broken) //A player who hasn't updated his skin file.
// 				continue
// 			if(!C.chatOutput.loaded) //Client still loading, put their messages in a queue
// 				C.chatOutput.messageQueue += message
// 				continue
// 			payload[C] += twiceEncoded
// 	else
// 		var/client/C = CLIENT_FROM_VAR(target) //Grab us a client if possible
// 		if(!C)
// 			return
// 		//Send it to the old style output window.
// 		SEND_TEXT(C, original_message)
// 		if(!C?.chatOutput || C.chatOutput.broken) //A player who hasn't updated his skin file.
// 			return
// 		if(!C.chatOutput.loaded) //Client still loading, put their messages in a queue
// 			C.chatOutput.messageQueue += message
// 			return
// 		payload[C] += twiceEncoded
