import { LanguageInterface } from "../../src/domain/languageInterface";

export class LanguageStub implements LanguageInterface {
    FindPalindrome(): string {
        return "FindPalindrome";
    }
    Begin(): string {
        return "Begin";
    }
    End(): string {
        return "End";
    }

}