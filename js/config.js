define(function() {
    var PluginPath = 'comlib/require/plugin/';
    var ModulePath = 'module/';

    require.config({
        paths: {
          'jquery': 'comlib/common/jquery-1.10.2.min',
          'react': 'comlib/react/react-with-addons.min',
          'JSXTransformer': "comlib/react/JSXTransformer",
          'codemirrorcss' : '',
          'url': 'comlib/common/url.min',
          'utility': ModulePath + 'utility',
          'user': ModulePath + 'user',
          'server': ModulePath + 'server',
          'stub': ModulePath + 'stub',
          'experiment': ModulePath + 'experiment',
        },
        shim: { 
          layer: {
            deps: [
              'jquery',
              //'css!comlib/layer-v1.8.5/layer/skin/layer.css',
            ],
            exports: 'layer'
          },
          codemirrorcss : { 
            deps: [
                'css!comlib/codemirror-4.2/lib/codemirror.css',
                //'css!comlib/codemirror-4.2/theme/the-matrix.css',
                'css!comlib/codemirror-4.2/theme/ambiance.css'
            ] 
          }, 
        },
        
        map: {
          '*': {
            'css': PluginPath + 'css',
            'jsx': PluginPath + 'jsx',
            'text': PluginPath + 'text',
          }
        },

        jsx: {
          fileExtension: '.jsx'
        },

    });

    return {
        codemirror: {
            path: 'comlib/codemirror-4.2/'
        }
    }
});
