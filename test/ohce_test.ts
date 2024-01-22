import * as os from "os";
import { CheckPalindrome } from "../src/domain/checkPalindrome";


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
    
 });