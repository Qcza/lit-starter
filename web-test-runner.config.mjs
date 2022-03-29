import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    files: ['src/**/*.test.ts'],
    plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
    nodeResolve: true,
    coverage: true,
    testFramework: {
        config: {
            ui: 'bdd',
            timeout: '2000'
        }
    }
};