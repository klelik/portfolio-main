const projectsData = [
  {
    id: 1,
    title: "Weather Widget",
    description: "Weather Widget",
    img: "-proj.png",
    git: "https://github.com/klelik/weather-app",
    deploy: "https://github.com/klelik/weather-app",
  },
  {
    id: 2,
    title: "Calculator2",
    description: "Calculator in Vanilla Javascript",
    img: "-proj.png",
    git: "https://github.com/klelik/weather-app",

    deploy: "https://github.com/klelik/weather-app",
  },
  {
    id: 2,
    title: "Calculator3",
    description: "Calculator in Vanilla Javascript",
    img: "-proj.png",
    git: "https://github.com/klelik/weather-app",

    deploy: "https://github.com/klelik/weather-app",
  },
  {
    id: 3,
    title: "Calculator",
    description: "Calculator in Vanilla Javascript",
    img: "-proj.png",
    git: "https://github.com/klelik/weather-app",

    deploy: "https://github.com/klelik/weather-app",
  },
  {
    id: 4,
    title: "Calculator",
    description: "Calculator in Vanilla Javascript",
    img: "-proj.png",
    git: "https://github.com/klelik/weather-app",

    deploy: "https://github.com/klelik/weather-app",
  },
  {
    id: 5,
    title: "Calculator",
    description: "Calculator in Vanilla Javascript",
    img: "-proj.png",
    git: "https://github.com/klelik/weather-app",

    deploy: "https://github.com/klelik/weather-app",
  },
  {
    id: 6,
    title: "Calculator",
    description: "Calculator in Vanilla Javascript",
    img: "-proj.png",
    git: "https://github.com/klelik/weather-app",

    deploy: "https://github.com/klelik/weather-app",
  },
];

const contentBox = document.getElementById("dataContainer");
const dataBox = document.querySelector(".image-container");
console.log(contentBox);
console.log(dataBox);

const showData = projectsData.map((project, index) => {
  return `
    <div
    class="box bg-white flex flex-col justify-center items-center gap-5 transform transition duration-500 hover:scale-110 animate__animated animate__animated animate__fadeIn delay-3"
  >
    <img class="rounded-full" src="assets/${project.id}${project.img}" alt="" />
    <div class="info">
      <h3>${project.title}</h3>
    </div>
    <div class="text-center w-[60%]">
      <p>
        Lorem ipsum, dolor sit aque alias quia doloremque eos laboriotis
        incidunt quaerat, molestias eum.
      </p>
    </div>
    <div>
    <a href = "${project.git}" >      <button
    class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Github
  </button></a>
    <a href = "${project.git}" >      <button
    class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Preview
  </button></a>

    </div>
  </div>

    `;
});
console.log(showData);

contentBox.innerHTML = showData.join("");
