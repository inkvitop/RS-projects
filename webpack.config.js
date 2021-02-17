const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
      entry: {
            index: path.resolve(__dirname, "src", "index.js")
      },
      output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
      },
      module: {
            rules: [
                  {
                        test: /\.css$/,
                        use: ["style-loader", "css-loader",]
                  },
                  {
                        test: /\.scss$/,
                        use: ["style-loader", "css-loader", "sass-loader"]
                  },
                  {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: ["babel-loader"]
                  },
                  {
                        test: /\.(gif|png|jpe?g)$/,
                        use: [
                              {
                                    loader: 'file-loader',
                                    options: {
                                          name: '[name].[ext]',
                                          useRelativePath: true
                                    }
                              }
                        ]
                  },
            ]
      },
      devtool: 'source-map',
      devServer: {
            overlay: true
      },
      plugins: [
            new CopyWebpackPlugin(
                  { 
                        patterns: [
                              { 
                                    from: path.resolve(__dirname, 'src/bubbles/img'),
                                    to: path.resolve(__dirname, 'dist/bubbles/img') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/keyboard/sounds'),
                                    to: path.resolve(__dirname, 'dist/keyboard/sounds') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/start_play/audio'),
                                    to: path.resolve(__dirname, 'dist/start_play/audio') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/start_screen/audio'),
                                    to: path.resolve(__dirname, 'dist/start_screen/audio') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/start_screen/img'),
                                    to: path.resolve(__dirname, 'dist/start_screen/img') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/waterUp/audio'),
                                    to: path.resolve(__dirname, 'dist/waterUp/audio') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/waterUp/audio'),
                                    to: path.resolve(__dirname, 'dist/waterUp/audio') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/waves/img'),
                                    to: path.resolve(__dirname, 'dist/waves/img') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/instructions/img'),
                                    to: path.resolve(__dirname, 'dist/instructions/img') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/instructions/video'),
                                    to: path.resolve(__dirname, 'dist/instructions/video') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/structure/img'),
                                    to: path.resolve(__dirname, 'dist/structure/img') 
                              },
                              { 
                                    from: path.resolve(__dirname, 'src/score/score_img'),
                                    to: path.resolve(__dirname, 'dist/score/score_img') 
                              },
                        ]
                  }
            ),
            new HtmlWebpackPlugin({
                  template: path.resolve(__dirname, "src", "index.html")
            }),
            new CleanWebpackPlugin(),
      ]
};