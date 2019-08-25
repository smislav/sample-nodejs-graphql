'use strict';

const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: 'Password can\'t be empty'}
            },
            set(value) {
                this.setDataValue('password', bcrypt.hashSync(value, 10));
            }
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: {msg: 'Please provide valid e-mail address'}
            }
        }
    }, {});
    User.associate = function (models) {
    };
    return User;
};
