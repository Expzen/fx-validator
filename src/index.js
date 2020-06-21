import ValidationTarget from './validationTarget';
import messages from './messages';

/**
 * Create a validation model.
 * @param {*} data Data to validate
 * @param {*} model Validation configs
 */
function FxValidator(data, model) {

    this.targets = {};
    this.data = null;
    this.validation = {};
    this.bind(data, model);
    Object.defineProperty(this,'invalid',{
        get(){
            for (const key in this.targets) {
                if (Object.hasOwnProperty.call(this.targets,key)) {
                    const target = this.targets[key];
                    if(target.invalid)
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    })
}

/**
 * Bind data source and validation model. Former model will be unbinded.
 * @param {*} data Data to validate
 * @param {*} model Validation configs
 */
FxValidator.prototype.bind = function (data, model) {
    if (typeof data == 'object' || typeof data == 'function') {

        switch (typeof data) {
            case 'object':
                this.data = ()=>data;
                break;
            case 'function':
                this.data = data;
                break;
        }
    }
    else if(this.data == undefined) {
        return;
    }

    if (typeof model == 'object') {
        this.validation = model;
    }
    if (typeof this.validation != 'object') {
        return;
    }

    this.unbind();

    for (const key in this.validation) {
        if (Object.hasOwnProperty.call(this.validation, key) && key[0] != '$') {
            const propModel = this.validation[key];
            this.targets[key] = new ValidationTarget(propModel, this.data, key);
        }
    }

}

/**
 * Unbind validation model
 */
FxValidator.prototype.unbind = function(){
    for (const key in this.targets) {
        if (Object.hasOwnProperty.call(this.targets, key) && key[0] != '$') {
            if(typeof this.targets[key].dispose == 'function')
                this.targets[key].dispose();
            delete this.targets[key];
        }
    }
}

/**
 * Execute validate
 */
FxValidator.prototype.validate = function () {
    let invalid = false;
    for (const key in this.targets) {
        const target = this.targets[key];
        if(target instanceof ValidationTarget)
        {
            let targetResult = target.validate();
            invalid = invalid || !targetResult;
        }
    }
    this.validation.$invalid = invalid;
    return !invalid;
}

/**
 * Clear all invalid messages
 */
FxValidator.prototype.cleanMessage = function () {
    for (const key in this.targets) {
        const target = this.targets[key];
        if(target instanceof ValidationTarget)
        {
            target.cleanMessage();
        }
    }
}

/**
 * Default Validation messages
 */
FxValidator.validationMessages = messages;

export { FxValidator };