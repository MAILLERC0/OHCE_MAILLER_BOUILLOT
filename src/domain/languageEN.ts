import { Formulation } from "./formulation";
import { LanguageInterface } from "./languageInterface";
import { TimeOfDay } from "./timeOfDay";

export class LanguageEN implements LanguageInterface{

    public FindPalindrome(): string{
        return Formulation.WELL_SAID;
    }

    public Begin(moment: TimeOfDay): string{
        if(moment == TimeOfDay.Matin)
            return Formulation.GOOD_MORNING;

        if(moment == TimeOfDay.AprèsMidi)
            return Formulation.GOOD_AFTERNOON;

        if(moment == TimeOfDay.Soirée || moment == TimeOfDay.Nuit)
            return Formulation.GOOD_EVENING;

        return Formulation.HELLO;
    }

    public End(moment: TimeOfDay): string{
        if(moment == TimeOfDay.Nuit)
            return Formulation.GOOD_NIGHT;

        return Formulation.GOODBYE;
    }
}