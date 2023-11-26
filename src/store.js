import { reactive } from "vue";

import axios from "axios";
export const store = reactive({
  projects: null,
  blog_api: "http://127.0.0.1:8000/api/project",
  blog_api_last: "http://127.0.0.1:8000/api/project/latest",
  tech_url: "http://127.0.0.1:8000/api/technologes",
  technologies: null,

  getPage(url) {
    axios
      .get(url)
      .then((response) => {
        this.projects = response.data.result;

        console.log(this.projects);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getImageUrl(coverImage) {
    if (coverImage && coverImage.includes("http")) {
      return coverImage;
    } else {
      return "http://127.0.0.1:8000/storage/" + coverImage;
    }
  },
  getTechnology(url) {
    axios
      .get(url)
      .then((response) => {
        this.technologies = response.data.result;
        console.log(this.technologies);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  prevPage(path) {
    console.log("path", path);
    this.getPage(path);
  },
  nextPage(path) {
    console.log("nextPage - path", path);
    this.getPage(path);
  },
});
