/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

/**
 * Note: Now we don't need to use triple references anymore. It's outdated.
 * We mention dependency files in tsconfig.json instead. Since Typescript version 1.5.
 */

let sampleStrings = ["Hello", "98052", "101"];

// Validators to use
// If we don't reference the validation.ts file, we get a ReferenceError 'Validation is not defined'.
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of sampleStrings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}