import { LanguageInterface } from "../../src/domain/languageInterface";
import { TimeOfDay } from "../../src/domain/timeOfDay";


export class LanguageFake implements LanguageInterface {
    FindPalindrome(): string {
        return "FindPalindrome";
    }

    Begin(moment: TimeOfDay): string {
        return "Firstline/" + moment.toString();
    }
    End(moment: TimeOfDay): string {
        return "Lastline" + moment.toString();
    }
}