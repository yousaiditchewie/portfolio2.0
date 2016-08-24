(function() {
  console.log("js loaded");

  // ELEVATOR JS VARIABLES AND FUNCTIONS
  var projects = document.getElementById("projectsLink");
  var aboutMe = document.getElementById("aboutMeLink");
  var contact = document.getElementById("contactLink");
  var aboutuslink = document.getElementById("aboutuslink");
  new Elevator({
    element: projects,
    targetElement: document.querySelector("#projects")
    });
  new Elevator({
    element: aboutMe,
    targetElement: document.querySelector("#aboutMe")
    });
  new Elevator({
    element: contact,
    targetElement: document.querySelector("#contact")
    });
  new Elevator({
    element: aboutuslink,
    targetElement: document.querySelector("#aboutus")
    });
})();
