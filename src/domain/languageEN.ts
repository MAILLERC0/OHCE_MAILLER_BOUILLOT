import { Formulation } from "./formulation";
import { LanguageInterface } from "./languageInterface";

export class LanguageEN implements LanguageInterface{

    public FindPalindrome(): string{
        return Formulation.WELL_SAID;
    }

}