const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
	    {
		    test: /\.jsx?$/,
		    use: [
			    { loader: "babel-loader" }
		    ]
	    }
    ]
  }
};

