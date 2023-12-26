import { CheckPalindrome } from '../../src/domain/checkPalindrome';
import { LanguageInterface } from '../../src/domain/languageInterface';
import { LanguageVF } from '../../src/domain/languageVF';
import { TimeOfDay } from '../../src/domain/timeOfDay';


export class CheckPalindromeBuilder {
    private _language: LanguageInterface = new LanguageVF(); //set en français pour ne pas spécifier de language dans la step1
    private _moment: TimeOfDay = TimeOfDay.Inconnu;

    public static Default(){
        return new CheckPalindromeBuilder().Build();
    }

    public Build() : CheckPalindrome{
        return new CheckPalindrome(this._language, this._moment);
    }

    public SetLanguage(language: LanguageVF): CheckPalindromeBuilder {
        this._language = language;
        return this;
    }

    public SetTimeOfDay(moment: TimeOfDay): CheckPalindromeBuilder {
        this._moment = moment;
        return this;
    }
}