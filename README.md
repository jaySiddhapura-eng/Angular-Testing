# Angular Testing

## Automated Testing

1. Catching the defects before software release
2. Identify the design mistakes
3. Helps in regression testing
4. Acts as a documentation of app functionality
5. Should not be used when " Limited time, limited budget, unsure product future"
6. Should not use if frequent changing in requirements

## Types of tests

1. **unit test**
   1. Test component in isolation, without external resources like DB, files, etc
   2. Test functionality of individual unit and not the entire app
   3. Least confidence on correct implementation of the app
2. **Integration testing**
   1. Test the component with external resources
   2. Better confidence then Unit testing
3. **End-to-End Testing**
   1. Test the entire app as a whole
   2. Most confidence over the app functionality
   3. Slow and fragile 
4. **Ideal Scenario**
   1. Developer implements the  unit tests, other tests are conducted by the QA department
   2. Spend more time to write unit test and integration tests
   3. Write few end-to-end tests for only the key functionality
5. Apply same principles as the functional testing
6. Follow Single responsibility principle, test only one thing at a time

## Angular Testing tools

1. Jasmine
   1.  It is a behavior-driven development framework for unit testing the javascript code
   2. Dependency free and does not require a DOM
2. Karma
   1. It is a test runner for writing and running the unit tests while developing an Angular app
   2. Since browser do not have natively a concept of loading the test files, running them and reporting results, We will need karma
   3. Karma roughly perform following thing to test the app in browser environment
      1. Starting small web browser, to serve the app
      2. Load the test files which are related to the app
      3. Serve a custom web page that will run JS code for the test
      4. Load the webpage of the app
      5. Report the results of the test to the above created server
      6. Also report the results to the text files, the consoles etc
   4. Karma looks into the files in app directory which has extension of ```spec.ts``` which are basically a test file
3. Protractor
   1. Write and run e2e tests
   2. Explore the app as users experience it
4. Angular Testing Utilities
   1. Create a test environment for the application code under test
   2. Used to test interactions between components

## Test File and Code

1. Each angular app component has its own test file, which is being used to write the test code of that particular component
2. The test file per component is created by the angular CLI, while creating the component. It should have extension of ```.spec.ts```
3. To run the test from angular CLI, execute the command ```ng test``` from the project directory
4. What is Suites?
   1. A suite groups a set of specs or test cases, it created using Jasmine global function ```describe()```
   2. ```describe()``` function takes two parameters, the title of the test suite and the function that implements the actual code of the test suite
5. What is ```it()``` ?
   1. Specs are defined by calling the global jasmine function ```it()```, which is like ```describe()``` function takes a string and a function
   2. The string is a title of the spec and the function is spec
   3. The spec function can contain one or more expectations ```expect()```, which test the state of the code 
   4. A spec with all true expectations is a passing spec
   5. A spec with one or more false expectations is a failing spec
   6. ```it()``` blocks are functions, they can contain any executable code necessary to implement the test. 
   7. The JavaScript scope rules applies here, so variable declared in a ```describe()``` are available to any ```it()``` block inside suite 
6. What are ```expectations```
   1. 

