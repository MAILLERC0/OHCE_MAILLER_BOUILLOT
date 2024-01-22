import { LanguageInterface } from "../../src/domain/languageInterface";
import { TimeOfDay } from "../../src/domain/timeOfDay";

export class LanguageStub implements LanguageInterface {
    FindPalindrome(): string {
        return "FindPalindrome";
    }
    Begin(moment: TimeOfDay): string {
        return "Begin";
    }
    End(moment: TimeOfDay): string {
        return "End";
    }

}