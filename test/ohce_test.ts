import * as os from "os";
import { CheckPalindrome } from "../src/domain/checkPalindrome";
import { Formulation } from "../src/domain/formulation";
import { LanguageVF } from "../src/domain/languageVF";
import { LanguageEN } from "../src/domain/languageEN";
import { LanguageInterface } from "../src/domain/languageInterface";
import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";
import { LanguageSpy } from './utilities/languageSpy';
import { TimeOfDay } from "../src/domain/timeOfDay";


describe("STEP 1 - Test", () => {
    test.each([
        ['hello'],
        ['failed'],
        ['test'],
    ])("QUAND on saisit une chaine " +
        "ALORS celle-ci est renvoyé en miroir ", (text : string) =>{
        let checker = new CheckPalindromeBuilder()
        .Build();
        let result = checker.Check(text);
        
        let attendu = text.split('').reverse().join('');

        expect(result).toContain(attendu);
    })
    
    test("QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit !' est envoyé ensuite", () =>{
       const palindrome = "kayak";
       let checker = new CheckPalindromeBuilder()
       .Build();

       let result = checker.Check(palindrome);
 
       expect(result).toContain(palindrome + os.EOL + ">> Bien dit !");
    })

    test("QUAND on saisit une chaine " +
        "ALORS 'Bonjour' est envoyé avant toute réponse ", () =>{
        const text = "test";
        let checker = new CheckPalindromeBuilder()
        .Build();

        let result = checker.Check(text);

        let firstLine = result.split(os.EOL)[0];
    
        expect(firstLine).toEqual(Formulation.BONJOUR)
    })

    test("QUAND on saisit une chaine " +
        "ALORS 'Au revoir' est envoyé en dernier", () =>{
        const text = "test";
        let checker = new CheckPalindromeBuilder()
        .Build();

        let result = checker.Check(text);
    
        let lines = result.split(os.EOL);
        let lastLine = lines[lines.length - 1];

        expect(lastLine).toEqual(Formulation.AU_REVOIR)
    })

    
});

describe("STEP 2 - Test", () => {
    test.each([
        [new LanguageVF(), Formulation.BIEN_DIT],
        [new LanguageEN(), Formulation.WELL_SAID],
    ])("ETANT DONNE un utilisateur parlant une langue " +
        "QUAND on saisit un palindrome " +
        "ALORS il est renvoyé " +
        "ET le <bienDit> de cette langue est envoyé",
    (language: LanguageInterface, expected: string) => {

        const palindrome = "kayak"
        let checker = new CheckPalindromeBuilder()
            .SetLanguage(language)
            .Build();

        let result = checker.Check(palindrome);

        expect(result).toContain(palindrome + os.EOL + ">> " + expected);
    });

    test.each([
        ['test'],
        ['kayak'],
        ['hello'],
        ['wow'],
    ])("ETANT DONNE un utilisateur parlant une langue " +
        "QUAND on saisit une chaine " +
        "ALORS <bonjour> de cette langue est envoyé avant tout",
        (text: string) => {
        let languageSpy = new LanguageSpy();

        let checker = new CheckPalindromeBuilder()
            .SetLanguage(languageSpy)
            .Build();

        let result = checker.Check(text);

        let firstLine = result.split(os.EOL)[0];
        expect(languageSpy.BeginAccessed()).toBe(true)
        expect(firstLine).toEqual(languageSpy.Begin(TimeOfDay.Inconnu))
    });

    test.each([
        ['test'],
        ['kayak'],
        ['hello'],
        ['wow'],
    ])("ETANT DONNE un utilisateur parlant une langue " +
        "QUAND on saisit une chaine " +
        "ALORS <au revoir> de cette langue est envoyé en dernier",
        (text: string) => {
        let languageSpy = new LanguageSpy();

        let checker = new CheckPalindromeBuilder()
            .SetLanguage(languageSpy)
            .Build();

        let result = checker.Check(text);

        let lines = result.split(os.EOL);
        let lastLine = lines[lines.length - 1];

        expect(languageSpy.EndAccessed()).toBe(true)
        expect(lastLine).toEqual(languageSpy.End(TimeOfDay.Inconnu))
    });

    
});

describe("STEP 3 - Test", () => {
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
    });
    
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