// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property;};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property,{

        enumerable:false,
        set: function (value) {
            property=value;
        },
        get: function () {
            return property;
        }

    });
    return property;
};
const createProtoMagicObject = () => {


};

var inc=0;
const incrementor = () => {
                inc++;
        return incrementor;};
Function.prototype.valueOf = function(){
    return inc;
}

var asyn=0;
const asyncIncrementor = () => {
    return new Promise ((resolve) => {
            asyn++;
    return resolve(asyn);
})
};
const createIncrementer = (back) => {
    new Promise(resolve =>
    setTimeout(() => {
        resolve(back)}, 1000));
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    var serialObject = null;
    return serialObject;
};
const toBuffer = () => {};
const sortByProto = (array) => {return array.sort((a,b)=>( a.__proto__ - b.__proto__));};

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