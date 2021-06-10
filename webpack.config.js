const path = require('path'); //Importado para resolver problemas de barra invertida. No windows é de um jeito, no mac de outro
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefereshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //para mapear os erros de melhor forma no debugger 
    entry: path.resolve(__dirname, 'src', 'index.tsx'), //Passamos qual será o arquivo principal de inicialização do projeto.
    output: { //Passamos qual será o arquivo de saída
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx'], //regra para que o webpack aceite arquivos js e jsx
    },
    devServer: { // Configuração para auto refresh da page
        contentBase: path.resolve(__dirname, 'public'), //passar pasta public
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefereshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            { // setando regra para que ele entenda o jsx, excluindo o node_modules, e faça a conversão utilzando babel-loader
                test: /\.(j|t)sx$/, //recebe uma expressão regular / J ou T
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            { // Nova regra para interpretar o css
                test: /\.css$/, //recebe uma expressão regular
                use: ['style-loader', 'css-loader'], // precisa instalar essas duas dependencias para que funcione
            },
            { // Nova regra para interpretar o scss
                test: /\.scss$/, //scss é o css com chaves e o .sass é o css sem chaves, somente com identação
                use: ['style-loader', 'css-loader', 'sass-loader'], // precisa instalar as para que dependencias para que funcione
            },
        ],
    }
};