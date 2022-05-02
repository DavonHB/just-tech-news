const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class User extends Model {}

// define table columns and configuration 
User.init(
    {
        // define an id column
        id: {
            // use special sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the primary key
            primaryKey: true,
            // turn on auto increment 
            autoIncrement: true
        },
        // define a username column 
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // deifne an email column 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicate email values 
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be a set length
                len: [4]
            }
        },

    },
    {
        //TABLE CONFIGURATION OPTIONS (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // pass in imported sequelize connection (direct connection to our database)
        sequelize,
        // dont automatically create createdAt/updatedAt timestamp fields
        freezeTableName: true,
        // use underscore instead of camel-casing 
        underscored: true,
        // make it so the model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;