module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{vue,less,css,sass,scss}': ['stylelint --fix'],
}
