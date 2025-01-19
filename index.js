const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;
  if (textContent) element.appendChild(document.createTextNode(textContent));
  return element;
};

// let main = document.getElementsByClassName(`content`);
// --------------------------------------------
// element
const element = (name, text, link) => {
  const elementItem = createElement(`li`, `item`);
  const elementLink = createElement(`a`, `link`);
  const elementName = createElement(`h4`, `sub-title`, `Learn ${name}`);
  const elementText = createElement(`span`, `text`, `A ${text}`);
  elementLink.href = `https://q3schools.com/${link}/`;
  const content3 = document.getElementById(`content-3`);

  content3.appendChild(elementItem);
  elementItem.appendChild(elementLink);
  elementLink.append(elementName, elementText);
};
let language = `Programming Language`;
element(`C`, language, `c-programming-tutorial`);
element(`C++`, language, `c-plus-plus-tutorial`);
element(`C#`, language, `c-sharp`);
element(`Python`, language, `python-tutorial`);
element(`Java`, language, `java-tutorial`);
element(`Kotlin`, language, `kotlin`);
element(`HTML`, `Markup Language`, `html`);
element(`CSS`, `Stylesheet Language`, `css`);
element(`JavaScript`, `Scripting Language`, `javascript`);
element(`SQL`, `Domain-specific Language`, `sql`);
element(`WordPress`, `CMS Tool`, `wordpress`);
element(`ASP.Net`, `Web-application framework`, `asp-net`);
// --------------------------------------------
// pill
const pill = (text, link) => {
  const pillItem = createElement(`li`, `item`);
  const pillLink = createElement(`a`, `link`, text);
  pillLink.href = `https://q3schools.com/${link}/`;
  pillItem.appendChild(pillLink);
  const content4 = document.getElementById(`content-4`);
  content4.appendChild(pillItem);
};
pill(`HTML`, `online-html-css-compiler`);
pill(`JavaScript`, `online-javascript-compiler`);
pill(`Python`, `online-python-compiler-programiz`);
pill(`Java`, `online-java-compiler`);
pill(`C`, `online-c-language-compiler`);
pill(`C++`, `online-c-plus-plus-compiler`);
pill(`C#`, `online-c-sharp-compiler`);
// --------------------------------------------
// project
const project = (text, link) => {
  const projectItem = createElement(`li`, `item`),
    projectLink = createElement(`a`, `link`, `${text} Projects`);
  projectLink.href = link;
  projectItem.appendChild(projectLink);

  const content5 = document.getElementById(`content-5`);
  content5.appendChild(projectItem);
};
project(`Python`, `#`);
project(`Java`, `#`);
project(`JavaScript`, `#`);
project(`C`, `#`);
project(`C++`, `#`);
project(`C#`, `#`);
// --------------------------------------------
// tag
const tags = (text) => {
  const tagItem = createElement(`li`, `item`, text);

  const content6 = document.getElementById(`content-6`);
  content6.appendChild(tagItem);
};
tags(`C Language`),
  tags(`C++`),
  tags(`Java`),
  tags(`Python`),
  tags(`SQL`),
  tags(`HTML`),
  tags(`CSS`),
  tags(`JavaScript`),
  tags(`C#`);
tags(`Kotlin`);
tags(`WordPress`);
tags(`ASP.Net`);
tags(`Website Development`);
tags(`Android Development`);
tags(`Software Development`);
tags(`Data Science`);
tags(`AWS`);
tags(`Google Cloud`);
tags(`Ethical Hacking`);
tags(`Front End Developer`);
tags(`Back End Developer`);
tags(`Full Stack Developer`);
tags(`React.JS`);
tags(`Native Application`);
tags(`Hybrid Application`);
tags(`Web Application`);
tags(`Data Structure`);
// --------------------------------------------
// currentYear
const currentYear = new Date().getFullYear();
document
  .getElementById(`currentYear`)
  .appendChild(document.createTextNode(currentYear));
// --------------------------------------------
