!function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={2:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([625,0]),n()}({136:function(e,t,n){"use strict";t.__esModule=!0,t.SettingsPanel=t.settingsReducer=t.settingsMiddleware=t.useSettings=void 0;var r=n(633);t.useSettings=r.useSettings;var o=n(634);t.settingsMiddleware=o.settingsMiddleware;var i=n(635);t.settingsReducer=i.settingsReducer;var a=n(636);t.SettingsPanel=a.SettingsPanel},137:function(e,t,n){"use strict";t.__esModule=!0,t.loadSettings=t.updateSettings=void 0;t.updateSettings=function(e){return void 0===e&&(e={}),{type:"settings/update",payload:e}};t.loadSettings=function(e){return void 0===e&&(e={}),{type:"settings/load",payload:e}}},138:function(e,t,n){"use strict";t.__esModule=!0,t.selectSettings=void 0;t.selectSettings=function(e){return null==e?void 0:e.settings}},139:function(e,t,n){"use strict";t.__esModule=!0,t.canPageAcceptType=t.selectChatPageById=t.selectCurrentChatPage=t.selectChatPages=void 0;var r=n(14);t.selectChatPages=function(e){return(0,r.toArray)(e.chat.pageById)};t.selectCurrentChatPage=function(e){return e.chat.pageById[e.chat.currentPage]};t.selectChatPageById=function(e){return function(t){return t.chat.pageById[e]}};t.canPageAcceptType=function(e,t){return e.acceptedTypes[t]}},399:function(e,t,n){"use strict";t.__esModule=!0,t.audioReducer=t.NowPlayingWidget=t.audioMiddleware=t.useAudio=void 0;var r=n(629);t.useAudio=r.useAudio;var o=n(630);t.audioMiddleware=o.audioMiddleware;var i=n(632);t.NowPlayingWidget=i.NowPlayingWidget;var a=n(637);t.audioReducer=a.audioReducer},400:function(e,t,n){"use strict";t.__esModule=!0,t.selectAudio=void 0;t.selectAudio=function(e){return e.audio}},401:function(e,t,n){"use strict";t.__esModule=!0,t.chatReducer=t.chatMiddleware=t.ChatTabs=t.ChatPanel=void 0;var r=n(638);t.ChatPanel=r.ChatPanel;var o=n(641);t.ChatTabs=o.ChatTabs;var i=n(642);t.chatMiddleware=i.chatMiddleware;var a=n(643);t.chatReducer=a.chatReducer},402:function(e,t,n){"use strict";t.__esModule=!0,t.chatRenderer=void 0;var r=n(6),o=n(639),i=n(23),a=n(403),s=n(139);function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=(0,i.createLogger)("chatRenderer"),d=function(){function e(){var e=this;this.rootNode=null,this.queue=[],this.messages=[],this.visibleMessages=[],this.page=a.DEFAULT_PAGE,this.events=new o.EventEmitter,this.subscribers={batchProcessed:[],scrollTrackingChanged:[]},this.scrollNode=null,this.scrollTracking=!0,this.handleScroll=function(){var t=e.scrollNode.scrollHeight,n=e.scrollNode.scrollTop+e.scrollNode.offsetHeight,r=Math.abs(t-n)<32;r!==e.scrollTracking&&(e.scrollTracking=r,e.events.emit("scrollTrackingChanged",r),u.debug("tracking",e.scrollTracking))}}var t=e.prototype;return t.mount=function(e){this.rootNode?e.appendChild(this.rootNode):this.rootNode=e,this.scrollNode=function(e){for(var t=document.body,n=e;n&&n!==t;){if(n.scrollWidth<n.offsetWidth)return n;n=n.parentElement}return window}(this.rootNode),this.scrollNode.addEventListener("scroll",this.handleScroll),this.scrollToBottom(),this.queue.length>0&&(this.queue=[],this.processBatch(this.queue))},t.assignStyle=function(e){void 0===e&&(e={}),Object.assign(this.rootNode.style,e)},t.scrollToBottom=function(){this.scrollNode.scrollTop=this.scrollNode.scrollHeight},t.changePage=function(e){this.page=e,this.rootNode.textContent="",this.visibleMessages=[];for(var t,n,r=document.createDocumentFragment(),o=c(this.messages);!(n=o()).done;){var i=n.value;(0,s.canPageAcceptType)(e,i.type)&&(t=i.node,r.appendChild(t),this.visibleMessages.push(i))}t&&(this.rootNode.appendChild(r),t.scrollIntoView())},t.getCombinableMessage=function(e){for(var t=Date.now(),n=this.visibleMessages.length,r=n-1,o=Math.max(0,n-3),i=r;i>=o;i--){var a=this.visibleMessages[i];if(a.text===e.text&&t<a.createdAt+5e3)return a}return null},t.processBatch=function(e){if(this.rootNode){for(var t,n,o=document.createDocumentFragment(),i={},l=c(e);!(n=l()).done;){var u=n.value,d=Object.assign({},u),p=this.getCombinableMessage(d);if(!p||"continue"!==function(){var e=p.node;p.times=(p.times||1)+1;var t=e.querySelector(".Chat__badge"),n=t||document.createElement("div");return n.textContent=p.times,n.className=(0,r.classes)(["Chat__badge","Chat__badge--animate"]),requestAnimationFrame((function(){n.className="Chat__badge"})),t||e.appendChild(n),"continue"}()){if((t=document.createElement("div")).innerHTML=d.text,d.node=t,d.createdAt=Date.now(),!d.type){var g=a.MESSAGE_TYPES.find((function(e){return e.selector&&t.querySelector(e.selector)}));d.type=(null==g?void 0:g.type)||"unknown"}i[d.type]||(i[d.type]=0),i[d.type]+=1,this.messages.push(d),(0,s.canPageAcceptType)(this.page,d.type)&&(o.appendChild(t),this.visibleMessages.push(d))}}t&&(this.rootNode.appendChild(o),this.scrollTracking&&this.scrollToBottom()),this.events.emit("batchProcessed",i)}else for(var h,f=c(e);!(h=f()).done;){var m=h.value;this.queue.push(m)}},e}();window.__chatRenderer__||(window.__chatRenderer__=new d);var p=window.__chatRenderer__;t.chatRenderer=p},403:function(e,t,n){"use strict";t.__esModule=!0,t.DEFAULT_PAGE=t.MESSAGE_TYPES=void 0;var r=n(640);function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=[{type:"localchat",name:"Local Chat",description:"In-character local messages (say, emote, etc)",selector:".filter_say, .say, .emote",important:!1},{type:"radio",name:"Radio Comms",description:"All departments of radio messages",selector:".filter_radio, .alert, .syndradio, .centradio, .airadio, .entradio, .comradio, .secradio, .engradio, .medradio, .sciradio, .supradio, .srvradio, .expradio, .radio, .deptradio, .newscaster",important:!1},{type:"info",name:"Informational",description:"Non-urgent messages from the game and items",selector:".filter_notice, .notice:not(.pm), .adminnotice, .info, .sinister, .cult",important:!1},{type:"warnings",name:"Warnings",description:"Urgent messages from the game and items",selector:".filter_warning, .warning:not(.pm), .critical, .userdanger, .italics",important:!1},{type:"deadchat",name:"Deadchat",description:"All of deadchat",selector:".filter_deadsay, .deadsay",important:!1},{type:"globalooc",name:"Global OOC",description:"The bluewall of global OOC messages",selector:".filter_ooc, .ooc:not(.looc)",important:!1},{type:"adminpm",name:"Admin PMs",description:"Messages to/from admins (adminhelp)",selector:".filter_pm, .pm",important:!1},{type:"adminchat",name:"Admin Chat",description:"ASAY messages",selector:".filter_ASAY, .admin_channel",important:!1,admin:!0},{type:"modchat",name:"Mod Chat",description:"MSAY messages",selector:".filter_MSAY, .mod_channel",important:!1,admin:!0},{type:"eventchat",name:"Event Chat",description:"ESAY messages",selector:".filter_ESAY, .event_channel",important:!1,admin:!0},{type:"combat",name:"Combat Logs",description:"Urist McTraitor has stabbed you with a knife!",selector:".filter_combat, .danger",important:!1},{type:"adminlogs",name:"Admin Logs",description:"ADMIN LOG: Urist McAdmin has jumped to coordinates X, Y, Z",selector:".filter_adminlogs, .log_message",important:!1,admin:!0},{type:"attacklogs",name:"Attack Logs",description:"Urist McTraitor has shot John Doe",selector:".filter_attacklogs",important:!1,admin:!0},{type:"debuglogs",name:"Debug Logs",description:"DEBUG: SSPlanets subsystem Recover().",selector:".filter_debuglogs",important:!1,admin:!0},{type:"looc",name:"Local OOC",description:"Local OOC messages, always enabled",selector:".ooc.looc, .ooc, .looc",important:!0},{type:"system",name:"System Messages",description:"Messages from your client, always enabled",selector:".boldannounce, .filter_system",important:!0},{type:"unknown",name:"Unsorted Messages",description:"Everything we could not sort, always enabled",important:!0}];t.MESSAGE_TYPES=a;var s={id:(0,r.createUuid)(),name:"Chat",acceptedTypes:function(){for(var e,t={},n=o(a);!(e=n()).done;){t[e.value.type]=!0}return t}(),count:0};t.DEFAULT_PAGE=s},404:function(e,t,n){"use strict";t.__esModule=!0,t.updateMessageCount=t.changeChatPage=void 0;t.changeChatPage=function(e){return{type:"chat/changePage",payload:{page:e}}};t.updateMessageCount=function(e){return{type:"chat/updateMessageCount",payload:{countByType:e}}}},405:function(e,t,n){"use strict";t.__esModule=!0,t.PingIndicator=t.pingMiddleware=t.pingReducer=t.selectPing=void 0;var r=n(0),o=n(644),i=n(13),a=n(1),s=n(2),c=n(23),l=n(45),u=function(e){return(null==e?void 0:e.ping)||{}};t.selectPing=u;t.pingReducer=function(e,t){void 0===e&&(e={});var n=t.type,r=t.payload;if("ping/success"===n){var o=r.roundtrip,a=e.roundtripAvg||o,s=Math.round(.4*a+.6*o);return{roundtrip:o,roundtripAvg:s,failCount:0,networkQuality:1-(0,i.scale)(s,40,120)}}if("ping/fail"===n){var c=e.failCount,l=void 0===c?0:c,u=(0,i.clamp01)(e.networkQuality-l/3),d=Object.assign({},e,{failCount:l+1,networkQuality:u});return l>3&&(d.roundtrip=undefined,d.roundtripAvg=undefined),d}return e};t.pingMiddleware=function(e){var t=!1,n=0,r=[],o=function(){for(var t=0;t<8;t++){var o=r[t];o&&Date.now()-o.sentAt>2e3&&(r[t]=null,e.dispatch({type:"ping/fail"}))}var i={index:n,sentAt:Date.now()};r[n]=i,(0,a.sendMessage)({type:"ping",payload:{index:n}}),n=(n+1)%8};return function(e){return function(n){var i=n.type,a=n.payload;if(t||(t=!0,setInterval(o,2500),o()),"pingReply"===i){var s=a.index,l=r[s];return l?(r[s]=null,e(function(e){var t=.5*(Date.now()-e.sentAt);return{type:"ping/success",payload:{lastId:e.id,roundtrip:t}}}(l))):void c.logger.log("Received a timed out ping.")}return e(n)}}};t.PingIndicator=function(e,t){var n=(0,l.useSelector)(t,u);return(0,r.createComponentVNode)(2,s.Box,{textColor:o.Color.lookup(n.networkQuality,[new o.Color(219,40,40),new o.Color(251,214,8),new o.Color(32,177,66)]),children:[n.roundtripAvg||"--"," ms"]})}},625:function(e,t,n){e.exports=n(626)},626:function(e,t,n){"use strict";n(140),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(168),n(169),n(170),n(171),n(172),n(173),n(175),n(176),n(177),n(179),n(180),n(181),n(110),n(184),n(185),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(210),n(211),n(212),n(213),n(215),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(239),n(240),n(241),n(242),n(243),n(244),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(120),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(368),n(369),n(370),n(371);var r=n(0);n(372),n(373),n(374),n(375),n(376),n(377),n(627),n(628);var o=n(92),i=n(378),a=(n(127),n(23)),s=n(128),c=n(45),l=n(399),u=n(401),d=n(405),p=n(136),g=n(645);o.perf.mark("inception",window.__inception__),o.perf.mark("init");var h=(0,c.configureStore)({reducer:(0,i.combineReducers)({audio:l.audioReducer,chat:u.chatReducer,ping:d.pingReducer,settings:p.settingsReducer}),middleware:{pre:[u.chatMiddleware,d.pingMiddleware,g.telemetryMiddleware,p.settingsMiddleware,l.audioMiddleware]}}),f=(0,s.createRenderer)((function(){var e=n(646).Panel;return(0,r.createComponentVNode)(2,c.StoreProvider,{store:h,children:(0,r.createComponentVNode)(2,e)})}));a.logger.log("Hello!");!function m(){if("loading"!==document.readyState){for(h.subscribe(f),window.update=function(e){return h.dispatch(Byond.parseJson(e))};;){var e=window.__updateQueue__.shift();if(!e)break;window.update(e)}Byond.winset("output",{"is-visible":!1}),Byond.winset("browseroutput",{"is-visible":!0,"is-disabled":!1,size:"0x0"})}else document.addEventListener("DOMContentLoaded",m)}()},627:function(e,t,n){},628:function(e,t,n){},629:function(e,t,n){"use strict";t.__esModule=!0,t.useAudio=void 0;var r=n(45),o=n(400);t.useAudio=function(e){return(0,r.useSelector)(e,o.selectAudio)}},630:function(e,t,n){"use strict";t.__esModule=!0,t.audioMiddleware=void 0;var r=n(631);t.audioMiddleware=function(e){var t=!1,n=new r.AudioPlayer;return function(r){return function(o){var i=o.type,a=o.payload;if(t||(t=!0,n.onPlay((function(){e.dispatch({type:"audio/playing"})})),n.onStop((function(){e.dispatch({type:"audio/stopped"})}))),"audio/playMusic"===i){var s=a.url,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(a,["url"]);return n.play(s,c),r(o)}if("audio/stopMusic"===i)return n.stop(),r(o);if("settings/update"===i||"settings/load"===i){var l=a.adminMusicVolume;return"number"==typeof l&&n.setVolume(l),r(o)}return r(o)}}}},631:function(e,t,n){"use strict";t.__esModule=!0,t.AudioPlayer=void 0;var r=n(23);function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=function(){function e(){var e=this;Byond.IS_LTE_IE9||(this.node=document.createElement("audio"),this.node.style.setProperty("display","none"),document.body.appendChild(this.node),this.playing=!1,this.volume=1,this.options={},this.onPlaySubscribers=[],this.onStopSubscribers=[],this.node.addEventListener("canplaythrough",(function(){r.logger.log("canplaythrough"),e.playing=!0,e.node.playbackRate=e.options.pitch||1,e.node.currentTime=e.options.start||0,e.node.volume=e.volume,e.node.play();for(var t,n=o(e.onPlaySubscribers);!(t=n()).done;){(0,t.value)()}})),this.node.addEventListener("ended",(function(){r.logger.log("ended"),e.stop()})),this.node.addEventListener("error",(function(t){e.playing&&(r.logger.log("playback error",t.error),e.stop())})),this.playbackInterval=setInterval((function(){e.playing&&(e.options.end>0&&e.node.currentTime>=e.options.end&&e.stop())}),1e3))}var t=e.prototype;return t.destroy=function(){this.node&&(this.node.stop(),document.removeChild(this.node),clearInterval(this.playbackInterval))},t.play=function(e,t){void 0===t&&(t={}),this.node&&(r.logger.log("playing",e,t),this.options=t,this.node.src=e)},t.stop=function(){if(this.node){if(this.playing)for(var e,t=o(this.onStopSubscribers);!(e=t()).done;)(0,e.value)();r.logger.log("stopping"),this.playing=!1,this.node.src=""}},t.setVolume=function(e){this.node&&(this.volume=e,this.node.volume=e)},t.onPlay=function(e){this.onPlaySubscribers.push(e)},t.onStop=function(e){this.onStopSubscribers.push(e)},e}();t.AudioPlayer=a},632:function(e,t,n){"use strict";t.__esModule=!0,t.NowPlayingWidget=void 0;var r=n(0),o=n(13),i=n(2),a=n(45),s=n(136),c=n(400);t.NowPlayingWidget=function(e,t){var n,l=(0,a.useSelector)(t,c.selectAudio),u=(0,a.useDispatch)(t),d=(0,s.useSettings)(t),p=null==(n=l.meta)?void 0:n.title;return(0,r.createComponentVNode)(2,i.Flex,{mx:-.5,align:"center",children:[l.playing&&(0,r.createFragment)([(0,r.createComponentVNode)(2,i.Flex.Item,{shrink:0,mx:.5,color:"label",children:"Now playing:"}),(0,r.createComponentVNode)(2,i.Flex.Item,{mx:.5,grow:1,style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},children:p||"Unknown Track"})],4)||(0,r.createComponentVNode)(2,i.Flex.Item,{grow:1,color:"label",children:"Nothing to play."}),l.playing&&(0,r.createComponentVNode)(2,i.Flex.Item,{mx:.5,fontSize:"0.9em",children:(0,r.createComponentVNode)(2,i.Button,{tooltip:"Stop",icon:"stop",onClick:function(){return u({type:"audio/stopMusic"})}})}),(0,r.createComponentVNode)(2,i.Flex.Item,{fontSize:"0.9em",children:(0,r.createComponentVNode)(2,i.Slider,{width:"8em",minValue:0,maxValue:1,value:d.adminMusicVolume,size:.85,step:.0025,stepPixelSize:1,format:function(e){return(0,o.toFixed)(100*e)+"%"},onDrag:function(e,t){return d.update({adminMusicVolume:t})},children:"Volume"})})]})}},633:function(e,t,n){"use strict";t.__esModule=!0,t.useSettings=void 0;var r=n(45),o=n(137),i=n(138);t.useSettings=function(e){var t=(0,r.useSelector)(e,i.selectSettings),n=(0,r.useDispatch)(e);return Object.assign({},t,{update:function(e){return n((0,o.updateSettings)(e))}})}},634:function(e,t,n){"use strict";t.__esModule=!0,t.settingsMiddleware=t.sendChangeTheme=void 0;var r=n(129),o=n(1),i=n(137),a=n(138),s=function(e){return(0,o.sendMessage)({type:"changeTheme",payload:{name:e}})};t.sendChangeTheme=s;t.settingsMiddleware=function(e){var t=!1;return function(n){return function(o){var c=o.type,l=o.payload;if(t){if("settings/update"===c){var u=l.theme;return u&&s(u),n(o),void r.storage.set("panel-settings",(0,a.selectSettings)(e.getState()))}return n(o)}n(o),t=!0;var d=r.storage.get("panel-settings");if(d){var p=d.theme;p&&s(p),e.dispatch((0,i.loadSettings)(d))}}}}},635:function(e,t,n){"use strict";t.__esModule=!0,t.settingsReducer=void 0;var r={visible:!1,fontSize:9,lineHeight:1.5,theme:"dark",adminMusicVolume:1};t.settingsReducer=function(e,t){void 0===e&&(e=r);var n=t.type,o=t.payload;if("settings/update"===n)return Object.assign({},e,o);if("settings/load"===n){var i=o;return Object.assign({},e,{fontSize:i.fontSize,lineHeight:i.lineHeight,theme:i.theme,adminMusicVolume:i.adminMusicVolume})}return e}},636:function(e,t,n){"use strict";t.__esModule=!0,t.SettingsPanel=void 0;var r=n(0),o=n(13),i=n(2),a=n(45),s=n(137),c=n(138),l=["light","dark"];t.SettingsPanel=function(e,t){var n=(0,a.useSelector)(t,c.selectSettings),u=n.theme,d=n.fontSize,p=n.lineHeight,g=(n.adminMusicVolume,(0,a.useDispatch)(t));return(0,r.createComponentVNode)(2,i.Section,{children:(0,r.createComponentVNode)(2,i.LabeledList,{children:[(0,r.createComponentVNode)(2,i.LabeledList.Item,{label:"Theme",children:(0,r.createComponentVNode)(2,i.Dropdown,{selected:u,options:l,onSelected:function(e){return g((0,s.updateSettings)({theme:e}))}})}),(0,r.createComponentVNode)(2,i.LabeledList.Item,{label:"Font size",children:(0,r.createComponentVNode)(2,i.NumberInput,{width:"4em",step:1,stepPixelSize:10,minValue:8,maxValue:36,value:d,unit:"pt",format:function(e){return(0,o.toFixed)(e)},onChange:function(e,t){return g((0,s.updateSettings)({fontSize:t}))}})}),(0,r.createComponentVNode)(2,i.LabeledList.Item,{label:"Line height",children:(0,r.createComponentVNode)(2,i.NumberInput,{width:"4em",step:.01,stepPixelSize:2,minValue:1,maxValue:4,value:p,format:function(e){return(0,o.toFixed)(e,2)},onChange:function(e,t){return g((0,s.updateSettings)({lineHeight:t}))}})})]})})}},637:function(e,t,n){"use strict";t.__esModule=!0,t.audioReducer=void 0;var r={playing:!1,track:null};t.audioReducer=function(e,t){void 0===e&&(e=r);var n=t.type,o=t.payload;return"audio/playing"===n?Object.assign({},e,{playing:!0}):"audio/stopped"===n?Object.assign({},e,{playing:!1}):"audio/playMusic"===n?Object.assign({},e,{meta:o}):"audio/stopMusic"===n?Object.assign({},e,{playing:!1,meta:null}):e}},638:function(e,t,n){"use strict";t.__esModule=!0,t.ChatPanel=void 0;var r=n(0),o=n(6),i=n(2),a=n(402);var s=function(e){var t,n;function s(){var t;return(t=e.call(this)||this).ref=(0,r.createRef)(),t.state={scrollTracking:!0},t.handleScrollTrackingChange=function(e){return t.setState({scrollTracking:e})},t}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=s.prototype;return c.componentDidMount=function(){a.chatRenderer.mount(this.ref.current),a.chatRenderer.events.on("scrollTrackingChanged",this.handleScrollTrackingChange),this.componentDidUpdate()},c.componentWillUnmount=function(){a.chatRenderer.events.off("scrollTrackingChanged",this.handleScrollTrackingChange)},c.shouldComponentUpdate=function(e,t){return(0,o.shallowDiffers)(this.props,e)||(0,o.shallowDiffers)(this.state,t)},c.componentDidUpdate=function(){a.chatRenderer.assignStyle({width:"100%",whiteSpace:"pre-wrap",fontSize:this.props.fontSize,lineHeight:this.props.lineHeight})},c.render=function(){var e=this.state.scrollTracking;return(0,r.createFragment)([(0,r.createVNode)(1,"div","Chat",null,1,null,null,this.ref),!e&&(0,r.createComponentVNode)(2,i.Button,{className:"Chat__scrollButton",icon:"arrow-down",onClick:function(){return a.chatRenderer.scrollToBottom()},children:"Scroll to bottom"})],0)},s}(r.Component);t.ChatPanel=s},639:function(e,t,n){"use strict";t.__esModule=!0,t.EventEmitter=void 0;var r=function(){function e(){this.listeners={}}var t=e.prototype;return t.on=function(e,t){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)},t.off=function(e,t){var n=this.listeners[e];if(!n)throw new Error('There is no listeners for "'+e+'"');this.listeners[e]=n.filter((function(e){return e!==t}))},t.emit=function(e){var t=this.listeners[e];if(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=t.length;i<a;i+=1){var s=t[i];s.apply(void 0,r)}}},t.clear=function(){this.listeners={}},e}();t.EventEmitter=r},640:function(e,t,n){"use strict";t.__esModule=!0,t.createUuid=void 0;t.createUuid=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}},641:function(e,t,n){"use strict";t.__esModule=!0,t.ChatTabs=void 0;var r=n(0),o=n(2),i=n(45),a=n(404),s=n(139);t.ChatTabs=function(e,t){var n=(0,i.useSelector)(t,s.selectChatPages),c=(0,i.useSelector)(t,s.selectCurrentChatPage),l=(0,i.useDispatch)(t);return(0,r.createComponentVNode)(2,o.Tabs,{textAlign:"center",children:n.map((function(e){return(0,r.createComponentVNode)(2,o.Tabs.Tab,{selected:e===c,rightSlot:(0,r.createComponentVNode)(2,o.Box,{fontSize:"0.9em",children:e.count}),onClick:function(){return l((0,a.changeChatPage)(e))},children:e.name},e.id)}))})}},642:function(e,t,n){"use strict";t.__esModule=!0,t.chatMiddleware=void 0;var r=n(404),o=n(402);t.chatMiddleware=function(e){return o.chatRenderer.events.on("batchProcessed",(function(t){e.dispatch((0,r.updateMessageCount)(t))})),function(e){return function(t){var n=t.type,r=t.payload;if("chat/message"!==n){if("chat/changePage"===n){var i=r.page;return o.chatRenderer.changePage(i),e(t)}return e(t)}var a=Array.isArray(r)?r:[r];o.chatRenderer.processBatch(a)}}}},643:function(e,t,n){"use strict";t.__esModule=!0,t.chatReducer=t.initialState=void 0;var r,o=n(14),i=n(403),a=n(139);function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l={currentPage:i.DEFAULT_PAGE.id,pageById:(r={},r[i.DEFAULT_PAGE.id]=i.DEFAULT_PAGE,r)};t.initialState=l;t.chatReducer=function(e,t){void 0===e&&(e=l);var n=t.type,r=t.payload;if("chat/changePage"===n){var i=r.page;return Object.assign({},e,{currentPage:i.id})}if("chat/updateMessageCount"===n){for(var c,u=r.countByType,d=(0,o.toArray)(e.pageById),p=Object.assign({},e.pageById),g=s(d);!(c=g()).done;){for(var h=c.value,f=h.count||0,m=0,v=Object.keys(u);m<v.length;m++){var y=v[m];(0,a.canPageAcceptType)(h,y)&&(f+=u[y])}h.count!==f&&(p[h.id]=Object.assign({},h,{count:f}))}return Object.assign({},e,{pageById:p})}return e}},644:function(e,t,n){"use strict";t.__esModule=!0,t.Color=void 0;var r=function(){function e(e,t,n,r){void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=1),Object.assign(this,{r:e,g:t,b:n,a:r})}return e.prototype.toString=function(){return"rgba("+(0|this.r)+", "+(0|this.g)+", "+(0|this.b)+", "+(0|this.a)+")"},e}();t.Color=r,r.fromHex=function(e){return new r(parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16))},r.lerp=function(e,t,n){return new r((t.r-e.r)*n+e.r,(t.g-e.g)*n+e.g,(t.b-e.b)*n+e.b,(t.a-e.a)*n+e.a)},r.lookup=function(e,t){void 0===t&&(t=[]);var n=t.length;if(n<2)throw new Error("Needs at least two colors!");var o=e*(n-1);if(e<1e-4)return t[0];if(e>=.9999)return t[n-1];var i=o%1,a=0|o;return r.lerp(t[a],t[a+1],i)}},645:function(e,t,n){"use strict";t.__esModule=!0,t.telemetryMiddleware=void 0;var r=n(1),o=n(129),i=(0,n(23).createLogger)("telemetry");t.telemetryMiddleware=function(e){var t,n;return function(a){return function(s){var c=s.type,l=s.payload;if("telemetry/request"!==c){if("backend/update"!==c)return a(s);var u;a(s);var d=null==l||null==(u=l.config)?void 0:u.client;if(!d)return void i.error("backend/update payload is missing client data!");t||((t=o.storage.get("telemetry")||{}).connections||(t.connections=[]),i.debug("retrieved telemetry from storage",t));var p=!1;if(t.connections.find((function(e){return n=d,(t=e).ckey===n.ckey&&t.address===n.address&&t.computer_id===n.computer_id;var t,n}))||(p=!0,t.connections.unshift(d),t.connections.length>10&&t.connections.pop()),p&&(i.debug("saving telemetry to storage",t),o.storage.set("telemetry",t)),n){var g=n;n=null,e.dispatch({type:"telemetry/request",payload:g})}}else{if(!t)return i.debug("deferred"),void(n=l);i.debug("sending");var h=(null==l?void 0:l.limits)||{},f=t.connections.slice(0,h.connections);(0,r.sendMessage)({type:"telemetry",payload:{connections:f}})}}}}},646:function(e,t,n){"use strict";t.__esModule=!0,t.Panel=void 0;var r=n(0),o=n(2),i=n(3),a=n(399),s=n(401),c=n(405),l=n(136),u=n(1);t.Panel=function(e,t){var n=(0,a.useAudio)(t),d=(0,l.useSettings)(t),p=(0,u.useLocalState)(t,"audioOpen",n.playing),g=p[0],h=p[1],f=(0,u.useLocalState)(t,"settingsOpen",!1),m=f[0],v=f[1];return(0,r.createComponentVNode)(2,i.Pane,{theme:d.theme,fontSize:d.fontSize+"pt",children:(0,r.createComponentVNode)(2,o.Flex,{direction:"column",height:"100%",children:[(0,r.createComponentVNode)(2,o.Flex.Item,{children:(0,r.createComponentVNode)(2,o.Section,{fitted:!0,children:(0,r.createComponentVNode)(2,o.Flex,{align:"center",children:[(0,r.createComponentVNode)(2,o.Flex.Item,{mx:1,grow:1,children:(0,r.createComponentVNode)(2,s.ChatTabs)}),(0,r.createComponentVNode)(2,o.Flex.Item,{mx:1,children:(0,r.createComponentVNode)(2,c.PingIndicator)}),(0,r.createComponentVNode)(2,o.Flex.Item,{mx:1,children:(0,r.createComponentVNode)(2,o.Button,{color:"grey",selected:g||n.playing,icon:"music",onClick:function(){return h(!g)}})}),(0,r.createComponentVNode)(2,o.Flex.Item,{mx:1,children:(0,r.createComponentVNode)(2,o.Button,{icon:"cog",selected:m,onClick:function(){return v(!m)}})})]})})}),g&&(0,r.createComponentVNode)(2,o.Flex.Item,{mt:1,children:(0,r.createComponentVNode)(2,o.Section,{children:(0,r.createComponentVNode)(2,a.NowPlayingWidget)})}),m&&(0,r.createComponentVNode)(2,o.Flex.Item,{position:"relative",grow:1,children:(0,r.createComponentVNode)(2,i.Pane.Content,{scrollable:!0,children:(0,r.createComponentVNode)(2,l.SettingsPanel)})})||(0,r.createComponentVNode)(2,o.Flex.Item,{mt:1,grow:1,children:(0,r.createComponentVNode)(2,o.Section,{fill:!0,fitted:!0,position:"relative",children:(0,r.createComponentVNode)(2,i.Pane.Content,{scrollable:!0,children:(0,r.createComponentVNode)(2,s.ChatPanel,{lineHeight:d.lineHeight})})})})]})})}}});