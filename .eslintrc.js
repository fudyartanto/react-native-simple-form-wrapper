module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2018,
      "ecmaFeatures": {
        "jsx": true
      },
      "sourceType": "module"
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "google"],
    "plugins": [
      "react",
      "react-native"
    ],
    "settings": {
      "react": {
        "version": require('./package.json').dependencies.react,
      },
    },
    "globals": {
      "setTimeout": false,
      "Promise": false,
      "clearTimeout": false,
      "test": false,
      "expect": false,
      "__DEV__": false,
      "Map": false,
      "alert": false,
      "React$Node": false,
      "babelHelpers": false,
      "FormData": false,
      "console": false,
      "require": false,
      "module": false,
      "React": false,
    },
    "rules": {
      "no-invalid-this": 0,
      "max-len": ["error", { "code": 160, "ignorePattern": "^\\s*(const|let|var)\\s+\\w+\\s+\\=\\s+\\/.*\\/(|i|g|m|ig|im|gm|igm);?$" }],
      "require-jsdoc": ["error", {
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": false,
            "ClassDeclaration": false,
            "ArrowFunctionExpression": false,
            "FunctionExpression": false
        }
      }],
      "object-curly-spacing": ["error", "always"],
      "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
      "react/jsx-uses-vars": 1,
      "react/react-in-jsx-scope": 1,
      "no-multi-spaces": [
        2,
        {
          "exceptions": {
            "VariableDeclarator": true
          }
        }
      ],
      "no-trailing-spaces": [
        "error",
        {
          "skipBlankLines": true
        }
      ],
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "no-useless-escape": 0
    }
  }