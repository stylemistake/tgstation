/**
 * Copyright (c) 2020 Aleksej Komarov
 * SPDX-License-Identifier: MIT
 */

/datum/tgui_panel/var/list/verbs_to_add = list()
/datum/tgui_panel/var/list/verbs_to_remove = list()

/datum/tgui_panel/proc/send_all_verbs()
	var/list/verbs_to_send = list()
	for (var/verb in client.verbs)
		if(!verb || !verb:name)
			continue
		var/verb_to_send = list()
		verb_to_send["name"] = "[verb:name]"
		if (verb:category)
			verb_to_send["category"] = "[verb:category]"
		if (verb:hidden)
			verb_to_send["hidden"] = "[verb:hidden]"
	window.send_message("commands/addVerbs", verbs_to_send)

/datum/tgui_panel/proc/add_verb(verb)
	if(!verb || !verb:name)
		return
	var/verb_to_send = list()
	verb_to_send["name"] = "[verb:name]"
	if (verb:category)
		verb_to_send["category"] = "[verb:category]"
	if (verb:hidden)
		verb_to_send["hidden"] = "[verb:hidden]"
	verbs_to_add += list(verb_to_send)

/datum/tgui_panel/proc/remove_verb(verb)
	if(!verb || !verb:name)
		return
	var/verb_to_send = list()
	verb_to_send["name"] = "[verb:name]"
	verbs_to_remove += list(verb_to_send)

/datum/tgui_panel/proc/flush_verbs()
	if(length(verbs_to_add) > 0)
		window.send_message("commands/addVerbs", verbs_to_add)
		verbs_to_add.Cut()
	if(length(verbs_to_remove) > 0)
		window.send_message("commands/removeVerbs", verbs_to_remove)
		verbs_to_remove.Cut()
