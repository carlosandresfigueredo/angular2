
export default {
  basePath: 'https://carlosandresfigueredo.github.io/angular2',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
