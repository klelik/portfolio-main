const projectsData = [
  {
    id: 1,
    title: "Travel Agency",
    description: "Travel Agency webpage built in React using React Routes",
    img: "travel-agency.png",
    git: "https://github.com/klelik/travel-agency",
    deploy: "https://klelik.github.io/travel-agency/",
  },
  {
    id: 2,
    title: "Weather Widget",
    description: "Shows weather and forecast in current or selected location",
    img: "weather2.png",
    git: "https://github.com/klelik/weather-app",
    deploy: "https://klelik.github.io/weather-app/",
  },
  {
    id: 3,
    title: "Dog Birthday Calculator",
    description: "Calculate the birthdays and age of your favourite companion",
    img: "dog-calculator.png",
    git: "https://github.com/klelik/dog-birthday-calculator",
    deploy: "https://klelik.github.io/dog-birthday-calculator/",
  },
  {
    id: 4,
    title: "Quote Machine",
    description: "Fetching and generating quotes from API, built in React",
    img: "quote.png",
    git: "https://github.com/klelik/quotte-machine",

    deploy: "https://klelik.github.io/quotte-machine/",
  },
  {
    id: 5,
    title: "Birthday Reminder",
    description: "Birthday reminder tool, send wishes automatically ",
    img: "birthday.png",
    git: "https://github.com/klelik/birthday-reminder",

    deploy: "https://klelik.github.io/birthday-reminder/",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    description: "Current Personal Portfolio",
    img: "portfolio.png",
    git: "https://github.com/klelik/portfolio-main",

    deploy: "https://github.io/klelik/weather-app",
  },
  {
    id: 7,
    title: "Airbnb Clone",
    description: "Clone of Airbnb main front page ",
    img: "airbnb.png",
    git: "https://github.com/klelik/airbnb-clone",

    deploy: "https://klelik.github.io/airbnb-clone/",
  },
  {
    id: 8,
    title: "Calculator",
    description: "Calculator in Vanilla Javascript",
    img: "calculator.png",
    git: "https://github.com/klelik/calculator",

    deploy: "https://klelik.github.io/calculator/",
  },
  {
    id: 9,
    title: "Pomodoro Timer",
    description: "A timer to manage your time, while studying",
    img: "pomodoro.png",
    git: "https://github.com/klelik/pomodoro-clock",

    deploy: "https://klelik.github.io/pomodoro-clock/",
  },
];
const contentBox = document.getElementById("dataContainer");
const dataBox = document.querySelector(".image-container");
console.log(contentBox);
console.log(dataBox);

const showData = projectsData.map((project, index) => {
  return `
    <div 
    class="box bg-white flex flex-col justify-center items-center gap-7  transform transition ease-in-out duration-500 hover:scale-105 animate__animated animate__animated animate__fadeIn delay-${
      project.id + 1
    }"
  >
    <img class="imageTransition  h-[150px] w-[150px]" src="assets/${
      project.img
    }" alt="${project.title}" />

    <div class="info">
      <h3>${project.title}</h3>
    </div>
    <div class="text-center w-[60%] opacity-[0.7]">
      <p>${project.description}</p>
    </div>
    <div class="flex flex-row justify-center items-center w-[100%]  ">
   
    <a href = "${
      project.git
    }" target="_blank">      <button type="button" class="btn text-white bg-[#68B7DE] hover:bg-[#79BFE2]/80  font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2">
    <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
    Github
  </button></a>
  
    <a href = "${
      project.deploy
    }" target="_blank">      <button type="button" class="btn text-white bg-[#68B7DE] hover:bg-[#79BFE2]/90  font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2">
       Preview<svg  class="ml-1  w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="butt" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
  </button></a>


    </div>
  </div>

    `;
});

contentBox.innerHTML = showData.join("");
console.log(window.scrollY);
