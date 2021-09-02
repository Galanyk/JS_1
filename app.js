alert('Добро пожаловать!!!');

let name = prompt('Как тебя зовут?');

let lastName = prompt('Какая у тебя фамилия?');

let fullname = `${name} ${lastName}`;

const age = confirm('Тебе есть 18 лет?');

if (age) {
    alert(`Поздравляем, ${fullname}, тебе положен бонус в виде шоколадки.`);
  
} else {
    alert(`${fullname}, тебе еще нет 18... У тебя все еще впереди...`)
};




