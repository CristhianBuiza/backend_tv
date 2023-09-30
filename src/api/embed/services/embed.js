'use strict';

/**
 * embed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::embed.embed');
