const esbuild = require('esbuild')
const path = require('path')
const sassPlugin = require('./scripts/esbuild-plugin-sass')

const options = {
    define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
    entryPoints: [path.resolve(__dirname, 'src/index.tsx')],
    bundle: true,
    target: 'es2020',
    platform: 'browser',
    plugins: [ sassPlugin({ sourceMap: true }) ],
    outdir: path.resolve(__dirname, 'build'),
}
esbuild.build(options).catch(err => {
    process.stderr.write(err.stderr)
    process.exit(1)
})
