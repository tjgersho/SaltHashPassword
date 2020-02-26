# SaltHashPassword

SaltHashPassword is a nodejs object for salt hashing passwords with SHA256 and a salt factor of 10.

## Installation

Use npm install

```bash
npm i salthashpassword
```

## Usage

```
var saltHash = require('salthashpassword');

var hashedPassword = saltHash.Sha256HashPassword('secretpassword');
if(saltHash.IsPasswordMatch("tryingtohack", hashedPassword)){
  console.log("You hacked in!!");
}else{
  console.log("Not allowed in.")
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://opensource.org/licenses/ISC)
