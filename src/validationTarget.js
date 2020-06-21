import validators from './validators';
import messages from './messages';


/**
 * Create a field valid instance.
 * @param {*} model - Validation config object
 * @param {*} data - Object to validate
 * @param {string} key - Field of object to validate
 */
function ValidationTarget(model, data, key) {
    this.model = model;
    this.key = key;
    this.result = {
        invalid: false,
        messages: [],
        validators: {}
    };
    Object.assign(this.model, { result: this.result });
    const that = this;

    Object.defineProperty(that, 'data', {
        configurable: true,
        get() {
            switch (typeof data) {
                case 'object':
                    return data[key];
                case 'function':
                    return data()[key];
                default:
                    return '';
            }
        },
        set(value) {
            switch (typeof data) {
                case 'object':
                    data[key] = value;
                    this.validate();
                    break;
                case 'function':
                    data()[key] = value;
                    this.validate();
                    break;
            }
        }
    });

}

/**
 * Do validate.
 */
ValidationTarget.prototype.validate = function () {
    let valid = true;
    let that = this;
    this.clearMessage();
    for (let ruleKey in that.model.rules) {
        const rule = that.model.rules[ruleKey];
        let itemValid = true;
        let ruleValue = typeof rule.value == 'function' ? rule.value() : rule.value;
        let data = that.data;
        if (validators[ruleKey]) {
            itemValid = validators[ruleKey](data, ruleValue);
            valid = valid && itemValid;
        }

        if (typeof that.result[ruleKey] != 'object') {
            Object.assign(that.result.validators, {
                [ruleKey]: { invalid: false }
            });
        }

        if (!itemValid) {
            let msg = getInvalidMessage({
                key: ruleKey,
                value: ruleValue,
                msg: rule.message,
                data: data || ''
            });
            that.result.messages.push(msg);
            that.result.validators[ruleKey].invalid = true;
        }
        else {
            that.result.validators[ruleKey].invalid = false;
        }
    }
    this.result.invalid = !valid;
    return valid;
}

/**
 * Clear all messages.
 */
ValidationTarget.prototype.clearMessage = function () {
    this.result.messages.splice(0, this.result.messages.length);
}

/**
 * Destroy object
 */
ValidationTarget.prototype.dispose = function () {
    delete this.model;
    delete this.key;
    delete this.data;
}


function getInvalidMessage(param) {
    let ruleMsg = param.msg;
    if (typeof ruleMsg != 'string') {
        ruleMsg = messages[param.key];
    }
    if (typeof ruleMsg == 'string') {
        return ruleMsg.replace(/%v/g, param.value)
            .replace(/%k/g, param.key)
            .replace(/%d/g, param.data);
    }
}

export default ValidationTarget;
