# readometer
A [smart](#why-another-read-time-calculator) tool to helps you estimate the read-time of a document.

To see it in action (and use it) go to https://teo330.github.io/readometer

<img alt="Website status" src="https://img.shields.io/website?down_color=critical&down_message=down&up_color=success&up_message=up&url=https%3A%2F%2Fteo330.github.io%2Freadometer"> <img alt="GitHub license" src="https://img.shields.io/github/license/teo330/readometer"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/teo330/readometer"> <a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fteo330%2Freadometer"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fteo330%2Freadometer"></a> <img alt="GitHub stars" src="https://img.shields.io/github/stars/teo330/readometer?style=social">

* [Features and roadmap](#features-and-roadmap)
* [Why another read-time calculator](why-another-read-time-calculator)
* [How it works](#how-it-works)
* [Other notes](#other-notes)
* [License](#license)
* [Bugs and problems](#bugs-and-problems)

## [Features and roadmap](#features-and-roadmap)
[Suggest a new feature](https://github.com/teo330/readometer/issues/new)
- [ ] Add option to switch from eye-friendly background to light and dark ones
- [ ] Add multi-language time-to-read support
- [ ] Add multi-language support to the webpage
- [x] Remove special characters from word count
- [x] Display maximum and minimum estimated read time
- [x] Display the text's total number of words
- [x] Display average estimated text read time

## [Why another read-time calculator](#why-another-read-time-calculator)
There are many others tools like this one.
However when I was looking for one, the first search results I got were of stupidly developed tools.
The problem with those calculators is that you could easily joke it by writing two or more whitespaces together or using special characters, and they would count them as words (and since the read time calculation is based on the number of words, the time wouldn't be the right one).
Read below how this tool works to understand why it's better than the others.

## [How it works](#how-it-works)
1. The program takes the text provided by the user in the textarea and create a string;

2. It checks for new lines. If there are new lines in the given text, the program switches them with a single whitespace in order to have a single line string;

3. Then there's a "big" loop that takes all the special characters in the `specialCharacters` array and checks whether there are some in the string. If there are, the program switches them with a single whitespace in order to have a single line string;

4. It looks for doubled (or more attached) whitespaces in the string. If there are, it replaces them with a single whitespace;

5. The last check is for additional whitespaces at the beginning or at the end of the string. In case there are, it trims the string removing them;

6. Now the program takes the string and it splits any word based on the whitespace, and create an array with the words (`Hey John` gets cutted on the ` ` and becomes `Hey,John`);

6. It counts the number of elements of the array (the words), it divides it with the average WPM for the english language and it prints the result on the screen.

## [Other notes](#other-notes)

* WPM means Words Per Minute and it's the average read speed of a person given a specific language (each language is different so it has its own WPM rate).

* The reason the program removes all the useless whitespaces is that computers are stupid and, since they use a single whitespace to count a word, if there would be, lets say, 3 whitespaces between 2 words like `Hey   John`, the array created would look like `Hey, ,John` and the counted words would be 3 (`Hey`, `whitespace`, `John`).
The problem with new lines is that computers count the first word of the new line as it would be part of the last word of the line before, so if we would have something like:
```
Hey
John
```
the array created would look like `HeyJohn`, so 1 word.

* The reason at line 87-90 of the `/source-code/readometer.js` file the code is...
```javascript
let totWords = textbox.split(" ")/*.length*/;
console.log("totWords: " + totWords);
totWords = totWords.length;
console.log("totWords length: " + totWords);
```
instead of the shorter...
```javascript
let totWords = textbox.split(" ").length;
console.log("totWords length: " + totWords);
```
is that it's easier to debug it, especially while dealing with the regular expressions (line 67, same file) and you want to be sure the syntax is correct so it's helpful to see the single words (array elememts) before they get counted.

* Also, using the tool you probably noticed a not-so-cool background color.
I know black and white would be more stylish however, as this tool is made also for those who want to write/edit their text instead of just copy and paste it, I decided to use a more "eye-friendly" background color (for those users who don't have programs like [Redshift](https://github.com/jonls/redshift)).

## [License](#license)
[MIT License](https://github.com/teo330/readometer/blob/master/LICENSE)
Thanks to the MIT License, you are free to use and share and do almost whatever you want with the code (more details on the link), but remembering to link to this repository (even if you use just a part of the code).
By the way if you want to make some upgrade, you are welcome. Feel free to open an Issue or Pull Request ;)

## [Bugs and problems](#bugs-and-problems)
If you have any problem or found a bug, please [open a new issue](https://github.com/teo330/readometer/issues/new).
