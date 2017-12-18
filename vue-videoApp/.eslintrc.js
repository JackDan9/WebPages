module.exports = {
    root: true,
    extends: ['standard'],
    env: {
        browser: true
    },
    plugins: [
        'html'
    ],
    rules: {
        'no-console': 'off',
        // 'indent': [ 'error', 2 ],
        'quotes': [ 'error', 'single' ]
    },
};