module.exports = function(sequelize, DataTypes){
  return sequelize.define(
    'Person',
    {
      nick: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Nombre"} }
      },
      job: {
        type: DataTypes.TEXT,
        validate: { notEmpty: {msg: "-> Falta descripcion"} }
      },
      profileImg: {
        type: DataTypes.TEXT,
        validate: { notEmpty: {msg: "-> Falta imagen de perfil"} }
      },
      background: {
        type: DataTypes.TEXT,
        validate: { notEmpty: {msg: "-> Falta imagen de fondo"} }
      }
    }
  );
}