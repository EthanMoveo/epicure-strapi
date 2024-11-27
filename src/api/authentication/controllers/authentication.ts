/**
 * authentication controller
 */

import { factories } from '@strapi/strapi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default factories.createCoreController('api::authentication.authentication', ({ strapi }) => ({
  async login(ctx) {
    const { username, password } = ctx.request.body;

    // Vérification des données d'entrée
    if (!username || !password) {
      return ctx.badRequest('Username and password are required.');
    }

    // Recherche de l'utilisateur par username
    const user = await strapi.db.query('api::authentication.authentication').findOne({
      where: { username },
    });

    if (!user) {
      return ctx.unauthorized('Invalid username or password.');
    }

    // Comparaison des mots de passe
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return ctx.unauthorized('Invalid username or password.');
    }

    // Génération du JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'default_secret', 
      { expiresIn: '1d' }
    );

    return ctx.send({ message: "Login Successful!", token, user: username  });
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
