import { LanguageEN } from "../src/domain/languageEN";
import { LanguageVF } from "../src/domain/languageVF";
import { TimeOfDay } from "../src/domain/timeOfDay";
import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";

describe("STEP 4 - Demo 22/01/2024", () => {

    test("Tests de Recettes",
        () => {
        
        let checkerENPalindromeEvening
            = new CheckPalindromeBuilder()
            .SetTimeOfDay(TimeOfDay.Soirée)
            .SetLanguage(new LanguageEN())
            .Build();

        let checkerFRNonPalindromeMorning
            = new CheckPalindromeBuilder()
            .SetTimeOfDay(TimeOfDay.Matin)
            .SetLanguage(new LanguageVF())
            .Build();

        let checkerIncPalindromeMorning
            = new CheckPalindromeBuilder()
            .SetTimeOfDay(TimeOfDay.Nuit)
            .Build();

        // Un palindrome, en anglais, le soir
        console.log(checkerENPalindromeEvening.Check("radar"));

        // Un non-palindrome en français, le matin
        console.log(checkerFRNonPalindromeMorning.Check("ynov"));

        // Un palindrome, la nuit
        console.log(checkerIncPalindromeMorning.Check("wow"));
    });
});