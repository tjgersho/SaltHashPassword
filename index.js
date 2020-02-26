/*THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.*/

var cryptojs = require('crypto-js');

var SALT_WORK_FACTOR = 10;

var saltHashPswd = {};
//Custom Shaw256 with salt password comparitor:
function getSaltedHash(pswd, saltFactor){
    var saltedPassword = pswd  +  parseInt(10*Math.random()).toString();
    return  cryptojs.SHA256(saltedPassword).toString();
};

saltHashPswd.Sha256HashPassword = function(passwd){
   //gen hash password.
   var hash = getSaltedHash(passwd, SALT_WORK_FACTOR);
   return hash;
}


saltHashPswd.IsPasswordMatch = function(passwd, actualPwdHash){
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
