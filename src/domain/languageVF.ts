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

    public End(moment: TimeOfDay): string{
        if(moment == TimeOfDay.Matin)
            return Formulation.BONNE_JOURNEE;

        if(moment == TimeOfDay.AprèsMidi)
            return Formulation.BONNE_APRESMIDI;

        if(moment == TimeOfDay.Soirée)
            return Formulation.BONNE_SOIREE;
        if (moment == TimeOfDay.Nuit)
            return Formulation.BONNE_NUIT;

        return Formulation.AU_REVOIR;
    }
}