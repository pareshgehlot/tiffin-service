import * as Joi from 'joi';

export const validate = (config: Record<string, unknown>) => {
  const schema = Joi.object({
    PORT: Joi.number().default(3000),
    FRONTEND_URL: Joi.string().uri().required(),
    MONGO_URI: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().default('3600s'),
    JWT_REFRESH_SECRET: Joi.string().required(),
    JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),
    STRIPE_SECRET_KEY: Joi.string().allow(''),
    INTERAC_EMAIL: Joi.string().email().allow(''),
    ADMIN_EMAIL: Joi.string().email().required(),
    ADMIN_PASSWORD: Joi.string().min(12).required()
  });

  const { error, value } = schema.prefs({ abortEarly: false }).validate(config);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return value;
};
