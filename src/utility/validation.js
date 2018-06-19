const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for (let rule in rules) {
        console.log("the rule is:"+rule)
      switch (rule) {
        case "isEmail":
          isValid = isValid && emailValidator(val);
          break;
        case "minLength":
          isValid = isValid && minLengthValidator(val, rules[rule]);
          break;
        case "equalTo":
          isValid = isValid && equalToValidator(val, connectedValue[rule]);
          break;
          case "containesLetterAndNumber":
          isValid=isValid && containsLetterAndNoValidator(val);
          break;
        default:
          isValid = true;
      }
    }
    
    return isValid;
  };
  const containsLetterAndNoValidator=(val)=>{
      console.log("inside contains letter and number validator");
      return /(?=.*\d)(?=.*[a-zA-Z])/.test(
        val
      );
  }
  
  const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      val
    );
  };
  
  const minLengthValidator = (val, minLength) => {
      return val.length >= minLength;
  };
  
  const equalToValidator = (val, checkValue) => {
      return val === checkValue;
  };
  
  export default validate;