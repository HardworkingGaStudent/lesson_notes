## Validations

Sequelize has a bunch of validations we can add to our models to ensure that our data has met certain criteria before add it to our database. To include validations in your model, wrap them in a validate object. An examples of this is validating an email address (making sure it has a @ etc. as well as ensuring that it is never null):

Read more about diffrent types of validations
http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations

**models/user.js**
```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
```

## Migrations

`npx sequelize migration:create --name migrationNameGoesHere`

This command creates a migration file, which is empty by default. Similar to Rails, you must specify the type of migration for both `up` and `down` methods.
The `up` method is the migration you want to run, while the `down` method is the reverse.

For example, if I add a column in `up`, I would also want to remove that same column in `down`.

[Migration Functions: http://docs.sequelizejs.com/en/latest/docs/migrations/#functions](http://docs.sequelizejs.com/en/latest/docs/migrations/#functions)

## Running a migration

Whenever we generate a migration, we have to run the migration to execute the `up` method (which we have in our migration - when we undo a migration we run the down method).
To run the `up` method, run in terminal `npx sequelize db:migrate`. For the `down` method, run `npx sequelize db:migrate:undo`.

NOTE: When creating your own migrations, you should specify actions for both `up` and `down` methods. Otherwise, running the down method will not revert your migration.

[Migration Documentation](http://docs.sequelizejs.com/en/latest/docs/migrations/#functions)