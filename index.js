const simpleUser = {
  name: "John",
  age: 25,
  title: "Software Engineer",
};

const simpleUserCopy1 = { ...simpleUser };
const simpleUserCopy2 = Object.assign({}, simpleUser);
const simpleUserCopy3 = Object.create(simpleUser);
const simpleUserCopy4 = JSON.parse(JSON.stringify(simpleUser));

const fullCopuUser = structuredClone(simpleUser); // самый верный вариант копирования всего объекта целиком но он не копирует instanseof с другого объекта
console.log(fullCopuUser);
