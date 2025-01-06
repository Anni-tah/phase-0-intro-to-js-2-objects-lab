const employee = {
    fname :'Ethan Agoi',
    streetAddress : 'Kimathi Street',

}
function updateEmployeeWithKeyAndValue(obj,key,value){
   const newObj= {...obj};
    newObj[key]=value;
    return newObj;
}
const employee1=updateEmployeeWithKeyAndValue(employee,'fname','Anne Nabwire');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key,value){
    obj[key]=value;
    return obj;

 }
 const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee1, 'streetAdress', 'Oginga Odinga street')

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj[key];
    return newObj;

} 
const employee3= deleteFromEmployeeByKey(employee,'fname');

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
