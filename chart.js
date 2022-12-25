// ----------- MOMENT------------
// russia
const moment = require("moment");
require("moment/locale/ru");

const dateRu = document.querySelector(".dashboard-date-ru");
let nowRu = moment();

moment.locale("ru");
dateRu.innerHTML = nowRu.format("LLLL");

// canada
require("moment/locale/en-ca");

const dateEn = document.querySelector(".dashboard-date-en");
let nowEn = moment();

moment.locale("en-ca");
dateEn.innerHTML = nowEn.format("LLLL");

// serbia
require("moment/locale/sr");

const dateSr = document.querySelector(".dashboard-date-sr");
let nowSr = moment();

moment.locale("sr");
dateSr.innerHTML = nowSr.format("LLLL");

// arabic(morocco)
require("moment/locale/ar-ma");

const dateAr = document.querySelector(".dashboard-date-ar-ma");
let nowAr = moment();

moment.locale("ar-ma");
dateAr.innerHTML = nowAr.format("LLLL");

// ------------- ANIME------------------
const anime = require("animejs");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
btn1.addEventListener("click", function () {
  anime({
    targets: ".square",
    translateX: 250,
    rotateZ: 360,
    scale: 2,
    duration: 10000,
    loop: true,
  });
});
btn2.addEventListener("click", function () {
  anime({
    targets: ".sq4",
    translateX: 450,
    backgroundColor: "rgb(154, 224, 122)",
    scale: 3,
    borderRadius: ["0%", "50%"],
    easing: "easeInOutQuad",
  });
});

// ----------- BOOTSTRAP DRAG AND DROP------------

(function () {
  let row = document.querySelectorAll(".row");
  let cols = document.querySelectorAll(".col");
  this.handleDragStart = function (e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("chart", this.innerHTML);

    dragSrcEl_ = this;

    // this/e.target is the source node.
    this.classList.add("moving");
  };

  this.handleDragOver = function (e) {
    if (e.preventDefault) {
      e.preventDefault(); // Allows us to drop.
    }

    e.dataTransfer.dropEffect = "move";

    return false;
  };
  this.handleDragEnter = function (e) {
    this.classList.add("over");
  };

  this.handleDragLeave = function (e) {
    // this/e.target is previous target element.
    this.classList.remove("over");
  };

  this.handleDrop = function (e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    //Don't do anything if we're dropping on the same column we're dragging.
    if (dragSrcEl_ != this) {
      console.log(dragSrcEl_.innerHTML);
      dragSrcEl_.innerHTML = this.innerHTML;
      console.log(dragSrcEl_.innerHTML);
      this.innerHTML = e.dataTransfer.getData("chart");
    }

    return false;
  };

  this.handleDragEnd = function (e) {
    // this/e.target is the source node.
    [].forEach.call(cols, function (col) {
      col.classList.remove("over");
      col.classList.remove("moving");
    });
  };

  [].forEach.call(cols, function (col) {
    col.setAttribute("draggable", "true"); // Enable columns to be draggable.
    col.addEventListener("dragstart", this.handleDragStart, false);
    col.addEventListener("dragenter", this.handleDragEnter, false);
    col.addEventListener("dragover", this.handleDragOver, false);
    col.addEventListener("dragleave", this.handleDragLeave, false);
    col.addEventListener("drop", this.handleDrop, false);
    col.addEventListener("dragend", this.handleDragEnd, false);
  });
})();

// ---------------- ПЕРВЫЙ ГРАФИК ---------------

const ctx = document.getElementById("myChart1").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: [
      "Pen",
      "Pencil",
      "Copybook",
      "Notebook",
      "Folder",
      "Ruler",
      "Schoolbag",
    ],
    datasets: [
      {
        label: "School supplies",
        backgroundColor: [
          "rgb(135, 206, 250)",
          "rgb(238, 130, 238)",
          "rgb(210, 180, 140)",
          "rgb(152, 251, 152)",
          "rgb(211, 211, 211)",
          "orangered",
          "rgb(72, 61, 139)",
        ],
        borderColor: "rgb(11, 0, 0)",
        data: [62, 30, 93, 24, 30, 16, 31],
      },
    ],
  },

  options: {},
});

// ---------------- ВТОРОЙ ГРАФИК ---------------

const ctx2 = document.getElementById("myChart2").getContext("2d");
const chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: [
      "Pen",
      "Pencil",
      "Copybook",
      "Notebook",
      "Folders",
      "Ruler",
      "Schoolbag",
    ],
    datasets: [
      {
        label: "School supplies",
        // backgroundColor: [
        //   "rgb(135, 206, 250)",
        //   "rgb(238, 130, 238)",
        //   "rgb(210, 180, 140)",
        //   "rgb(107, 142, 35)",
        //   "rgb(211, 211, 211)",
        //   "orangered",
        //   "rgb(72, 61, 139)",
        // ],
        // tension: 0.5,
        borderColor: "rgb(106, 90, 205)",
        // hoverBorderColor: "orangered",
        pointBackgroundColor: "orangered",
        pointBorderColor: "purple",
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverBackgroundColor: "black",
        pointStyle: "square",
        pointHoverBorderColor: "yellow",
        data: [62, 30, 93, 24, 30, 16, 31],
      },
    ],
  },

  options: {},
});

// ---------------- ТРЕТИЙ ГРАФИК ---------------

const ctx3 = document.getElementById("myChart3").getContext("2d");
const chart3 = new Chart(ctx3, {
  // The type of chart we want to create
  type: "doughnut",
  data: {
    labels: [
      "Pen",
      "Pencil",
      "Copybook",
      "Notebook",
      "Folders",
      "Ruler",
      "Schoolbag",
    ],
    datasets: [
      {
        label: "School supplies",
        backgroundColor: [
          "rgb(135, 206, 250)",
          "rgb(238, 130, 238)",
          "rgb(210, 180, 140)",
          "rgb(152, 251, 152)",
          "rgb(211, 211, 211)",
          "orangered",
          "rgb(72, 61, 139)",
        ],
        // borderColor: "rgb(255, 99, 132)",
        data: [62, 30, 93, 24, 30, 16, 31],
      },
    ],
  },
  options: {},
});

// ------------------ ЧЕТВЕРТЫЙ ГРАФИК -----------

const ctx4 = document.getElementById("myChart4").getContext("2d");
const chart4 = new Chart(ctx4, {
  type: "polarArea",

  data: {
    labels: [
      "Pen",
      "Pencil",
      "Copybook",
      "Notebook",
      "Folder",
      "Ruler",
      "Schoolbag",
    ],
    datasets: [
      {
        label: "School supplies",
        backgroundColor: [
          "rgba(135, 206, 250,0.7)",
          "rgba(238, 130, 238,0.5)",
          "rgba(210, 180, 140,0.5)",
          "rgba(152, 251, 152,0.5)",
          "rgba(211, 211, 211,0.5)",
          "orangered",
          "rgba(72, 61, 139,0.5)",
        ],
        borderColor: "rgba(11, 11, 11, 0.5)",

        data: [62, 30, 93, 24, 30, 16, 31],
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// ------------------ ПЯТЫЙ ГРАФИК -----------

const ctx5 = document.getElementById("myChart5").getContext("2d");
const mixedChart = new Chart(ctx5, {
  type: "bar",
  data: {
    datasets: [
      {
        type: "bar",
        label: "SCHOOL SUPPLIES (Bar Dataset)",
        data: [62, 30, 93, 24, 30, 16, 31],
        // order: 2,
        backgroundColor: [
          "rgb(135, 206, 250)",
          "rgb(238, 130, 238)",
          "rgb(210, 180, 140)",
          "rgb(152, 251, 152)",
          "rgb(211, 211, 211)",
          "orangered",
          "rgb(72, 61, 139)",
        ],
        // borderColor: "rgb(11, 0, 0)",
      },
      {
        type: "line",
        label: "SCHOOL SUPPLIES (Line Dataset)",
        data: [100, 100, 100, 100, 100, 100, 100],
        // order: 1,
        borderColor: "rgb(75, 0, 130)",
      },
    ],
    labels: [
      "Pen",
      "Pencil",
      "Copybook",
      "Notebook",
      "Folder",
      "Ruler",
      "Schoolbag",
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// ---------------- ШЕСТОЙ ГРАФИК ---------------

const ctx6 = document.getElementById("myChart6").getContext("2d");
const chart6 = new Chart(ctx6, {
  // The type of chart we want to create
  type: "radar",
  data: {
    labels: [
      "Pen",
      "Pencil",
      "Copybook",
      "Notebook",
      "Folders",
      "Ruler",
      "Schoolbag",
    ],
    datasets: [
      {
        label: "SCHOOL SUPPLIES (First)",
        data: [62, 30, 93, 24, 30, 16, 31],
        fill: true,
        backgroundColor: "rgb(255, 255, 0, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "SCHOOL SUPPLIES (Second)",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  },
  options: {},
});

// ---------------- СЕДЬМОЙ ГРАФИК ---------------

const ctx7 = document.getElementById("myChart7").getContext("2d");
const chart7 = new Chart(ctx7, {
  // The type of chart we want to create
  type: "bubble",
  data: {
    datasets: [
      {
        label: "School supplies",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 60,
            y: 44,
            r: 8,
          },
          {
            x: 82,
            y: 29,
            r: 18,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
          {
            x: 10,
            y: 53,
            r: 10,
          },
          {
            x: 49,
            y: 24,
            r: 9,
          },
          {
            x: 67,
            y: 33,
            r: 17,
          },
        ],
        backgroundColor: [
          "rgb(135, 206, 250)",
          "rgb(238, 130, 238)",
          "rgb(210, 180, 140)",
          "rgb(152, 251, 152)",
          "rgb(211, 211, 211)",
          "orangered",
          "rgb(72, 61, 139)",
        ],
        pointStyle: "rectRot",
      },
      // borderColor: "rgb(255, 99, 132)",
    ],
    labels: [
      "Pen",
      "Pencil",
      "Copybook",
      "Notebook",
      "Folders",
      "Ruler",
      "Schoolbag",
    ],
  },
  options: {},
});

// module.exports = {
//   entry: "./grayscale.js",
// };

// ----------- SHARP------------

// const fs = require("fs");
// const sharp = require("sharp");
// const convertTograyscale = () => {
//   sharp("./images/robo.jpg")
//     .grayscale() // or .greyscale()
//     .toFile("./processed_images/grayscale_robo.jpg");
// };

// convertTograyscale();

// const sharp = require("sharp");

// const rotateImage = () => {
//   sharp("./images/robo.jpg")
//     .rotate(250)
//     .toFile("./processed_images/rotate_robo.jpg");
// };

// rotateImage();

// ----------- GM ------------
// GraphicsMagick and ImageMagick for node

// const fs = require("fs");
// const gm = require("gm").subClass({ imageMagick: "7+" });
