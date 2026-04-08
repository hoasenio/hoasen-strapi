module.exports = ({ env }) => {
  const config = {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };

  const publicUrl = env('PUBLIC_URL', '');
  if (publicUrl) {
    config.url = publicUrl;
    config.proxy = true;
  }

  return config;
};
