const car_links = ["img/car.jpg", "img/car_2.jpg", "img/car_3.png"];
const car_names = ["Porshe 911 2024", "Ford Mustang GT 350","Bugatti Veyron"];
const car_facts = ["The fastest Porshe Ever made!", "The “350” in GT 350 stands for the amount of steps it took to walk from the Ford production shop to the racing shop.", "The first production car to break the 400 kmph barier!"];
const car_power = ["379 - 640 hp", "526 hp", "736 - 1,118 hp"];
const car_aceleration = ["3.5 sec", "4 sec", "2.5 sec"];
const cars_sold = ["50,146", "23,574", "450"];
const price_range = ["$116,050 - $223,650", " $61,635 - $74,630", "$1.9 million - $3.4 million"];
let currentIndex = 1;

function nextCar() {
    if (currentIndex > car_links.length-1){
        currentIndex = 0;
    }

    let image = document.getElementById("img_left");
    image.src = car_links[currentIndex];

    let name = document.getElementById("car_of_the_day_name");
    name.innerText = car_names[currentIndex];

    let fact = document.getElementById("car_of_the_day_fact");
    fact.innerText = car_facts[currentIndex];

    let power = document.getElementById("car_power_id");
    power.innerText = car_power[currentIndex];

    let aceleration = document.getElementById("car_aceleration_id");
    aceleration.innerText = car_aceleration[currentIndex];

    let sold = document.getElementById("cars_sold");
    sold.innerText = cars_sold[currentIndex];

    let price = document.getElementById("car_price");
    price.innerText = price_range[currentIndex];

    currentIndex ++;

}