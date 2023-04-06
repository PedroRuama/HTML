// local reviews data
const reviews = [
  {
    // arry 0
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    // arry 1
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://media.licdn.com/dms/image/C4D03AQEi00cpgb4CGw/profile-displayphoto-shrink_800_800/0/1580210410567?e=2147483647&v=beta&t=Lo1jVUUst4rWDEzXBoltIgomsiZGpWJ2ZEkws9c7a_c',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    // arry 2
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    // arry 3
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },

  {
    // arry 4
    id: 5,
    name: 'sara jones',
    job: 'ux designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?',
  }
];

let i = -1

function next() {
  if (i < 4) {
    i++
    document.getElementById("person-img").src = reviews[i].img
    document.getElementById("author").innerText = reviews[i].name
    document.getElementById("info").innerText = reviews[i].text
    document.getElementById("job").innerText = reviews[i].job
  }
  else {
    i = -1
  }
}
function back() {
  i--
  if (i < 0) {
    i = 4
  }
  document.getElementById("person-img").src = reviews[i].img
  document.getElementById("author").innerText = reviews[i].name
  document.getElementById("info").innerText = reviews[i].text
  document.getElementById("job").innerText = reviews[i].job
}
function surpr() {
  i = Math.floor(Math.random() * 5) //numeros aleatorios de 0 a 4 
  document.getElementById("person-img").src = reviews[i].img
  document.getElementById("author").innerText = reviews[i].name
  document.getElementById("info").innerText = reviews[i].text
  document.getElementById("job").innerText = reviews[i].job

}

