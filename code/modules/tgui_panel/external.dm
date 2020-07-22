/client/var/datum/tgui_panel/tgui_panel

/proc/tgui_panel_setup(client/client)
	client.tgui_panel = new(client)
	client.tgui_panel.initialize()

/**
 * global
 *
 * Circumvents the message queue and sends the message
 * to the recipient (target) as soon as possible.
 */
/proc/to_chat_immediate(
		target,
		message,
		handle_whitespace = TRUE,
		trailing_newline = TRUE,
		confidential = FALSE)
	if(!target || !message)
		return
	if(target == world)
		target = GLOB.clients
	if(islist(target))
		for(var/_target in target)
			SSchat.send(CLIENT_FROM_VAR(_target), list(
				"text" = message,
				"flags" = list(
					handle_whitespace,
					trailing_newline,
					confidential,
				),
			))
		return
	SSchat.send(CLIENT_FROM_VAR(target), list(
		"text" = message,
		"flags" = list(
			handle_whitespace,
			trailing_newline,
			confidential,
		),
	))

/**
 * global
 *
 * Sends the message to the recipient (target).
 */
/proc/to_chat(
		target,
		message,
		handle_whitespace = TRUE,
		trailing_newline = TRUE,
		confidential = FALSE)
	if(Master.current_runlevel == RUNLEVEL_INIT || !SSchat?.initialized)
		to_chat_immediate(
			target,
			message,
			handle_whitespace,
			trailing_newline,
			confidential)
		return
	if(!target || !message)
		return
	if(target == world)
		target = GLOB.clients
	if(islist(target))
		for(var/_target in target)
			SSchat.queue(CLIENT_FROM_VAR(_target), list(
				"text" = message,
				"flags" = list(
					handle_whitespace,
					trailing_newline,
					confidential,
				),
			))
		return
	SSchat.queue(CLIENT_FROM_VAR(target), list(
		"text" = message,
		"flags" = list(
			handle_whitespace,
			trailing_newline,
			confidential,
		),
	))
