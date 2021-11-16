const room_img = document.querySelector('.room_img');
const room_name = document.querySelector('.room_name');
const products = document.querySelector('.products');
const mainImage = document.querySelector('.mainImage');
const ask = document.querySelector('.ask');
const vision = document.querySelector('.vision');
const vision_img = document.querySelector('.vision_img');
const footer = document.querySelector('.footer');

//icon section
const bed = document.querySelector('.bed');
bed.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/bed_img.png');
});

const bath = document.querySelector('.bath');
bath.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/bath_img.png');
});

const kitchen = document.querySelector('.kitchen');
kitchen.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/kitchen_img.png');
});

const dining = document.querySelector('.dining');
dining.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/dining_img.png');
});

const living = document.querySelector('.living');
living.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/living_img.png');
});

const children = document.querySelector('.children');
children.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/children_img.png');
});

const outdoor = document.querySelector('.outdoor');
outdoor.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/outdoor_img.png');
});

const office = document.querySelector('.office');
office.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/office_img.png');
});

const hallway = document.querySelector('.hallway');
hallway.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/hallway_img.png');
});

mainImage.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/sale.png');
});
vision.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/sale.png');
});
vision_img.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/sale.png');
});
footer.addEventListener('mouseover',() => {
    room_img.setAttribute('src','imgs/sale.png');
});


// ask section
mainImage.addEventListener('mouseover',() => {
    ask.classList.remove('d-none');
});
mainImage.addEventListener('mouseout',() => {
    ask.classList.add('d-none');
});