import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css';
import bgImage from './soon.jpg';
import cssWorkFlow from "./CSSWiorkflow.JPG";
import img2_1 from "./Article2/1.png";
import img2_2 from "./Article2/2.png";
import img2_3 from "./Article2/3.png";
import img2_4 from "./Article2/4.png";
import img2_5 from "./Article2/5.png";
const Blogs = () => {
    return (
        <Container>
            <article>
                <hr />
                <h1 className='text-center text-danger mb-3 mt-3'>Article: 01</h1>
                <h1>How does CSS Work?</h1>
                <p>Have you ever wondered? You just have written a Stylesheet and imported it into your HTML document. Now how does the browser know which rule to apply on which portion of your HTML and how do they render all these things? This is going to be discussed here today in some simplified steps if Allah SWT grants us. First of all, we need to know that different browsers use different CSS parsers. For example, Chrome and Opera use <strong>Webkit Fork</strong> called <strong>Blink</strong>, Safari uses <strong>Webkit2</strong>,  Mozilla uses <strong>Gecko</strong>, and so on. But more or less all these engines work in the same manner. Thats why a simplified and common scenario is presented here.</p>
                <ul>
                    <li>First of all, the browser loads the HTML.</li>
                    <li>The browser converts the HTML into a DOM tree. And it is represented in the computer memory.</li>
                    <li>Then the browser fetches more resources according to the HTML document as embedded pictures, videos, imported CSS, JavaScript files, etc. The browser renders Javascript later on first in parses the media files and the CSS.</li>
                    <li>Then the browser sorts out the CSS into different buckets according to the selector types. For example, element, class, id, etc. And it looks for the rules declared to implement on that bucket.</li>
                    <li>Then the browser attaches the rules to the adjacent nodes of the DOM. This step is called render tree.</li>
                    <li>The next step is called painting. Which is displaying the page on the device screen through implementing the rules.</li>
                </ul>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={cssWorkFlow} alt="" />
                    <figcaption className='text-center text-primary'>CSS workflow in a nutshell</figcaption>
                </figure>

                <h3>Now what is DOM and why is it so important?</h3>
                <p>All the elements, attributes, and texts in the HTML document are arranged in a tree-like arrangement. It is organized this way because it helps to debug the HTML document and it's easier to implement the CSS rules. As it requires less energy to find nodes if they are arranged in a systematic way.</p>

                <h3>What if, a browser doesn't recognize a CSS rule?</h3>
                <p>Well, CSS is being updated over time and it keeps updating. So, such an issue may come up where the user uses a back-dated browser that doesn't recognize the latest CSS rule. Or the developer misspells a rule. </p>
                <p>In such cases, the browser simply ignores that rule and jumps onto the next rule or the next node. This is also why the DOM tree is necessary. </p>

                <hr />
            </article>
            <br /><br /><br />

            <article>
                <hr />
                <h1 className='text-center text-danger mb-3 mt-3'>Article: 02</h1>

                <h1>Let's understand Class in ES6</h1>

                <p>In spite of being an Object-Oriented Programming (OOP) language, JavaScript didn't have any “Class” concept before ES6. Some programmers coming from another programming-language background seem a bit awkward because of this and get confused if JavaScript is really an OOP or not. The main difference between other OOP and JavaScript is, javascript is a prototype-based language and others are class-based languages. Still in ES6 JavaScript hasn't come with actual class components but as a syntactical sugar. It's just another form of function constructor.</p>

                <p> It was possible in ES5 to use function constructor as follows,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img2_1} alt="" />
                    <figcaption className='text-center text-primary'>Function constructor in ES5</figcaption>
                </figure>

                <p>But in ES6 we use class as follows,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img2_2} alt="" />
                    <figcaption className='text-center text-primary'>class constructor in ES6</figcaption>
                </figure>

                <p>Seems so familiar right?! </p>

                <p>In  JavaScript, we can divide the class into 2 divisions as functions as follows,</p>

                <ul>
                    <li>Class statement</li>
                    <li>Class expression</li>
                </ul>

                <h3>Class statement</h3>
                <p>To state the class we must start with the “class” keyword. And a name must be provided. Conventionally we use uppercase for the first letter of the class name. For example,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img2_3} alt="" />
                    <figcaption className='text-center text-primary'>Class Statement</figcaption>
                </figure>

                <p>Also stated above examples can be followed</p>

                <h3>Class expression</h3>
                <p>Like the function expression, class expression can be assigned with a variable.</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img2_4} alt="" />
                    <figcaption className='text-center text-primary'>Class Expression</figcaption>
                </figure>

                <p>There are few differences between class and function here. Such as class isnt hoisted as the function. Not even class statements. That means you can call a function before declaration of the function.  But you can not use a class before declaration. </p>

                <h2>Prototype based inheritance in class</h2>

                <p>Because of being a syntactical sugar, there is difference in  inheritance. In ES5 we used to assign new method using prototype. But in ES6 we can even assign new method outside the main class constructor. for example,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img2_5} alt="" />
                    <figcaption className='text-center text-primary'>Prototype based inheritance in class</figcaption>
                </figure>


                <hr />
            </article>
        </Container>
    );
};

export default Blogs;