import { Formulation } from "../src/domain/formulation";
import { LanguageEN } from "../src/domain/languageEN";
import { LanguageInterface } from "../src/domain/languageInterface";
import { LanguageVF } from "../src/domain/languageVF";
import { TimeOfDay } from "../src/domain/timeOfDay";
import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";
import * as os from 'os';


describe("STEP 3 - Langage", () => {
    test.each([
        [new LanguageVF(), TimeOfDay.Matin, Formulation.BONJOUR],
        [new LanguageVF(), TimeOfDay.AprèsMidi, Formulation.BONJOUR],
        [new LanguageVF(), TimeOfDay.Soirée, Formulation.BONSOIR],
        [new LanguageVF(), TimeOfDay.Nuit, Formulation.BONSOIR],        
        [new LanguageEN(), TimeOfDay.Matin, Formulation.GOOD_MORNING],
        [new LanguageEN(), TimeOfDay.AprèsMidi, Formulation.GOOD_AFTERNOON],
        [new LanguageEN(), TimeOfDay.Soirée, Formulation.GOOD_EVENING],
        [new LanguageEN(), TimeOfDay.Nuit, Formulation.GOOD_EVENING],
    ])("ETANT DONNE un utilisateur parlant une langue" +
    "ET que la période de la journée est <période>"+
    "QUAND on saisit une chaîne"+
    "ALORS <salutation> de cette langue à cette période est envoyé avant tout",
        (language: LanguageInterface, moment: TimeOfDay, expected: string) => {
        let checker = new CheckPalindromeBuilder()
        .SetLanguage(language)
        .SetTimeOfDay(moment)
        .Build();

        let result = checker.Check('test');

        let firstLine = result.split(os.EOL)[0];

        expect(firstLine).toEqual(expected)
    })

    test.each([
        [new LanguageVF(), TimeOfDay.Matin, Formulation.BONNE_JOURNEE],
        [new LanguageVF(), TimeOfDay.AprèsMidi, Formulation.BONNE_APRESMIDI],
        [new LanguageVF(), TimeOfDay.Soirée, Formulation.BONNE_SOIREE],
        [new LanguageVF(), TimeOfDay.Nuit, Formulation.BONNE_NUIT],        
        [new LanguageEN(), TimeOfDay.Matin, Formulation.GOODBYE],
        [new LanguageEN(), TimeOfDay.AprèsMidi, Formulation.GOODBYE],
        [new LanguageEN(), TimeOfDay.Soirée, Formulation.GOODBYE],
        [new LanguageEN(), TimeOfDay.Nuit, Formulation.GOOD_NIGHT],
    ])("ETANT DONNE un utilisateur parlant une langue" +
        "ET que la période de la journée est <période>"+
        "QUAND on saisit une chaîne"+
        "ALORS <auRevoir> de cette langue à cette période est envoyé en dernier",
        (language: LanguageInterface, moment: TimeOfDay, expected: string) => {
        
        let checker = new CheckPalindromeBuilder()
            .SetLanguage(language)
            .SetTimeOfDay(moment)
            .Build();

        let result = checker.Check('test');

        let lines = result.split(os.EOL);
        let lastLine = lines[lines.length - 1];

        expect(lastLine).toEqual(expected)
    });
});