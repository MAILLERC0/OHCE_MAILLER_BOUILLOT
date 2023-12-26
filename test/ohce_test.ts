import * as os from "os";
import { CheckPalindrome } from "../src/domain/checkPalindrome";
import { Formulation } from "../src/domain/formulation";
import { LanguageVF } from "../src/domain/languageVF";
import { LanguageEN } from "../src/domain/languageEN";
import { LanguageInterface } from "../src/domain/languageInterface";
import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";


describe("STEP 1 - Test", () => {
    test.each([
        ['hello'],
        ['failed'],
        ['test'],
    ])("QUAND on saisit une chaine " +
        "ALORS celle-ci est renvoyé en miroir ", (text : string) =>{
        let checker = new CheckPalindromeBuilder()
        .SetLanguage(new LanguageVF())
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
       .SetLanguage(new LanguageVF())
       .Build();

       let result = checker.Check(palindrome);
 
       expect(result).toContain(palindrome + os.EOL + ">> Bien dit !");
    })

    test("QUAND on saisit une chaine " +
        "ALORS 'Bonjour' est envoyé avant toute réponse ", () =>{
        const text = "test";
        let checker = new CheckPalindromeBuilder()
        .SetLanguage(new LanguageVF())
        .Build();

        let result = checker.Check(text);

        let firstLine = result.split(os.EOL)[0];
    
        expect(firstLine).toEqual(Formulation.BONJOUR)
    })

    test("QUAND on saisit une chaine " +
        "ALORS 'Au revoir' est envoyé en dernier", () =>{
        const text = "test";
        let checker = new CheckPalindromeBuilder()
        .SetLanguage(new LanguageVF())
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