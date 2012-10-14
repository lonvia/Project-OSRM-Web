/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM config file
// [has to be loaded directly after OSRM.base]


var routingHost = 'osm.lonvia.de';

OSRM.DEFAULTS = {
	ROUTING_ENGINES: [
		{	url: 'http://' + routingHost + ':3331/viaroute',
            timestamp: 'http://' + routingHost + ':3331/timestamp',
			metric: 0,
			label: 'ENGINE_0',
            fixspeed: 0
		},
		{	url: 'http://' + routingHost + ':3332/viaroute',
            timestamp: 'http://' + routingHost + ':3332/timestamp',
			metric: 0,
			label: 'ENGINE_1',
            fixspeed: 18
		},
		{	url: 'http://' + routingHost + ':3333/viaroute',
            timestamp: 'http://' + routingHost + ':3333/timestamp',
			metric: 0,
			label: 'ENGINE_2',
            fixspeed: 4.5
		}
	],
	
	WEBSITE_URL: document.URL.replace(/#*(\?.*|$)/i,""),					// truncates URL before first ?, and removes tailing #
	HOST_GEOCODER_URL: 'http://nominatim.openstreetmap.org/search?countrycodes=ch&',
	HOST_REVERSE_GEOCODER_URL: 'http://nominatim.openstreetmap.org/reverse',
	HOST_SHORTENER_URL: 'http://map.project-osrm.org/shorten/',
	
	SHORTENER_PARAMETERS: '%url&jsonp=%jsonp',
	SHORTENER_REPLY_PARAMETER: 'ShortURL',	
	
	ROUTING_ENGINE: 1,
	DISTANCE_FORMAT: 0,														// 0: km, 1: miles
	GEOCODER_BOUNDS: '',	
	ZOOM_LEVEL: 14,
	HIGHLIGHT_ZOOM_LEVEL: 16,
	JSONP_TIMEOUT: 10000,
	
	ONLOAD_ZOOM_LEVEL: 9,
	ONLOAD_LATITUDE: 47.20,
	ONLOAD_LONGITUDE: 8.50,
	ONLOAD_SOURCE: "",
	ONLOAD_TARGET: "",
	
	LANGUAGE: "en",
	LANUGAGE_ONDEMAND_RELOADING: true,
	LANGUAGE_SUPPORTED: [ 
		{encoding:"en", name:"English"},
		{encoding:"de", name:"Deutsch"},
		{encoding:"fr", name:"Français"},
		{encoding:"it", name:"Italiano"}
	],
		
	TILE_SERVERS: [
		{	display_name: 'osm.org',
			url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:'Map data &copy; 2011 OpenStreetMap contributors under <a ref="http://www.openstreetmap.org/copyright">ODbL</a>',
			options:{maxZoom: 18}
		},
		{	display_name: 'osm.de',
			url:'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
			attribution:'Map data &copy; 2011 OpenStreetMap contributors under <a ref="http://www.openstreetmap.org/copyright">ODbL</a>',
			options:{maxZoom: 18}
		}
	],
    OVERLAY_SERVERS: [
        {  display_name: 'hiking routes',
           url: 'http://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
           attribution: 'Routes &copy; waymarkedtrails.org',
			options:{maxZoom: 17}
        },
        {  display_name: 'bike routes',
           url: 'http://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png',
           attribution: 'Routes &copy; waymarkedtrails.org',
	       options:{maxZoom: 17}
        },
        {  display_name: 'bike access restrictions',
           url: 'http://ex4sy.t-i.ch/bicycle/{z}/{x}/{y}.png',
           attribution: 'Access overlay by <a href="http://osm.t-i.ch/bicycle/map/">t-i.ch</a>',
	       options:{maxZoom: 17}
        }
    ],

	NOTIFICATIONS: {
		LOCALIZATION:	false,	// 30min
		CLICKING: 		false,		// 1min
		DRAGGING: 		false,		// 2min 
		MAINTENANCE:	false
	},
	OVERRIDE_MAINTENANCE_NOTIFICATION_HEADER: undefined,
	OVERRIDE_MAINTENANCE_NOTIFICATION_BODY: undefined
};
