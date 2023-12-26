import { Formulation } from "./formulation";
import { LanguageInterface } from "./languageInterface";

export class LanguageVF implements LanguageInterface{

    public FindPalindrome(): string{
        return Formulation.BIEN_DIT;
    }

    public Begin(): string{
        return Formulation.BONJOUR;
    }

    public End(): string{
        return Formulation.AU_REVOIR;
    }

}