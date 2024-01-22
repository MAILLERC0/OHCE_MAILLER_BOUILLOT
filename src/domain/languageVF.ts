import { Formulation } from "./formulation";
import { LanguageInterface } from "./languageInterface";
import { TimeOfDay } from "./timeOfDay";

export class LanguageVF implements LanguageInterface{

    public FindPalindrome(): string{
        return Formulation.BIEN_DIT;
    }

    public Begin(moment: TimeOfDay): string{
        if(moment == TimeOfDay.Soirée || moment == TimeOfDay.Nuit)
            return Formulation.BONSOIR;

        return Formulation.BONJOUR;
    }

    public End(): string{
        return Formulation.AU_REVOIR;
    }
}