import * as esbuild from 'esbuild'

let examplePlugin = {
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
  assetNames: "assets/[name]-[hash]",
  treeShaking: true,
  minify: true,
  logLevel: 'info',
})

let clientCtx = await esbuild.context({
    entryPoints: ["./src/index.jsx"],
    bundle: true,
    outfile: 'dist/assets/client.js',
    loader: {
      '.png': 'file',
      '.ttf': 'file',
      '.woff2': 'file'
    },
    assetNames: "[name]-[hash]",
    treeShaking: true,
    minify: true,
    logLevel: 'info',
    metafile: true,
  plugins: [examplePlugin]
})

await serverCtx.watch();
await clientCtx.watch();


// console.log(await esbuild.analyzeMetafile(result.metafile))