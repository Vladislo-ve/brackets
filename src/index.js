module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.map(item => item.join(''));
  let string = str;

  if(string.length % 2 === 1) {
    return false;
  }

  for(let i = 0; i < config.length;) {
    let elem = config[i];

    if(string.indexOf(elem) == -1) {
      i++;
    }
    else {
      string = string.replace(elem, '');
      i = 0;
    }
  }

  if(string === '') {
    return true;
  }
  else return false;
}
