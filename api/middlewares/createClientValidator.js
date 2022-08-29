/**
 * 1.- Un schema de joi
 * 2.- Validar en un try catch
 */
 import joi from 'joi';

 /**
  *  name: String,
  birthday: Date,
  address: String,
  references: [
    {
      name: String,
      phone: String,
      email: String,
    },
  ],
  email: String,
  phone: String,
  */
 const createClientSchema = joi.object({
     //campos a validar
     name: joi.string().required(),
     birthday: joi.date().required(),
     address: joi.array().items(joi.string()),
     references: joi.array.items(
        joi.object({
            name: joi.string(),
            phone: joi.string()

        }),
     ),
     email: joi.string(),
     phone: joi.string(),
    
 })
 
 export default async (req,res,next) => {
     try {
     //TODO: validacion
         await createClientSchema.validateAsync(req.body);
         next();
     } catch (error) {
         return res.status(400).json({
             msg:'Error de validacion',
             error,
         })
     }
 
 };