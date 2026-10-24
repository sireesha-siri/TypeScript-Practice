Let's practice working with TypeScript by implementing a simple calculator function.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Compile the TypeScript code using `npx tsc`
- Run the compiled code using `node dist/index.js`
</details>

### Functionality

<details>
<summary>Core Functionality</summary>
<br/>

- Implement the `calculate` function that:

  - Takes three parameters: two `numbers` and an `operation string`
  - Returns the result of the specified operation
  - Handles addition `('+')`, subtraction `('-')`, multiplication `('*')`, and division `('/')`
  - Returns `0` for any invalid operation

</details>

<details>

<summary>Example</summary>

```
calculate(10, 5, '+');
// Returns: 15

calculate(10, 5, '-');
// Returns: 5

calculate(10, 5, '*');
// Returns: 50

calculate(10, 5, '/');
// Returns: 2

calculate(10, 5, '%');
// Returns: 0 (invalid operation)

```

</details>

> ### _Things to Keep in Mind_

> - All components you implement should go in the `src/index.js` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
> - Make sure you add appropriate TypeScript type annotations.
> - Ensure type safety by explicitly typing all parameters and return values
> - All typings must be explicit with no usage of **any** type
