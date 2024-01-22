import { TimeOfDay } from "./timeOfDay";

export interface LanguageInterface {

    FindPalindrome(): string;

    Begin(moment: TimeOfDay): string;

    End(): string;

}