module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        course: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Students;
};