import * as esbuild from 'esbuild'
import { execSync } from 'child_process';
import path from 'node:path';

let tailwindcss = {
    name: 'tailwindcss',
    setup(build) {
      build.onStart(() => {
        console.log('build started')
        let stdout = execSync('npx tailwindcss -i ./src/app.tw.css -o ./src/app.css');
      })

      build.onResolve({ filter: /^.*app.tw.css$/ }, async (args) => {
        return { path: path.join(args.resolveDir, args.path.replace('.tw.', '.')) }
      })
    },
  }

let importRestrictions = {
    name: 'example',
    setup(build) {
      build.onResolve({ filter: /^.*$/ }, async (args) => {
        if (args.importer.match(/\/apps\/news/)){
            const importerMatch = args.importer.match(/src\/apps\/([^\/]*)(.*)$/);
            const result = await build.resolve(args.path, {
                kind: args.kind,
                resolveDir: args.resolveDir,
            })
            const pathMatch = result.path.match(/src\/apps\/([^\/]*)(.*)$/); 
            if (importerMatch && pathMatch && importerMatch[1] !== pathMatch[1]) {
                return { errors: [{text: "Cross module imports are not allowed"}] }
            }           
        }        
      })
    },
  }

const serverCtx = await esbuild.context({
  entryPoints: ["./src/server.jsx"],
  bundle: true,
  platform: 'node',
  outfile: 'dist/server.js',
  loader: {
    '.png': 'file',
    '.ttf': 'file',
    '.woff2': 'file'
  },
  assetNames: "/assets/[name]-[hash]",
  treeShaking: true,
  minify: true,
  logLevel: 'info',
  plugins: [tailwindcss]
})

let clientCtx = await esbuild.context({
    entryPoints: ["./src/index.jsx"],
    bundle: true,
    outdir: 'dist/assets',
    loader: {
      '.png': 'file',
      '.ttf': 'file',
      '.woff2': 'file'
    },
    assetNames: "/assets/[name]-[hash]",
    treeShaking: true,
    minify: true,
    logLevel: 'info',
    metafile: true,
    format: "esm",
    splitting: true,
    plugins: [importRestrictions, tailwindcss]
})

await serverCtx.watch();
await clientCtx.watch();


// fs.writeFileSync('meta.json', JSON.stringify(result.metafile))