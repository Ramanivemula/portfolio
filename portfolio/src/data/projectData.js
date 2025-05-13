// src/data/projectData.js
const projectData = [
  {
    title: "Food Nutrition App",
    image: "/projects/food.png", // place this image in /public/projects/
    description:
      "A health-focused app that lets users search and explore nutritional values of various food items using a public API.",
    stack: ["React", "Tailwind", "API", "Firebase"],
    github: "https://github.com/Ramanivemula/FoodNutrition",
  },
  {
    title: "CodeShare Platform",
    image: "/projects/code.png",
    description:
      "Collaborative code editor built with React and Socket.IO for real-time code sharing.",
    stack: ["React", "Socket.IO", "Node.js", "Express"],
    github: "https://github.com/Ramanivemula/CodeShare",
  },
  {
    title: "Quiz App",
    image: "/projects/quiz.png",
    description:
      "An interactive quiz app with timed questions, multiple categories and score tracking.",
    stack: ["React", "Redux", "HTML", "CSS"],
    github: "https://github.com/Ramanivemula/quizapp"
  },
  // add more...
];

export default projectData;
