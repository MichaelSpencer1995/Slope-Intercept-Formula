import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const config = {
    input: 'src/index.ts',
    output: {
        file: 'dist/umd/SlopeInterceptPixels.js',
        format: 'umd',
        name: 'SlopeInterceptPixels'
    },
    plugins: [
        typescript()
    ]
}

if (process.env.BUILD === 'minify') {
    config.output.file = 'dist/umd/SlopeInterceptPixels.min.js'
    config.plugins.push(terser())
}

export default config