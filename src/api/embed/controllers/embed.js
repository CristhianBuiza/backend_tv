'use strict';

/**
 * embed controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::embed.embed');
