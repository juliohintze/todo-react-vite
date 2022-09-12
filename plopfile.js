/** @param {import('plop').NodePlopAPI} plop */
function generator(plop) {
  plop.setHelper('proper', (value) => {
    if (!value) return value;

    return value
      .split(' ')
      .map(value => value[0].toUpperCase() + value.slice(1, value.length))
      .join('');
  });

  plop.setHelper('eq', (arg1, arg2) => arg1 === arg2);

  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name'
      },
      {
        type: 'confirm',
        name: 'withProps',
        message: 'With props',
        default: true,
      },
      {
        type: 'list',
        name: 'withStyles',
        message: 'With stylesheet',
        choices: [
          {
            value: 'module',
            name: 'Yes, module .scss'
          },
          {
            value: 'default',
            name: 'Yes, default .scss',
          },
          {
            value: 'no',
            name: 'No',
          },
        ]
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{proper name}}/index.ts',
        templateFile: 'plop-templates/component/index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{proper name}}/{{proper name}}.tsx',
        templateFile: 'plop-templates/component/component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{proper name}}/{{proper name}}.scss',
        skip: ({ withStyles }) => withStyles !== 'default' ? 'No default styles' : false,
      },
      {
        type: 'add',
        path: 'src/components/{{proper name}}/{{proper name}}.module.scss',
        skip: ({ withStyles }) => withStyles !== 'module' ? 'No module styles' : false,
      },
    ]
  });
}

module.exports = generator;
