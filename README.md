# readometer
A tool that helps you to estimate the read-time of a document.

To see it in action (and use it) go to https://teo330.github.io/readometer

:warning:REPOSITORY UNDER DEVELOPMENT

<img alt="W3C Validation" src="https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fteo330.github.io%2Freadometer">

<img alt="Website status" src="https://img.shields.io/website?down_color=critical&down_message=down&up_color=success&up_message=up&url=https%3A%2F%2Fteo330.github.io%2Freadometer">

<img alt="GitHub license" src="https://img.shields.io/github/license/teo330/readometer">

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/teo330/readometer">

<a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fteo330%2Freadometer"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fteo330%2Freadometer"></a>

* [Features and roadmap](#features-and-roadmap)
* [Why another read-time calculator](why-another-read-time-calculator)
* [How it works](#how-it-works)
* [License](#license)
* [Bugs and problems](#bugs-and-problems)

## [Features and roadmap](#features-and-roadmap)
- [ ] Add multi-language time-to-read support
- [ ] Add multi-language support to the webpage
- [ ] Remove brakets from word count
- [x] Display maximum and minimum estimated read time
- [x] Display the text's total number of words
- [x] Display average estimated text read time

## [Why another read-time calculator](#why-another-read-time-calculator)
There are many others tools like this.
However when I was looking for one, the first search result I got was of a stupidly developed tool.
The problem with that tool is that you could easily joke it by writing two or more whitespaces together, and it would count them as words (and since the read time is calculated using the number of words, the time wouldn't be the right one).
Read below how it works to understand why this tool is better and, in case you made a typing mistake, it won't count it as a word.

## [How it works](#how-it-works)
1. The program takes the text provided by the user in the textarea and create an equal string using JavaScript;

2. It checks in the string there aren't whitespaces at the beginning or at the end. In case there are, it trims the string removing them;

3. Then it checks if there are doubled (or more attached) whitespaces within the words of the string. If there are, it switches them with a single whitespace;

4. The last check is for new lines. If there are new lines in the given text, the program switches them with a single whitespace;

5. Now the program takes the string and it splits any word based on the whitespace and create an array with the words (`Hey John` gets cutted on the ` ` and becomes `Hey,John`);

6. It counts the total number of elements of the array (the words), it divides it with the average WPM for the english language and it prints the result on the screen.

WPM means Words Per Minute and it's the average read speed of a person given a specific language (each language is different so it has its own WPM rate).

The reason the program removes all the useless whitespaces is that computers are stupid and, since they use a single whitespace to count a word, if there would be, lets say, 3 whitespaces between 2 words like `Hey   John`, the array created would look like `Hey, ,John` and the counted words would be 3 (`Hey`, `whitespace`, `John`).
The problem with new lines is that computers count the first word of the new line as it would be part of the last word of the line before, so if we would have something like:
```
Hey
John
```
the array created would look like `HeyJohn`, so 1 word.

Words separated by `'` are counted as one (`it's` = 1 word). That's beacuse many of them are short and read toghether so the effective read speed is the same of a single word.
Same for words divided by '-'. They are often slang or well known words and they are visibly linked, so the reader will probably need a shorter amount of time to read each of them.
By the way, if you want you can customize the source code (the original non-minified JavaScript file is in the `/source-code` folder of this repository).
Thanks to the MIT License, you can freerly do it, but remeber to provide a link to this repository (even if you change part of the code) in case you want to use/publish it.

## [License](#license)
[MIT License](https://github.com/teo330/readometer/blob/master/LICENSE)

## [Bugs and problems](#bugs-and-problems)
If you have any problem or found a bug, please [open an issue](https://github.com/teo330).
