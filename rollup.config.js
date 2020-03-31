import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'index.js',
    output: {
        dir: 'output',
        format: 'cjs',
        browser: true
    },
    plugins: [resolve()]
};