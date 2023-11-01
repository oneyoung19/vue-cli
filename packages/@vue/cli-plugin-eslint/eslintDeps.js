const DEPS_MAP = {
  base: {
    eslint: '^7.32.0',
    // 内置了vue模板专用的eslint解析和规则
    'eslint-plugin-vue': '^8.0.3'
  },
  airbnb: {
    '@vue/eslint-config-airbnb': '^6.0.0',
    'eslint-plugin-import': '^2.25.3',
    'eslint-plugin-vuejs-accessibility': '^1.1.0'
  },
  prettier: {
    'eslint-config-prettier': '^8.3.0',
    'eslint-plugin-prettier': '^4.0.0',
    prettier: '^2.4.1'
  },
  standard: {
    // 这里之所以，除了声明@vue/eslint-config-standard版本，额外声明其他依赖版本，是为了更加可控版本。
    // 譬如，在这里指定依赖版本后，即使@vue/eslint-config-standard存在内置依赖版本，执行npm install安装时，也会按照这里声明很好的版本。
    '@vue/eslint-config-standard': '^6.1.0',
    'eslint-plugin-import': '^2.25.3',
    'eslint-plugin-node': '^11.1.0',
    'eslint-plugin-promise': '^5.1.0'
  },
  typescript: {
    '@vue/eslint-config-typescript': '^9.1.0',
    '@typescript-eslint/eslint-plugin': '^5.4.0',
    '@typescript-eslint/parser': '^5.4.0'
  }
}

exports.DEPS_MAP = DEPS_MAP

exports.getDeps = function (api, preset, rootOptions = {}) {
  const deps = Object.assign({}, DEPS_MAP.base, DEPS_MAP[preset])

  if (api.hasPlugin('typescript')) {
    Object.assign(deps, DEPS_MAP.typescript)
  }

  if (api.hasPlugin('babel') && !api.hasPlugin('typescript')) {
    Object.assign(deps, {
      '@babel/eslint-parser': '^7.12.16',
      '@babel/core': '^7.12.16'
    })
  }

  return deps
}
