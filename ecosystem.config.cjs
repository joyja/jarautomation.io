module.exports = {
  apps: [
    {
      name: 'jarautomation.io',
      script: './build/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}