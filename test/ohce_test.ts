import * as os from "os";
import { CheckPalindrome } from "../src/domain/checkPalindrome";
import { Formulation } from "../src/domain/formulation";


describe("STEP 1 - Test", () => {

    test("QUAND on saisit une chaine " +
        "ALORS celle-ci est renvoyé en miroir ", () =>{
        const text = "test";
        
        let expected = text.split('').reverse().join('');
        let result = CheckPalindrome.Check(text);

        expect(result).toContain(expected);
    })

    test("QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit !' est envoyé ensuite", () =>{

       const palindrome = "kayak";
 
       let result = CheckPalindrome.Check(palindrome);
 
       expect(result).toContain(palindrome + os.EOL + ">> Bien dit !");
    })

    test("QUAND on saisit une chaine " +
        "ALORS 'Bonjour' est envoyé avant toute réponse ", () =>{
       const text = "test";
 
       let result = CheckPalindrome.Check(text);

       let firstLine = result.split(os.EOL)[0];
 
       expect(firstLine).toEqual(Formulation.BONJOUR)
    })
    
 });