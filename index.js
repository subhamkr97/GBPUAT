var sources = [
    "main-images/admin_building.jpg",
    "main-images/01.jpg",
    "main-images/19.07.2023_img.jpg",
    "main-images/24.11.2022_mou1.jpeg",
    "main-images/30.03.2023_img.jpeg",
    "main-images/convocation.jpg",
    "main-images/gvisit.jpeg",
    "main-images/3.jpg",
    "main-images/9.jpg",
    "main-images/rep.jpg",

]

function turn(){
    var random = Math.floor(Math.random()*10);
    console.log(random);
    document.getElementById("frame").src=sources[random];
}