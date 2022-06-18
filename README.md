# inputReader

basic example:
```js
const input = require('inputReader');

input("What's your name? ").then( (answer)=>{
    console.log(`Your name is ${answer} !`);
});

/*
What's your name? John Doe
Your name is John Doe !
*/
```

`input(prompt?,options?) => Promise<String|undefined>`

we can also provide a few options:

|     option      |          type          |                                        description                                           |
------------------|------------------------|----------------------------------------------------------------------------------------------|
|      type       |  `"text"`/`"choices"`  |   the type of input, `text` (default) for textual input, `choices` for pre-defined options   |
|   afterPrompt   |       `String`         |        the new prompt after the user finished typing text, default value `undefined`         |
|     onAbort     |      `Function`        | the function to call when the user pressed <kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>Ctrl</kbd>+<kbd>D</kbd>, by default exits the program |
|      mask       |       `String`         |  when in text input mode, the replacement character for the input, default value `undefined` |
|     cursor      |       `String`         |             when in choices mode, the string to display as the selection cursor              |
|  defaultIndex   |       `Number`         |             when in choices mode, the default selected index, default value `0`              |
|     choices     |      `String[]`        |                     when in choices mode, the different options to show                      |

# more examples

```js
const correctPassword = "1234";
input("Password: ",{mask:"*"}).then( (answer)=>{
    if (answer == correctPassword) {
        console.log("Welcome, user");
    } else {
        console.log("Invalid password")
    }
});
```

```js
input("Do you enjoy coding ?",{type:'choices',choices:['yes','no']}).then( (answer)=>{
    if (answer == 'yes') {
        console.log("I like that too !");
    } else {
        console.log("Sad to hear that :(");
    }
});
```
