FX Validator
---
A simple javascript data validator based on object.

## API
##### new FxValidator(data,model)
Create a validation instance.
```js
// Create a validator instance and bind data.
// Object of form field for store user input data.
let formFields = {
    id:'',
    name:''
};
// Object of validation model
let validationModel = {
    //properties should correspond to form fields
    id:{
        //define rules
        rules:{
            //add validator for this field
            required:{},
        }
    },
    name:{
        rules:{
            //set this field must have value
            required:{},
            minlen:{
                //set a boundary value for the validator
                //in this case, name field is invalid when string length is less then 2 chars, will be invalid
                value:2
                //define a custom invalid message for the validator
                message:'This field is required.'
            },
            without:{
                //value can be a function
                value:()=>existedName
            }
        }
    }
}
let validation = new FxValidator(formData,validationModel);
```

##### FxValidator.prototype.bind(data,model)
Bind or rebind data and model for validator.
Former bind will be unbinded.
```js
// Bind data to an existed instance
let validation = new FxValidator();
let formData = {
    id:'',
    name:''
};
let validationModel = {
    id:{
        rules:{}
    },
    name:{
        rules:{}
    }
}
validation.bind(formData,validationModel);
```

##### FxValidator.prototype.validate()

Validate data.

Validation result object will be injected to each property in model.
```js
// Validate data
let isValid = validation.validate()
let idValidationResult = validationModel.id.result
```

## Result Model
Validation result will be injected into validation model when binded.
```js
let validationModel = {
    //use key as field name
    id:{
        //user defined rules
        rules:{
            // validators
        },
        //auto generated result data
        result:{
            //field invalid flag
            invalid:false,
            //invalid message array
            messages:[],
            //validator status
            validators:{
                required:{
                    invalid:false
                }
            }
        }
    }
}
```


## Validators

##### Validator name (model value)
* required(): Invalid when data is empty string or undefined
* max(number): Invalid when data is not a number or is more then setting value
* min(number): Invalid when data is not a number or is less then setting value
* maxlen(number): Invalid when data is not a string or an array, or the length is more then setting value
* minlen(number): Invalid when data is not a string or an array, or the length is less then setting value
* within(Array): Invalid when data is not existed in array
* without(Array): Invalid when array contains the data
* regexp(string | RegExp): Invalid when data is not match pattern