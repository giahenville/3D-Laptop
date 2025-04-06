// Import necessary plugins for Vite configuration

// Vite plugin to add React support
import react from '@vitejs/plugin-react'

// Import ESBuild transform function for custom handling of .js files
import { transformWithEsbuild } from 'vite'

 // Vite plugin to restart the server when files change
import restart from 'vite-plugin-restart'

export default {

    // Define the root directory for the source code (where the main files are)
    root: 'src/',

    // Define the directory for public assets like images, fonts, etc.
    publicDir: '../public/',

    // Plugins to extend Vite's functionality
    plugins:
    [
        // Plugin to restart the development server whenever any files in the 'public' directory change
        restart({ restart: [ '../public/**', ] }),

        // Add React support to handle JSX and React-specific features
        react(),

        // Custom plugin to load and transform '.js' files as if they were JSX
        {
            // Name of the plugin
            name: 'load+transform-js-files-as-jsx',

            async transform(code, id)
            {
                // Only apply this transformation to .js files within the 'src' directory
                if (!id.match(/src\/.*\.js$/))
                    return null

                // Use ESBuild to transform the .js files into JSX
                return transformWithEsbuild(code, id, {
                    // Treat the file as JSX
                    loader: 'jsx',

                    // Use the new JSX transform (React 17+)
                    jsx: 'automatic',
                });
            },
        },
    ],

    // Development server settings
    server:
    {
        // Allows access to the server from the local network (useful for testing on other devices)
        host: true, 

        // Automatically open browser unless running in CodeSandbox
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },

    // Build configuration
    build:
    {
        // Output the build to the 'dist' directory (relative to the root folder)
        outDir: '../dist', 

        // Empty the output directory before generating the build
        emptyOutDir: true, 

        // Generate source maps for easier debugging
        sourcemap: true 
    },
}
