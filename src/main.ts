import { CheckPalindrome } from "./domain/checkPalindrome";
import { LanguageEN } from "./domain/languageEN";
import { LanguageVF } from "./domain/languageVF";
import { TimeOfDay } from './domain/timeOfDay';

const readline = require('readline');
const moment = TimeOfDay.getCurrentTimeOfDay();
const systemLanguage = process.env.LANG;
const languageCode = systemLanguage ? systemLanguage.split('.')[0] : '';
const language = languageCode.startsWith('en') ? new LanguageEN() : new LanguageVF();
const checker = new CheckPalindrome(language,moment)

// Création de l'interface de lecture
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('> ', (input:string) => {
  
    const outputText = checker.Check(input);
    console.log("#################################################");
    console.log("#################################################");
    console.log(outputText);
    console.log("#################################################");
    console.log("#################################################");

  rl.close();
});