npm init -y
git init

yarn add -D tsc typescript ts-node nodemon
npx tsc --init

# package.json:

"scripts": {
"start:dev": "nodemon --watch 'src/' --exec 'ts-node src/index.ts' -e ts"
},

criar ./src/index.ts

# src/index.ts:

console.log(('hello world !');

yarn start:dev

nvm use --lts
yarn add -D eslint prettier eslint-config-prettier

npx eslint --init ou npm init @eslint/config

# .eslintrc.json:

    "parserOptions": {
        "project": "./tsconfig.json",

instalar extensoes eslint / prettier

# configurar format on save no vs code:

ctrl+,
=> Buscar : format on save => editr: Format On Save : Marcar
=> Buscar : default formatter : Editor: Default Fotmatter : Prettier - Code Formatter

ctrl + shift + p => reload windows

yarn add express
yarn add -D @types/express @types/node
yarn add -D dotenv
