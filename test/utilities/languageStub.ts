import { LanguageInterface } from "../../src/domain/languageInterface";
import { TimeOfDay } from "../../src/domain/timeOfDay";

export class LanguageStub implements LanguageInterface {
    FindPalindrome(): string {
        return "";
    }
    Begin(moment: TimeOfDay): string {
        return "";
    }
    End(moment: TimeOfDay): string {
        return "";
    }

}