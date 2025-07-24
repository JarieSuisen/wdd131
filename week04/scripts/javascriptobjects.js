let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
};

const word1 = "SUCCESS"

function word(topic) {
    if (topic.sections[0].enrolled == 95)
        return word1;
    else
        return "failure";
}


const text = document.querySelector("#printout");


text.innerHTML = `<span class="highlight">${word(aCourse)}</span>`;




//+++++ STUFF I HAD TO COPY TO START UNDERSTANDING WHAT THEY WANTED:



// SERIOUSLY???!?!!! THIS WAS NOT COVERED AT ALL AND IT STRAIGHT-UP CONTRADICTS THE EXAMPLE ANSWERS!!!!!

function setCourseInformation(course) {
    document.querySelector(
        "#courseName"
    ).innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td>
  </tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
