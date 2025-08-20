// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, textContent) => {
  const element = document.createElement(tagName);

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------
// containerCard_3(): Language's Function Start

const containerCard_3 = (...items) => {
  const container = document.getElementById(`container-3`);

  items.forEach(([src, alt, title, text, link]) => {
    // ELEMENTS
    const div = createElement(`div`);
    const figure = createElement(`figure`);
    const img = createElement(`img`);

    // ATTRIBUTES
    img.src = src;
    img.alt = alt;
    img.title = title;

    // CLASSNAME
    div.className = `container-item`;
    figure.className = `figure`;
    img.className = `figure-img`;

    // CARD BODY ELEMENTS
    const rhombus = createElement(`div`);
    const containerBody = createElement(`div`);
    const containerBox = createElement(`div`);
    const h4 = createElement(`h4`, title);
    const span = createElement(`span`, text);
    const a = createElement(`a`, `>`);

    // ATTRIBUTES
    a.href = `https://q3schools.com/${link}/`;

    // CLASSNAME
    rhombus.className = `rhombus-shape`;
    containerBody.className = `container-body`;
    containerBox.className = `container-box`;
    h4.className = `container-language`;
    span.className = `container-text`;
    a.className = `container-link`;

    // APPEND ELEMENTS
    container.append(div);
    div.append(figure, containerBody);
    figure.append(img, rhombus);
    containerBody.append(containerBox, a);
    containerBox.append(h4, span);
  });

  return container;
};

containerCard_3(
  [
    `src/language/C.png`,
    `c-programming language`,
    `C`,
    `A Programming Language`,
    `c-programming-tutorial`,
  ],
  [
    `src/language/C++.png`,
    `c-plus-plus programming language`,
    `C++`,
    `A Programming Language`,
    `c-plus-plus-tutorial`,
  ],
  [
    `src/language/Csharp.png`,
    `c-sharp programming language`,
    `C#`,
    `A Programming Language`,
    `c-sharp`,
  ],
  [
    `src/language/Python.png`,
    `python programming language`,
    `Python`,
    `A Programming Language`,
    `python-tutorial`,
  ],
  [
    `src/language/Java.png`,
    `java programming language`,
    `Java`,
    `A Programming Language`,
    `java-tutorial`,
  ],
  [
    `src/language/Kotlin.png`,
    `kotlin programming language`,
    `Kotlin`,
    `A Programming Language`,
    `kotlin`,
  ],
  [
    `src/language/HTML5.png`,
    `html markup language`,
    `HTML`,
    `A Markup Language`,
    `html`,
  ],
  [
    `src/language/CSS.png`,
    `css stylesheet language`,
    `CSS`,
    `A Stylesheet Language`,
    `css`,
  ],
  [
    `src/language/JavaScript.png`,
    `javascript scripting language`,
    `JavaScript`,
    `A Scripting Language`,
    `javascript`,
  ],
  [
    `src/language/SQL.png`,
    `sql domain-specific language`,
    `SQL`,
    `A Domain-specific Language`,
    `sql`,
  ],
  [
    `src/language/Wordpress.png`,
    `wordpress cms tool`,
    `Wordpress`,
    `A CMS Tool`,
    `wordpress`,
  ],
  [
    `src/language/ASP.Net.png`,
    `asp.net web-application framework`,
    `ASP.Net`,
    `A Web-application framework`,
    `asp-net`,
  ]
);

// containerCard_3(): Language's Function End
// --------------------------------------------
// containerCompiler_4(): Compilers Function Start

const containerCompiler_4 = (...items) => {
  const section = document.getElementById(`container-4`);

  items.forEach(([title, link, src, alt]) => {
    // ELEMENTS
    const div = createElement(`div`);
    const div2 = createElement(`div`);
    const span = createElement(`span`, title);
    const a = createElement(`a`);
    const figure = createElement(`figure`);
    const img = createElement(`img`);

    // ATTRIBUTES
    a.href = `https://q3schools.com/online-${link}`;
    img.src = src;
    img.alt = `${alt} Compiler`;
    img.title = `${alt} Compiler`;

    // CLASSNAME
    div.className = `container-item`;
    div2.className = `rhombus-shape`;
    span.className = `container-text`;
    a.className = `container-link`;
    figure.className = `figure`;
    img.className = `figure-img`;

    // APPEND ELEMENTS
    div.append(div2, span, a);
    a.appendChild(figure);
    figure.appendChild(img);
    section.append(div);
  });

  return section;
};

containerCompiler_4(
  [`HTML`, `html-css-compiler`, `src/language/HTML5.png`, `HTML CSS`],
  [
    `JavaScript`,
    `javascript-compiler`,
    `src/language/JavaScript.png`,
    `JavaScript`,
  ],
  [`Python`, `python-compiler-programiz`, `src/language/Python.png`, `Python`],
  [`Java`, `java-compiler`, `src/language/Java.png`, `Java`],
  [`C`, `c-language-compiler`, `src/language/C.png`, `C`],
  [`C++`, `c-plus-plus-compiler`, `src/language/C++.png`, `C++`],
  [`C#`, `c-sharp-compiler`, `src/language/Csharp.png`, `C#`]
);

// containerCompiler_4(): Compilers Function End
// --------------------------------------------
// containerCompiler_5(): Projects Function Start

const containerCompiler_5 = (...items) => {
  const section = document.getElementById(`container-5`);

  items.forEach(([src, iconSrc, title]) => {
    // ELEMENTS
    const div = createElement(`div`);
    const figure = createElement(`figure`);
    const img = createElement(`img`);
    const innerDiv = createElement(`div`);
    const a = createElement(`a`);
    const imgIcon = createElement(`img`);
    const span = createElement(`span`, title);

    // ATTRIBUTES
    img.src = src;
    img.alt = `${title} Project`;
    img.title = `${title} Project`;
    a.href = `#`;
    imgIcon.src = iconSrc;
    imgIcon.alt = title;

    // CLASSNAME
    div.className = `container-item`;
    figure.className = `figure`;
    img.className = `figure-img`;
    innerDiv.className = `container-inner`;
    a.className = `container-link`;
    imgIcon.className = `container-icon`;
    span.className = `container-text`;

    // APPEND ELEMENTS
    div.append(figure, innerDiv);

    figure.appendChild(img);
    innerDiv.appendChild(a);

    a.append(imgIcon, span);
    section.append(div);
  });

  return section;
};

containerCompiler_5(
  [`src/project/Project 1.png`, `src/language/Python.png`, `Python`],
  [`src/project/Project 2.png`, `src/language/Java.png`, `Java`],
  [`src/project/Project 3.jpg`, `src/language/JavaScript.png`, `JavaScript`],
  [`src/project/Project 4.jpg`, `src/language/C.png`, `C`],
  [`src/project/Project 5.jpg`, `src/language/C++.png`, `C++`],
  [`src/project/Project 6.jpg`, `src/language/Csharp.png`, `C#`]
);

// containerCompiler_5(): Projects Function End
// --------------------------------------------
// randomColor() Function Start

const randomColor = () => {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
};

// randomColor() Function End
// --------------------------------------------
// containerTag_6(): Tags Function Start

const containerTag_6 = (...items) => {
  const section = document.getElementById(`container-6`);

  items.forEach(([title]) => {
    // ELEMENTS
    const li = createElement(`li`, title);

    // STYLES
    li.style.backgroundColor = randomColor();

    // CLASSNAME
    li.className = `container-tag`;

    // APPEND ELEMENTS
    section.appendChild(li);
  });

  return section;
};

containerTag_6(
  [`C Language`],
  [`C++`],
  [`Java`],
  [`Python`],
  [`SQL`],
  [`HTML`],
  [`CSS`],
  [`JavaScript`],
  [`C#`],
  [`Kotlin`],
  [`WordPress`],
  [`ASP.Net`],
  [`Website Development`],
  [`Android Development`],
  [`Software Development`],
  [`Data Science`],
  [`AWS`],
  [`Google Cloud`],
  [`Ethical Hacking`],
  [`Front End Developer`],
  [`Back End Developer`],
  [`Full Stack Developer`],
  [`React.JS`],
  [`Native Application`],
  [`Hybrid Application`],
  [`Web Application`],
  [`Data Structure`]
);

// containerTag_6(): Tags Function End
// --------------------------------------------
// currentYear Start
// Display the Current Year

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById(`currentYear`);
yearElement.appendChild(document.createTextNode(currentYear));

// currentYear End
// --------------------------------------------
