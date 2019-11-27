module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-min-length': [2, 'always', 20],
    'scope-empty': [2, 'always'],
  },
};
