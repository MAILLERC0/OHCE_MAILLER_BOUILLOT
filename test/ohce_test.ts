import * as os from "os";
import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";
import { LanguageSpy } from "./utilities/languageSpy";
import { LanguageStub } from "./utilities/languageStub";
import { TimeOfDay } from "../src/domain/timeOfDay";

describe("STEP 2 - Palindrome", () => {

    test("ETANT DONNE un utilisateur parlant une langue " +
        "QUAND on saisit un palindrome " +
        "ALORS il est renvoyé " +
        "ET le <bienDit> de cette langue est envoyé",
    () => {

        const palindrome = "kayak"

        let checker = new CheckPalindromeBuilder()
            .Build();

        let result = checker.Check(palindrome);

        let expected = new LanguageStub().FindPalindrome()

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