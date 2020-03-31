import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model{
  static init(sequelize){
    super.init(
    {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL, //campo apenas para interface, não existe na base de dados
      password_hash: Sequelize.STRING,
    },
    {
      sequelize,
    });

    return this;
  }

  //Verificação de senha são iguais, se batem, retorna true ou false, faz a comparação de hash
  checkPassword(password){
    return bcrypt.compare(password,this.password_hash);
  }

}

export default User;
