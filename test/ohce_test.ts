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

    
 });