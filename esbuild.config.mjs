import esbuild from 'esbuild';
import htmlPlugin from '@chialab/esbuild-plugin-html';

await esbuild.build({
    format: 'esm',
    entryPoints: ['src/index.html'],
    outdir: 'dist',
    logLevel: 'verbose',
    assetNames: 'assets/[name]-[hash]',
    chunkNames: '[ext]/[name]-[hash]',
    sourcemap: true,
    minify: true,
    bundle: true,
    splitting: true,
    plugins: [
        htmlPlugin(),
    ],
});