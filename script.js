console.log("Welcome to Dhanusheya Portfolio");

document.querySelectorAll(".skill-box div").forEach(skill=>{
skill.addEventListener("mouseover",()=>{
skill.style.background="#2563eb";
skill.style.color="white";
});

skill.addEventListener("mouseout",()=>{
skill.style.background="#eeeeee";
skill.style.color="black";
});
});