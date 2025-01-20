// --------------------------------------------
// createElement
const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;
  if (textContent) element.appendChild(document.createTextNode(textContent));
  return element;
};

// --------------------------------------------
// navigation
const createNavigationItem = (textContent, href) => {
  const navItem = createElement(`li`, `nav-item`);
  const navLink = createElement(`a`, `nav-link`, textContent);
  navLink.href = `https://q3schools.com/${href}/`;
  // --------------------------------------------
  const navigation = document.getElementById(`navigation`);
  navItem.appendChild(navLink);
  navigation.appendChild(navItem);
  return navItem;
};
createNavigationItem(`HTML`, `html`);
createNavigationItem(`CSS`, `css`);
createNavigationItem(`JavaScript`, `javascript`);
createNavigationItem(`Python`, `python`);
createNavigationItem(`Java`, `java`);
createNavigationItem(`C Language`, `c-language`);
createNavigationItem(`C++`, `c-plus-plus`);
createNavigationItem(`C#`, `c-sharp`);
createNavigationItem(`SQL`, `sql`);

// console.log(navigation);

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
// article - 1, 2, 3, 4
// const createCardStructure = (title, textContent) => {
//   const cardTitle = createElement(`h3`, `card-title`, title);
//   const cardText = createElement(`p`, `card-text`, textContent);
//   return { cardTitle, cardText };
// };
// const createCard = (title, textContent, textContent2) => {
//   const { cardTitle, cardText } = createCardStructure(title, textContent);
//   const cardText2 = createElement(`p`, `card-Text`, textContent2);
//   const container = document.getElementById(`card1`);
//   container.append(cardTitle, cardText, cardText2);
// };
// const createCard2 = (title, subTitle, textContent) => {
//   const { cardTitle, cardText } = createCardStructure(title, textContent);
//   const cardSubtitle = createElement(`h4`, `card-subtitle`, subTitle);
//   const container = document.getElementById(`card2`);
//   container.append(cardTitle, cardSubtitle, cardText);
// };
// const createCard3 = (
//   title,
//   subTitle,
//   cardPoint1,
//   cardPoint2,
//   cardPoint3,
//   cardPoint4,
//   cardPoint5
// ) => {
//   const { cardTitle } = createCardStructure(title);
//   const cardSubtitle = createElement(`h4`, `card-subtitle`, subTitle);
//   const cardPoints = createElement(`ul`, `card-points`);
//   const point1 = createElement(`li`, `point`, cardPoint1);
//   const point2 = createElement(`li`, `point`, cardPoint2);
//   const point3 = createElement(`li`, `point`, cardPoint3);
//   const point4 = createElement(`li`, `point`, cardPoint4);
//   const point5 = createElement(`li`, `point`, cardPoint5);
//   cardPoints.append(point1, point2, point3, point4, point5);
//   const container = document.getElementById(`card3`);
//   container.append(cardTitle, cardSubtitle, cardPoints);
// };
// const createCard4 = (title, textContent, textContent2) => {
//   const { cardTitle, cardText } = createCardStructure(title, textContent);
//   const cardText2 = createElement(`p`, `card-Text`, textContent2);
//   const container = document.getElementById(`card4`);
//   container.append(cardTitle, cardText, cardText2);
// };

// createCard(
//   `Learn Programming Language & Coding Course`,
//   `<strong>Learn programming language</strong> and <strong>coding course</strong> from industry expert. Coding courses build skills that allow you to develop applications and projects that solve problems (or just offer a lot of fun). Starting with free coding courses can be an excellent way to get your feet wet and figure out a few basics before committing to a particular track.`,
//   `A <strong>programming language</strong> is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.`
// );
// createCard2(
//   `Difference between Programming Language and Coding Course`,
//   `What is Programming Language ?`,
//   `A <a class="highlight" href="https://itpathshaala.in/product-category/cs-course/" >programming language</a> is a vocabulary and set of grammatical rules for instructing a computer or computing device to perform specific tasks. The term programming language usually refers to high-level languages, such as BASIC, C, C++, Python, Java, ASP.Net, C sharp, and Pascal.`
// );
// createCard3(
//   `What are the 5 types of programming language ?`,
//   `5 major types of programming languages Procedural programming languages.`,
//   `Procedural language follows a sequence of statments or commands in order to achieve a desire output.`,
//   `Functional <a class="highlight" href="https://q3schools.com/">programming languages</a>`,
//   `Object-oriented programming languages`,
//   `Scripting languages`,
//   `Logic programming languages`
// );
// createCard4(
//   `What is Coding Course ?`,
//   `The definition of <a href="https://q3schools.com/">coding course</a> is the process of creating instructions for computers using programming languages. Coding is used to program the websites, apps, and other technologies we interact with every day. But, what is coding and why is it important?`,
//   `Most people in and out of the tech sphere have heard the terms coding and programming. Many of the best tech careers require the ability to code. If you want to work in a high-paying field like software engineering, web development, or data science, understanding and using code is essential.`
// );

// --------------------------------------------
// create-footer-item in col 1, 2, 3
const createFooterItem = (title, href, colPosition) => {
  const footerItem = createElement(`li`, `footer-item`);
  const footerLink = createElement(`a`, `footer-link`, title);
  const col = document.getElementById(colPosition);
  footerItem.appendChild(footerLink);
  title === `internship` || title === `training`
    ? (footerLink.href = `https://itpathshaala.in/`)
    : (footerLink.href = `https://q3schools/com/${href}/`);
  col.appendChild(footerItem);
};
// Column 1 items
createFooterItem(`home`, `#`, `col1`);
createFooterItem(`services`, `#`, `col1`);
createFooterItem(`about us`, `about-us`, `col1`);
createFooterItem(`contact us`, `contact-us`, `col1`);

// Column 2 items
createFooterItem(`c language`, `c-language`, `col2`);
createFooterItem(`c++`, `c-plus-plus`, `col2`);
createFooterItem(`java`, `java`, `col2`);
createFooterItem(`python`, `python`, `col2`);

// Column 3 items
createFooterItem(`compiler`, `#`, `col3`);
createFooterItem(`projects`, `#`, `col3`);
createFooterItem(`internship`, `#`, `col3`);
createFooterItem(`training`, `#`, `col3`);

// --------------------------------------------

// --------------------------------------------
// currentYear
const currentYear = new Date().getFullYear();
document
  .getElementById(`currentYear`)
  .appendChild(document.createTextNode(currentYear));
// --------------------------------------------
