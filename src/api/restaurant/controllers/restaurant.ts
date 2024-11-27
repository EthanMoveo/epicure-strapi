import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
  async findByChef(ctx) {
    try {
      const { chefId } = ctx.params;

      const restaurants = await strapi.db.query('api::restaurant.restaurant').findMany({
        where: { chef: chefId },
        populate: ['image'], 
      });

      ctx.body = restaurants;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async find(ctx) {
    return await super.find(ctx); 
  },

  async findOne(ctx) {
    return await super.findOne(ctx); 
  },

  async create(ctx) {
    return await super.create(ctx); 
  },

  async update(ctx) {
    return await super.update(ctx); 
  },

  async delete(ctx) {
    return await super.delete(ctx);
  },
}));
