/client/var/datum/tgui_panel/tgui_panel

/proc/tgui_panel_setup(user_or_client)
	var/client/client
	if(istype(user_or_client, /client))
		client = user_or_client
	if(istype(user_or_client, /mob))
		var/mob/user = user_or_client
		client = user.client
	client.tgui_panel = new(client)
	client.tgui_panel.initialize()
