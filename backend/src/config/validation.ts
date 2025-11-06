import * as Joi from 'joi';

export const validate = (config: Record<string, unknown>) => {
  const schema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URI: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().default('3600s'),
    JWT_REFRESH_SECRET: Joi.string().required(),
    JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),
    STRIPE_API_KEY: Joi.string().allow(''),
    STRIPE_WEBHOOK_SECRET: Joi.string().allow(''),
    INTERAC_EMAIL: Joi.string().allow(''),
    INTERAC_INSTRUCTIONS: Joi.string().allow(''),
    TWILIO_ACCOUNT_SID: Joi.string().allow(''),
    TWILIO_AUTH_TOKEN: Joi.string().allow(''),
    TWILIO_FROM_NUMBER: Joi.string().allow(''),
    SENDGRID_API_KEY: Joi.string().allow(''),
    SENDGRID_FROM_EMAIL: Joi.string().allow(''),
    GOOGLE_MAPS_API_KEY: Joi.string().allow(''),
    CLOUDINARY_CLOUD_NAME: Joi.string().allow(''),
    CLOUDINARY_API_KEY: Joi.string().allow(''),
    CLOUDINARY_API_SECRET: Joi.string().allow('')
  });

  const { error, value } = schema.prefs({ abortEarly: false }).validate(config);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return value;
};
