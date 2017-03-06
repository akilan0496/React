var config = {
   entry: './app.js',

   output: {
      path:'/',
      filename: 'react-stateless.js',
   },

   devServer: {
      inline: true,
      port: 3030
   },

   resolve: {
        extensions: ['.js'],
    },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
