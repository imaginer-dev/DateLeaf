module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'test', 'design', 'refactor', 'pref', 'rename', 'remove', 'config', 'chore'],
    ],
  },
};
