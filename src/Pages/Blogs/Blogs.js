import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css';
import bgImage from './soon.jpg';
import cssWorkFlow from "./CSSWiorkflow.JPG";
const Blogs = () => {
    return (
        <Container>
            <article>
                <h1 className='text-center text-primary mb-3 mt-3'>Article: 01</h1>
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

            </article>
        </Container>
    );
};

export default Blogs;