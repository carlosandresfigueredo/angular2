
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://carlosandresfigueredo.github.io/angular2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular2"
  },
  {
    "renderMode": 2,
    "route": "/angular2/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/angular2/productos"
  },
  {
    "renderMode": 2,
    "route": "/angular2/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular2",
    "route": "/angular2/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 966, hash: '43aa2868ed56f184162767233c6ac1a0b209a048c408ab1b1ceab38b00dc9baf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1480, hash: 'bd050a2a9f050355cd662be66e9c520d76b9e74ecc080cbca7d0dbf7d8a4373b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2970, hash: '6509157f3a18c8a503230e342af4262a9e8472cbf67dcb104f8dabfc3448228c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 2892, hash: '94d9d25089496c095774d607bd8f65d4579437a3d8312a6d3d5e0228815d6cf3', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 3518, hash: 'e1bbb7bf2f030e1252fbf2f7d9824416e5195dae3270859e1169473c64261d01', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4807, hash: '1f20710b34fbace571b45fa28f011e384f5849bda40fccc5c4ce9d95abed71c3', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
