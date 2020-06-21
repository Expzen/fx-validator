function required(data){
    if(data === null || data === '' || data === undefined){
        return false;
    }
    return true;
}

function maxlen(data, param){
    if(typeof data === 'string' || Array.isArray(data))
    {
        return data.length <= param;
    }
    return false;
}

function minlen(data, param){
    if(typeof data === 'string' || Array.isArray(data))
    {
        return data.length >= param;
    }
    return false;
}

function max(data, param){
    let num = Number(data);
    let limit = Number(param);
    return num <= limit;
}

function min(data, param){
    let num = Number(data);
    let limit = Number(param);
    return num >= limit;
}

function within(data,param){
    if(Array.isArray(param))
    {
        return param.findIndex(m=>m == data) >= 0;
    }
    return false;
}

function without(data,param){
    if(Array.isArray(param))
    {
        return param.findIndex(m=>m == data) < 0;
    }
    return true;
}

function regex(data, param){
    if(typeof param == 'string')
    {
        param = RegExp(param);
    }
    if(param instanceof RegExp)
    {
        return param.test(data);
    }
    console.error('Regular expression error, validator value is not a RegExp object or pattern string');
    return false;
}

export default{
    required,maxlen,minlen,within,max,min,without,regex
}