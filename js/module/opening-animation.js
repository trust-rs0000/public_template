export default class OpeningAnimation {
  constructor(loader) {
    this.loader = loader;
  }

  checkVisited(classNameVisited = "js-visited", classNameFirstVisit = "js-first-visit") {
    if (sessionStorage.getItem("visited")) {
      this.loader.classList.add(classNameVisited);
    } else {
      this.loader.classList.add(classNameFirstVisit);
      sessionStorage.setItem("visited", true);
    }
  }
}
