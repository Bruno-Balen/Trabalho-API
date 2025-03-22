const SENHA_VALIDA = 'testando123';
//Realiza a validação da senha
function validarDelete(req, res, next) {
 const senha = req.query.senha;
   if (!senha || senha !== SENHA_VALIDA) {
     return res.status(400).json({ mensagem: 'Senha incorreta' });  
    }

  next();
}

module.exports = {validarDelete};