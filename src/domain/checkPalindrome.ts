import * as os from "os";
import { LanguageInterface } from "./languageInterface";
import { Formulation } from "./formulation";
import { TimeOfDay } from "./timeOfDay";

export class CheckPalindrome{
    private readonly _language: LanguageInterface;
    private readonly _moment: TimeOfDay;

    constructor(language: LanguageInterface, moment: TimeOfDay) {
        this._language = language;
        this._moment = moment;
    }
    public Check(text:string): string {

        let mirror = text.split('').reverse().join('');

        let output = this._language.Begin(this._moment) + os.EOL + mirror + os.EOL 
        if (mirror == text){
            output += ">> " + this._language.FindPalindrome() + os.EOL;
        }

        return output + this._language.End();
    }
}