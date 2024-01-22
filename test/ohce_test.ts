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
    
 });