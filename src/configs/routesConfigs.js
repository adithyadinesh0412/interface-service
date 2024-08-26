'use strict'
const config = require('@configs/.config.json')

exports.routesConfigs = {
	services: ['user', 'mentoring', 'notification', 'scheduler', 'project', 'entity_management','self_creation_portal','samiksha'],
	routes: config.routes,
}
