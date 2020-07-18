/datum/tgui_panel
	var/client/client
	var/datum/tgui_window/window

/datum/tgui_panel/New(client/client)
	src.client = client
	window = new(client, "tgui-panel")
	window.subscribe(src, .proc/on_message)

/datum/tgui_panel/Del()
	window.unsubscribe(src)
	window.close()
	return ..()

/datum/tgui_panel/proc/initialize()
	window.initialize()

/datum/tgui_panel/proc/on_message(type, list/payload)
	if(type == "ready")
		window.send_message("update", list(
			"config" = list(
				"panel" = list(),
				"window" = list(
					"fancy" = client.prefs.tgui_fancy,
					"locked" = client.prefs.tgui_lock,
				),
			),
		))
	return FALSE
