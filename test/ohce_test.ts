import * as os from "os";
import { CheckPalindrome } from "../src/domain/checkPalindrome";
import { Formulation } from "../src/domain/formulation";
import { LanguageVF } from "../src/domain/languageVF";
import { LanguageEN } from "../src/domain/languageEN";
import { LanguageInterface } from "../src/domain/languageInterface";
import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";

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
        [new LanguageVF(), 'test'],
        [new LanguageVF(), 'kayak'],
        [new LanguageEN(), 'hello'],
        [new LanguageEN(), 'wow'],
    ])("ETANT DONNE un utilisateur parlant une langue " +
        "QUAND on saisit une chaine " +
        "ALORS <bonjour> de cette langue est envoyé avant tout",
        (language: LanguageInterface, text: string) => {

        let checker = new CheckPalindromeBuilder()
            .SetLanguage(language)
            .Build();

        let result = checker.Check(text);

        let firstLine = result.split(os.EOL)[0];
    
        expect(firstLine).toEqual(language.Begin())
    });


    test.each([
        [new LanguageVF(), 'test'],
        [new LanguageVF(), 'kayak'],
        [new LanguageEN(), 'hello'],
        [new LanguageEN(), 'wow'],
    ])("ETANT DONNE un utilisateur parlant une langue " +
        "QUAND on saisit une chaine " +
        "ALORS <au revoir> de cette langue est envoyé en dernier",
        (language: LanguageInterface, text: string) => {

        let checker = new CheckPalindromeBuilder()
            .SetLanguage(language)
            .Build();

        let result = checker.Check(text);

        let lines = result.split(os.EOL);
        let lastLine = lines[lines.length - 1];

        expect(lastLine).toEqual(language.End())
    });
    
 });