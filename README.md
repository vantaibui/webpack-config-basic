# Webpack config

## npm init -y

## npm install --save-dev typescript ts-loader

## npm install webpack webpack-cli --save-dev

## npm i react react-dom --save

## npm install @babel/core babel-loader @babel/preset-env @babel/preset-react @types/react @types/react-dom --save-dev

## npm install css-loader style-loader ts-loader sass-loader sass --save-dev

## npm install html-webpack-plugin webpack-dev-server --save-dev

# TS config

{
    "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "sourceMap": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node",
    // Resolve default import module
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    }
}

# .babelrc

{
    "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
    ]
}
