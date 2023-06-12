import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import laravel from 'laravel-vite-plugin';
import inject from "@rollup/plugin-inject";
//npm i @rollup/plugin-inject --save-dev
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
//Nuevo
        inject({
            $: 'jquery',
            jQuery: 'jquery',
            })
    ],
});
