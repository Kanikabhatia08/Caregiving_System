import p1 from "./images/webdev2.jpg"
import p2 from "./images/webdev.jpg"
import p3 from "./images/javascript.jpg"
import p4 from "./images/php.jpg"
import p5 from "./images/digital.jpg"
import p6 from "./images/testing.jpg"
import p7 from "./images/uiux.jpg"
import p8 from "./images/cyber.jpg"
import p9 from "./images/devops.jpg"


export const categories = [
  {
    id: 1,
    title: "Cancer",
    count: 10,
    image: "./images/cancer.png"
  },
  {
    id: 2,
    title: "Diabetes",
    count: 9,
    image: "./images/diabetes.png"
  },
  {
    id: 3,
    title: "Cardiovascular",
    count: 8,
    image: "./images/heart.png"
  },
  {
    id: 4,
    title: "Neurology",
    count: 7,
    image: "./images/brain.png"
  },
  {
    id: 5,
    title: "Respiratory",
    count: 6,
    image: "./images/lungs.png"
  },
  {
    id: 6,
    title: "Orthopedic",
    count: 11,
    image: "./images/bone.png"
  },
  {
    id: 7,
    title: "Dermatology",
    count: 5,
    image: "./images/skin.png"
  },
  {
    id: 8,
    title: "Gastroenterology",
    count: 9,
    image: "./images/stomach.png"
  },
  {
    id: 9,
    title: "Pediatrics",
    count: 5,
    image: "./images/kids.png"
  },
  {
    id: 10,
    title: "Psychiatry",
    count: 4,
    image: "./images/mind.png"
  },
];


export const featured = [
  {
    id: 1,
    image: "./images/dr_sharma.png",
    sub: "Dr. Anil Sharma",
    title: "Oncologist",
    weekImg: "./icons/availability.png",
    clock: "./icons/clock.png",
    duration: 15,
    students: 300,  // Using as 'patients served'
    cost: "₹1000"
  },
  {
    id: 2,
    image: "./images/dr_gupta.png",
    sub: "Dr. Neha Gupta",
    title: "Endocrinologist",
    weekImg: "./icons/availability.png",
    clock: "./icons/clock.png",
    duration: 10,
    students: 250,
    cost: "₹800"
  },
  {
    id: 3,
    image: "./images/dr_singh.png",
    sub: "Dr. Rajat Singh",
    title: "Cardiologist",
    weekImg: "./icons/availability.png",
    clock: "./icons/clock.png",
    duration: 20,
    students: 400,
    cost: "₹1200"
  },
  {
    id: 4,
    image: "./images/dr_kapoor.png",
    sub: "Dr. Meera Kapoor",
    title: "Neurologist",
    weekImg: "./icons/availability.png",
    clock: "./icons/clock.png",
    duration: 12,
    students: 270,
    cost: "₹900"
  },
  {
    id: 5,
    image: "./images/dr_iyer.png",
    sub: "Dr. Ramesh Iyer",
    title: "Pulmonologist",
    weekImg: "./icons/availability.png",
    clock: "./icons/clock.png",
    duration: 18,
    students: 320,
    cost: "₹950"
  },
  {
    id: 6,
    image: "./images/dr_rao.png",
    sub: "Dr. Sushmita Rao",
    title: "Dermatologist",
    weekImg: "./icons/availability.png",
    clock: "./icons/clock.png",
    duration: 8,
    students: 200,
    cost: "₹700"
  }
];


export const products = [
  {
    "id": 1,
    "name": " Full Stack Project",
    "price": 200,
    "image": p1,
    "count": 1
  },
  {
    "id": 2,
    "name": " MERN Stack ",
    "price": 250,
    "image": p2,
    "count": 1
  },
  {
    "id": 3,
    "name": " One Week JS",
    "price": 290,
    "image": p3,
    "count": 1
  },
  {
    "id": 4,
    "name": " PHP & Laravel",
    "price": 200,
    "image": p4,
    "count": 1
  },
  {
    "id": 5,
    "name": " Digital Marketing",
    "price": 300,
    "image": p5,
    "count": 1
  },
  {
    "id": 6,
    "name": " Testing & QA",
    "price": 200,
    "image": p6,
    "count": 1
  },
  {
    "id": 7,
    "name": " UI UX Design",
    "price": 200,
    "image": p7,
    "count": 1
  },
  {
    "id": 8,
    "name": " Cyber Security",
    "price": 200,
    "image": p8,
    "count": 1
  },
  {
    "id": 9,
    "name": " Learn DevOps",
    "price": 200,
    "image": p9,
    "count": 1
  }

]
export default products;