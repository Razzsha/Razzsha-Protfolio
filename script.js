let mode = document.querySelector("#btn1");

let currMode = "light"; //dark

mode.addEventListener("click", () => {


    if (currMode === "light") {
        currMode = "dark";

        document.querySelector("body").style.background = "#3cf";
    } else {
        currMode = "light";
        document.querySelector("body").style.background = "gray";
    }
    console.log(currMode);

});

document.getElementById("home-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
