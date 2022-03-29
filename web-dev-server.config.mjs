import { esbuildPlugin } from '@web/dev-server-esbuild';
import { hmrPlugin, presets } from "@open-wc/dev-server-hmr";

export default {
    open: true,
    nodeResolve: true,
    rootDir: 'src',
    appIndex: 'index.html',
    plugins: [
        esbuildPlugin({ ts: true, target: 'auto' }),
        hmrPlugin({
            include: ['src/**/*'],
            presets: [
                presets.lit,
            ]
        }),
    ],

};