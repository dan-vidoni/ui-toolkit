const presets = process.env.BABEL_ENV === 'es'
    ? []
    : [
        ['@babel/env', {
            bugfixes: true,
            modules: 'esm' == process.env.BABEL_ENV ? false : 'commonjs',
        }]
    ];

const plugins = [
  [
    'babel-plugin-transform-react-remove-prop-types',
    {
      mode: 'unsafe-wrap',
    },
  ]
];

module.exports = {
  presets: presets.concat(['@babel/preset-react']),
  plugins: [
    'babel-plugin-optimize-clsx',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
    ['@babel/plugin-transform-runtime', { version: '^7.4.4' }],
    // for IE 11 support
    '@babel/plugin-transform-object-assign',
  ],
  ignore: [/@babel[\\|/]runtime/],
  env: {
    cjs: {
      plugins: plugins,
    },
    esm: {
      plugins: [...plugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
    es: {
      plugins: [...plugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
    production: {
      plugins: [...plugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
    }
  }
};
