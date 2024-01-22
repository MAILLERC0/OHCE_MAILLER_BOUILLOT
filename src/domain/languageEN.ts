import { Formulation } from "./formulation";
import { LanguageInterface } from "./languageInterface";

export class LanguageEN implements LanguageInterface{

    public FindPalindrome(): string{
        return Formulation.WELL_SAID;
    }

    public Begin(): string{
        return Formulation.HELLO;
    }

    public End(): string{
        return Formulation.GOODBYE;
    }

}