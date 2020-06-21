
/**
 * %k : name of validator
 * %v : validator value
 * %d : data to be validated
 */
const messages = {
    'required':'必填欄位',
    'maxlen':'不應長於 %v',
    'minlen':'不應短於 %v',
    'max':'應不大於 %v',
    'min':'應不小於 %v',
    'within':'該值不在可用範圍內',
    'without':'該值不可在指定範圍內',
    'default':'未通過 %k 驗證'
}


export default messages;