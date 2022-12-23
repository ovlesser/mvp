module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'jest',
        'react-hooks'
    ],
    rules: {
        'import/named': 2,
        curly: 0,
        semi: 2,
        '@typescript-eslint/ban-ts-comment': 0, // This is required in the few places it's used.
        '@typescript-eslint/explicit-module-boundary-types': 2,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/member-delimiter-style': [2, {
            multiline: {
                delimiter: 'none'
            }
        }],
        '@typescript-eslint/no-namespace': 0, // TODO: we have some 'namespace' instances that might be fixable
        '@typescript-eslint/no-explicit-any': 0, // TODO: decide on using/no 'any' usages
        '@typescript-eslint/no-non-null-assertion': 0, // TODO: decide to use `?` where possible, or 'if' checks
        '@typescript-eslint/no-unused-vars': 2,
        'id-length': [
            2,
            {
                // Lodash, for-loop iterator, coordinates x and y, sort vars
                exceptions: ['_', 'i', 'x', 'y', 'a', 'b']
            }
        ],
        indent: ['error', 4],
        'multiline-ternary': 0,
        'no-unused-expressions': 0, // Used in tests.
        'prefer-promise-reject-errors': 0, // TODO: we can use Promise.reject(new Error()). Check with team.
        'react/display-name': 0, // TODO: We can name <View>s for helpful debugging if we choose.
        'react/no-children-prop': 0, // Messy, and provides no value
        'react/no-string-refs': 0, // TODO: we use string refs, would require focused code change
        'react/no-unescaped-entities': 0, // This only detects our strings (like T&C's), which should be ignored
        'react/prop-types': 0, // Not needed as we use typescript to check correctness
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0, // We use useEffect as a subscription service in a lot of places.
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'spaced-comment': ['error', 'always', {
            line: {
                markers: ['#region', '#endregion', 'region', 'endregion']
            }
        }]
    },
    overrides: [
        {
            files: ['*ImageLoader.ts', '*AnimationLoader.ts'],
            rules: {
            }
        }
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/ignore': ['node_modules']
    }
}
