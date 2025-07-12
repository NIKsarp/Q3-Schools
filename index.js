// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, textContent, ...attribute) => {
  const element = document.createElement(tagName);

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  // Set each attribute as [name, value]
  attribute.forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  return element;
};

// createElement() Function End
// --------------------------------------------
// containerCard_3(): Language's Function Start

const containerCard_3 = (...items) => {
  const container = document.getElementById(`container-3`);

  items.forEach(([src, alt, title, text, link]) => {
    const containerItem = createElement(`div`, ``, [`class`, `container-item`]);
    const figure = createElement(`figure`, ``, [`class`, `figure`]);

    // --------------------------------------------
    // Figure Image
    const figureImg = createElement(
      `img`,
      ``,
      [`class`, `figure-img`],
      [`src`, src],
      [`alt`, alt],
      [`title`, title]
    );

    // --------------------------------------------
    // Card Body Elements
    const rhombus = createElement(`div`, ``, [`class`, `rhombus-shape`]);
    const containerBody = createElement(`div`, ``, [`class`, `container-body`]);
    const containerBox = createElement(`div`, ``, [`class`, `container-box`]);
    const containerLanguage = createElement(`h4`, title, [
      `class`,
      `container-language`,
    ]);
    const containerText = createElement(`span`, text, [
      `class`,
      `container-text`,
    ]);
    const containerLink = createElement(
      `a`,
      `>`,
      [`class`, `container-link`],
      [`href`, `https://q3schools.com/${link}/`]
    );

    // --------------------------------------------
    // Append elements
    container.append(containerItem);
    containerItem.append(figure, containerBody);
    figure.append(figureImg, rhombus);
    containerBody.append(containerBox, containerLink);
    containerBox.append(containerLanguage, containerText);
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
  const container4 = document.getElementById(`container-4`);

  items.forEach(([title, link, src, alt]) => {
    const containerItem = createElement(`div`, ``, [`class`, `container-item`]);
    const rhombusShape = createElement(`div`, ``, [`class`, `rhombus-shape`]);
    const containerText = createElement(`span`, title, [
      `class`,
      `container-text`,
    ]);
    const containerItemLink = createElement(
      `a`,
      ``,
      [`class`, `container-link`],
      [`href`, `https://q3schools.com/online-${link}`]
    );
    const figure = createElement(`figure`, ``, [`class`, `figure`]);
    const figureImg = createElement(
      `img`,
      ``,
      [`class`, `figure-img`],
      [`src`, src],
      [`alt`, `${alt} Compiler`],
      [`title`, `${alt} Compiler`]
    );

    // --------------------------------------------
    // Append elements
    containerItem.append(rhombusShape, containerText, containerItemLink);
    containerItemLink.appendChild(figure);
    figure.appendChild(figureImg);
    container4.append(containerItem);
  });

  return container4;
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
  const container5 = document.getElementById(`container-5`);

  items.forEach(([src, iconSrc, title]) => {
    const containerItem = createElement(`div`, ``, [`class`, `container-item`]);
    const figure = createElement(`figure`, ``, [`class`, `figure`]);
    const figureImg = createElement(
      `img`,
      ``,
      [`class`, `figure-img`],
      [`src`, src],
      [`alt`, `${title} Project`],
      [`title`, `${title} Project`]
    );
    const containerInner = createElement(`div`, ``, [
      `class`,
      `container-inner`,
    ]);
    const containerItemLink = createElement(
      `a`,
      ``,
      [`class`, `container-link`],
      [`href`, `#`]
    );
    // --------------------------------------------
    // Container-icon
    const containerIcon = createElement(
      `img`,
      ``,
      [`class`, `container-icon`],
      [`src`, iconSrc],
      [`alt`, title]
    );
    const containerText = createElement(`span`, title, [
      `class`,
      `container-text`,
    ]);

    // --------------------------------------------
    // Append elements
    containerItem.append(figure, containerInner);
    figure.appendChild(figureImg);

    containerInner.appendChild(containerItemLink);
    containerItemLink.append(containerIcon, containerText);
    container5.append(containerItem);
  });

  return container5;
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
  const container6 = document.getElementById(`container-6`);

  items.forEach(([title]) => {
    const containerTag = createElement(
      `li`,
      title,
      [`class`, `container-tag`],
      [`style`, `background-color: ${randomColor()};`]
    );

    // --------------------------------------------
    // Append elements
    container6.appendChild(containerTag);
  });

  return container6;
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
