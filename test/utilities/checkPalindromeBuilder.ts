import { CheckPalindrome } from '../../src/domain/checkPalindrome';
import { LanguageInterface } from '../../src/domain/languageInterface';
import { LanguageVF } from '../../src/domain/languageVF';


export class CheckPalindromeBuilder {
    private _language: LanguageInterface = new LanguageVF(); //set en français pour ne pas spécifier de language dans la step1

    public static Default(){
        return new CheckPalindromeBuilder().Build();
    }

    public Build() : CheckPalindrome{
        return new CheckPalindrome(this._language);
    }

    public SetLanguage(language: LanguageVF): CheckPalindromeBuilder {
        this._language = language;
        return this;
    }
}