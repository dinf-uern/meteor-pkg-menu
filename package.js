Package.describe({
  name: 'dinf:menu',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'pacote contendo classes para criação de menus',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dinf-uern/meteor-pkg-menu.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use([
    'reactive-var',
    'templating',
    'underscore'
  ]);

  api.use(["iron:router@1.0.0"], 'client', {weak: false, unordered: false});

  api.addFiles([
    'lib/modules/menu.js',
    'lib/modules/menu-item.js',
    'lib/templates/menu.html',
    'lib/templates/menu.js',
    'lib/templates/menu-item.html',
    'lib/templates/menu-item.js',
    'lib/helpers/active_route_class.js'
  ], ['client']);

  api.export("Menu", ['client']);
  api.export("MenuItem", ['client']);
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'dinf:menu'
  ], ['client']);

  api.addFiles('tests/menu-item-tests.js', 'client');
  api.addFiles('tests/menu-tests.js', 'client');
});
