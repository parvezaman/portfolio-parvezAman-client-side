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
import img3_1 from "./Article3/1.png";
import img3_2 from "./Article3/2.png";
import img3_3 from "./Article3/3.png";
import img3_4 from "./Article3/4.png";
import img3_5 from "./Article3/5.png";
import img3_6 from "./Article3/6.png";
import img3_7 from "./Article3/7.png";
import img3_8 from "./Article3/8.png";
import img3_9 from "./Article3/9.png";
import img5_1 from "./Article5/5.1.JPG";
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

                <p>In spite of being an Object-Oriented Programming (OOP) language, JavaScript didn't have any “Class” concept before ES6. Some programmers coming from another programming-language background seem a bit awkward because of this and get confused if JavaScript is really an OOP or not. The main difference between other OOP and JavaScript is, javascript is a <strong>prototype-based</strong> language and others are class-based languages. Still in ES6 JavaScript hasn't come with actual class components but as a <strong>syntactical sugar</strong>. It's just another form of function constructor.</p>

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

                <p><strong>There are few differences between class and function here</strong>. Such as class isnt hoisted as the function. Not even class statements. That means you can call a function before declaration of the function.  But you can not use a class before declaration. </p>

                <h2>Prototype based inheritance in class</h2>

                <p>Because of being a syntactical sugar, there is difference in  inheritance. In ES5 we used to assign new method using <strong>prototype</strong>. But in ES6 we can even assign new method outside the main class constructor. for example,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img2_5} alt="" />
                    <figcaption className='text-center text-primary'>Prototype based inheritance in class</figcaption>
                </figure>


                <hr />
            </article>

            <br /><br /><br />

            <article>
                <hr />

                <h1 className='text-center text-danger mb-3 mt-3'>Article: 03</h1>
                <h1>“this” keyword in JavaScript</h1>
                <p>It is the most confusing and tricky topic in JavaScript. But I will try my best to make it as simple as possible if Allah wills. ‘this’ is a reserved keyword in JavaScript which means you can not declare a variable or function with this name.</p>

                <p>The value of ‘this’ is determined depending on how the function is called. There are four rules that can help to understand the determination of the value of ‘this’, as</p>

                <ul>
                    <li>Global rules</li>
                    <li>Object rules</li>
                    <li>Clear rules</li>
                    <li>The “new” keyword rules</li>
                </ul>

                <p>These are not officially mentioned rules but these rules help to understand the functionality easily.</p>

                <h3>Global Rules</h3>

                <p>If you use the “this” keyword anywhere except the custom-defined object, it will indicate the global object. The global object can be varied based on the platform. For example, for browsers global object is <strong>window</strong>, for node JS <strong>global</strong> object is global. For example, we are showing the console.log() of “this” and <strong>window</strong>,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_1} alt="" />
                    <figcaption className='text-center text-primary'>'this' refers the global object</figcaption>
                </figure>

                <p>We also can check this using “===” as bellow</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_2} alt="" />
                    <figcaption className='text-center text-primary'>'this' represents the same window object</figcaption>
                </figure>

                <p>In the global context, both in strict mode and non-strict mode the value of “this” always remains the same.</p>

                <p>But while defining a function strict mode and non-strict mode can be different as follows;</p>

                <h4>Non-strict mode:</h4>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_3} alt="" />
                    <figcaption className='text-center text-primary'>'this' in non-strict mode</figcaption>
                </figure>

                <h4>Strict mode:</h4>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_4} alt="" />
                    <figcaption className='text-center text-primary'>'this' in strict mode</figcaption>
                </figure>

                <h3>Object rules</h3>

                <p>What if, you have used “this” within a custom-defined object. Thats where this rule is going to be applied. This explained with example as bellow,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_5} alt="" />
                    <figcaption className='text-center text-primary'>Object rules</figcaption>
                </figure>

                <p>You will notice here, “this” this time did not take the global object rather it took the closest variable of “this”. It will be clearer with the next example as,</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_6} alt="" />
                    <figcaption className='text-center text-primary'>'this' indicites the closest object</figcaption>
                </figure>

                <h3>Clear rules</h3>

                <p>Also you can define the object which one should be indicated by “this”. By using the call, bind, and apply method we can define our target object through passing argument. To clear the concept please observe the following examples,</p>

                <h4>Without the call, bind or apply:</h4>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_7} alt="" />
                    <figcaption className='text-center text-primary'>Without the call, bind or apply</figcaption>
                </figure>

                <h4>With call, bind, and apply method:</h4>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_8} alt="" />
                    <figcaption className='text-center text-primary'>With the call, bind or apply</figcaption>
                </figure>

                <h3>The “new” keyword rules</h3>

                <p>The keyword “new” also can determine the value of “this”. This means if the  “this” is incorporated under “new”, value also can be changed. The “new” keyword basically generates value for the “this” keyword. For example;</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img3_9} alt="" />
                    <figcaption className='text-center text-primary'>The “new” keyword rules</figcaption>
                </figure>

                <hr />
            </article>

            <br /><br /><br />

            <article>
                <hr />
                <h1 className='text-center text-danger mb-3 mt-3'>Article: 04</h1>
                <h1>How can you increase the performance of React App?</h1>
                <p>Improving performance is one of the most important aspects of developing a React app. Not only speed but also user experience also matters. Developers must check out the app's performance before handing it over to the client. Several measures can be taken to increase the performance of a React App and a few of them are given below,</p>

                <ul>
                    <li>
                        <h3>To use React.Fragment instead of adding an extra node to the DOM</h3>
                        <p>As we know, JavaScript doesn't return more than one output. But sometimes we need to render multiple elements from a React Module/component. To do so sometimes developers keep all the returned elements into a single “div” or something. Which can affect the performance of the app. Because it adds an unnecessary extra node to the DOM. DOM is expensive and requires a lot of energy to render so it decreases the performance of the app. </p>
                        <p>So the possible solution can be adding React.Fragment instead of elements (eg. div). A fragment can be applied both like &#60;React.Fragment&gt; &lt;ltReact.Fragment /&#62; or &#60;&#62; &#60;/&#62;.</p>
                    </li>
                    <li>
                        <h3>Try  using production build</h3>
                        <p>To enhance app performance another step to be taken that is to bundle up the whole app in a single package before deploying. React app remains in development mode by default, which includes all warnings. Which can be useful for development purposes but in terms of performance it makes things a bit slower than usual, also increases the app size. By using “npm run build” we can bundle up the app and then by deploying the “build” folder we can enhance the performance.</p>
                    </li>
                    <li>
                        <h3>To use React.Lazy</h3>
                        <p>React Lazy is used for dynamic import. It calls a function only when it is necessary. Also, it allows the asynchronous function to use an intermediate function to run while the lazy component completes loading. </p>
                    </li>
                    <li>
                        <h3>Dependency optimization</h3>
                        <p>In terms of application build size, its wort checking installed dependencies and how much codes of those dependencies you are using. By uninstalling  unused dependencies you cna reduce build size. Also for example you have 100+ methods but you are using only 35, you can remove the unused methods to increase performance.
                        </p>
                    </li>
                    <li>
                        <h3>Avoid unnecessary re-rendering</h3>
                        <p>Sometimes we get a few functions as well as CSS rules which keep re-rendering unnecessarily. We must avoid these to make our performance better. We can use several npm packages like why-did-you-render to identify and get rid of these re-rendering rules and functions.</p>
                    </li>
                    <li>
                        <h3>Avoid in-line functions</h3>
                        <p>When a function is defined and called instantly inside the render method of the React component, it will be called an in-line function. There are several problems with these in-line functions, for example, in-line functions are always called even if the props/state isn’t changed. Also, the memory footprint of the app is increased this way. So the possible solution might be, to pull the inline functions out of the render method. </p>
                    </li>
                </ul>

                <hr />
            </article>
            <br /><br /><br />
            <article>
                <hr />
                <h1 className='text-center text-danger mb-3 mt-3'>Article: 05</h1>

                <h1>SQL and MySQL</h1>
                <p>First of all, we need to know about databases. </p>

                <h3>So what is a database? </h3>

                <p>The database is a collection of data that is stored in a computer and we can query the necessary data as we need. According to the relationship between the stored data in the database, we can divide the database system into two broad categories as;</p>

                <ul>
                    <li>
                        <p><strong>Relational database:</strong>
                            <p>For example, you run a shop/store. You want to post your store-related data into the database. In this case, you might have the data of your items/products, customers, customer preferences, items on demand, etc. You can store these data into a tabular format while you can make individual tables for each data set, for example, items, customers, etc., and in each case at least one field will have them in common. For example, the items table will must-have item id and customers buying product will have product id as well. In the same way, customer preference will have both customer id and product id in common at least. I mean there will be at least one field in common which is called relation. And this type of database is called a relational database. For example MySQL.</p>
                            <p>While storing data in the database there might be chances of duplication which can lead to an error. To eradicate this error each row has an individual key which is called primary key. Also, this database maintains integrity rules. Which allows the database to avoid the recurrence of data aka duplication of data.</p>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Non-Relational database:</strong>
                            <p>Unlike the relational database, data are not arranged in tabular format. Also, there will be no related fields in common. For example MongoDB.</p>
                        </p>
                    </li>
                </ul>

                <h3>What is SQL?</h3>
                <p>For example, you have put your data in the database. Now you want to access the database and show the data in the UI or you want to update any data in the database. So you must need a Query language to establish the communication or to perform the tasks. SQL AKA Structured Query Language which is used to access the database, operate, and manage. By using different syntax, you can add, delete, retrieve or access data in different databases. ANSI (American National Standards Institute)  maintains the standard of SQL. SQL is used to access the relational database eg. MySQL.</p>

                <h3>What is MySQL</h3>
                <p>MySQL is an open-source relational database management system that is currently owned and operated by Oracle Corporation. It was developed back in 1995 by MySQL AB. It uses SQL commands to perform specific functions/operations in a database. </p>

                <h3>How do they work?</h3>
                <p>When users want to send any data to the database first of all data is sent to the DBMS (Database management system) later on data will be sent to the Database. In the same way, in the case of showing data in the UI from the database DBMS receive the data first then it is shown to the UI. In the case of a relational database, RDBMS (Relational Database Management System) is used. The RDBMS (eg. MySQL) uses SQL language to perform actions eg, add, delete, update data, etc.</p>

                <figure>
                    <img className='img-fluid d-block mx-auto' src={img5_1} alt="" />
                    <figcaption className='text-center text-primary'>How SQL and MySQL work</figcaption>
                </figure>

                <h3>Advantages of MySQL</h3>
                <ul>
                    <li>It can be used from different platforms (eg: Windows, Linux, Mac, etc)</li>
                    <li>It can be used with different major languages (eg. PHP, NodeJS, Python, C#, etc)</li>
                    <li>MySQL is an Open-Source software</li>
                    <li>It is an RDBMS, so with a single command you can access multiple tables</li>
                    <li>It is fast, secure, reliable, scalable and easy to use</li>
                </ul>

                <h3>Popular websites using MySQL</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Google</li>
                    <li>Wikipedia</li>
                    <li>Youtube</li>
                    <li>Flicker</li>
                    <li>Pinterest</li>
                </ul>
                <hr />
            </article>
        </Container>
    );
};

export default Blogs;