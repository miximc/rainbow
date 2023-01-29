// 1. Создать чистый пустой документ.
// Написать в нем радужными цветами 7 радужных заголовков
// h1 с цветами внутри с помощью js и с помощью django
let colors =  [
    'red',
    'orange',
    'yellow',
    'green',
    'aqua',
    'blue',
    'violet'
];
let rainb = [
    'Красный',
    'Оранжевый',
    'Желтый',
    'Зеленый',
    'Голубой',
    'Синий',
    'Фиолетовый'
];
class Rainbow {
    create_each_color() {
        let my_rainbow = document.createElement('span');
        for (var i=0; i < colors.length;i++){
            let key = document.createElement('h1');
            key.innerHTML = rainb[i];
            key.style.color = colors[i];
            my_rainbow.appendChild(key);
            
        }
        return my_rainbow
    }
}
window.onload = () => {
    var r = new Rainbow(1);
    console.log(r.create_each_color());
    document.getElementById('color').appendChild(r.create_each_color());
};