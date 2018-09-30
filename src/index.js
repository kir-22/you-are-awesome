// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property;};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property,{

        set: (value) => {
            property = value;
        },
        get: () => {
            return property;
        }

    });
    return property;
};
const createProtoMagicObject = () => {
    let func=new Function();
    func.__proto__=func.prototype;
    return func;
};

let inc = 0;
const incrementor = () => {
    inc++;
    incrementor.toString = function (){
        return inc;
    }
    return incrementor;
}

let  incAsyn=0;
const asyncIncrementor = () => {

return new Promise((resolve)=>{
        incAsyn++;
    return resolve(incAsyn);
})

};

const createIncrementer = (back) => {
    new Promise(resolve =>
    setTimeout(() => {
        return resolve(back)}, 1000));

    }
const createIncrementer = () => {
    

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};


const createSerializedObject = () => {
    return new Boolean(false);
};
const toBuffer = () => {};
const sortByProto = (array) => {
    return array.sort((a,b)=> {
        return ( a.__proto__ - b.__proto__);
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
