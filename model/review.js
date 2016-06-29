module.exports = function(sequelize, DataTypes){
  return sequelize.define(
    'Review',
    {
      personId: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta id persona"} }
      },
      stars: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: {msg: "-> Falta valoracion"} }
      },
      description: {
        type: DataTypes.TEXT,
        validate: { notEmpty: {msg: "-> Falta comentario"} }
      },
      createDate: {
        type: DataTypes.DATE,
        validate: { notEmpty: {msg: "-> Falta fecha de creacion"} }
      }
    }
  );
}