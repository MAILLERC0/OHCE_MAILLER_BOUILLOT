import { CheckPalindrome } from '../../src/domain/checkPalindrome';
import { LanguageInterface } from '../../src/domain/languageInterface';
import { TimeOfDay } from '../../src/domain/timeOfDay';
import { LanguageStub } from './languageStub';


export class CheckPalindromeBuilder {
    private _language: LanguageInterface = new LanguageStub();
    private _moment: TimeOfDay = TimeOfDay.Inconnu;

    public static Default(){
        return new CheckPalindromeBuilder().Build();
    }

    public Build() : CheckPalindrome{
        return new CheckPalindrome(this._language, this._moment);
    }

    public SetLanguage(language: LanguageStub): CheckPalindromeBuilder {
        this._language = language;
        return this;
    }

    public SetTimeOfDay(moment: TimeOfDay): CheckPalindromeBuilder {
        this._moment = moment;
        return this;
    }
}