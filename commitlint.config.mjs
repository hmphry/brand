/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Warning only (level 1): keeps scopes consistent without blocking commits.
    'scope-enum': [
      1,
      'always',
      ['mark', 'button', 'tokens', 'colors', 'build', 'release'],
    ],
  },
};
