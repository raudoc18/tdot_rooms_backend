'use strict';

/**
 * room controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::room.room', ({strapi}) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::room.room').findOne({
      where: { slug },
      populate: ['image']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  }
}));