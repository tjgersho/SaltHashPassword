var cryptojs = require('crypto-js');

var SALT_WORK_FACTOR = 10;

var saltHashPswd = {};
//Custom Shaw256 with salt password comparitor:
saltHashPswd.getSaltedHash = function(pswd, saltFactor){
    var saltedPassword = pswd  +  parseInt(10*Math.random()).toString();
    return  cryptojs.SHA256(saltedPassword).toString();
};

saltHashPswd.Sha256HashPassword(passwd){
   //gen hash password.
   var hash = getSaltedHash(passwd, SALT_WORK_FACTOR);
   return hash;
}


saltHashPswd.IsPasswordMatch(passwd, actualPwdHash){
   for(var i=0; i<= SALT_WORK_FACTOR; i++){
      //Compare  getSaltedHash..
      var testHash = getSaltedHash(passwd, SALT_WORK_FACTOR);
      if(testHash === actualPwdHash){
        return true;
      }
   }
   return false;
}

module.exports = saltHashPswd;
