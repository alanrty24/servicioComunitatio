const path = require('path');

module.exports = {
  // Establece el modo de Webpack (development o production)
  mode: 'development',

  // Establece el punto de entrada de la aplicación
  entry: './src/index.js',

  // Establece la configuración de salida
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Establece la configuración de Electron
  target: 'electron-renderer',

  // Agrega los loaders necesarios (por ejemplo, para procesar archivos CSS)
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // Agrega los plugins de Webpack que necesites (por ejemplo, HtmlWebpackPlugin)
  plugins: []
};