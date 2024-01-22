import * as os from "os";
import { LanguageInterface } from "./languageInterface";
import { Formulation } from "./formulation";

export class CheckPalindrome{
    private readonly _language: LanguageInterface;

    constructor(language: LanguageInterface) {
        this._language = language
    }
    public Check(text:string): string {

        let mirror = text.split('').reverse().join('');

        let output = this._language.Begin() + os.EOL + mirror + os.EOL 
        if (mirror == text){
            output += ">> " + this._language.FindPalindrome() + os.EOL;
        }

        return output + Formulation.AU_REVOIR;
    }
}