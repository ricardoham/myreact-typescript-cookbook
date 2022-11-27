// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'myreact-cookbook-shell',
  remotes: ['myreact-cookbook'],
};

module.exports = moduleFederationConfig;
