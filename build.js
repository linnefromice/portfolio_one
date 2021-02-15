const esbuild = require('esbuild') // eslint-disable-line @typescript-eslint/no-var-requires
const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires
const sassPlugin = require('./scripts/esbuild-plugin-sass') // eslint-disable-line @typescript-eslint/no-var-requires

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
