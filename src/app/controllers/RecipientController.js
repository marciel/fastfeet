import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController{
  async store(req,res){

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      cidade: Yup.string(),
      estado: Yup.string(),
      cep: Yup.string(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Dados inválidos.'});
    }

    const {id,nome} = await Recipient.create(req.body);

    return res.json({id,nome});
  }

  async update(req,res){

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      cidade: Yup.string(),
      estado: Yup.string(),
      cep: Yup.string(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Dados inválidos.'});
    }

    const id = req.params.id;

    const recipient = await Recipient.findByPk(id);

    if(!recipient){
      return res.status(400).json({error: "Destinatário não encontrado."});
    }

    await recipient.update(req.body);

    return res.json({sucess:"Destinatário atualizado."});
  }

  async delete(req,res){

    const id = req.params.id;

    const recipient = await Recipient.findByPk(id);

    if(!recipient){
      return res.status(400).json({error: "Destinatário não encontrado."});
    }

    await recipient.destroy();

    return res.json({sucess:"Destinatário excluído."});
  }
}

export default new RecipientController();
