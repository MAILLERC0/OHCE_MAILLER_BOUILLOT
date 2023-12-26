import * as os from "os";
import { Formulation } from "./formulation";

export class CheckPalindrome{


    public static Check(text:string): string {
        let mirror = text.split('').reverse().join('');

        let output = Formulation.BONJOUR + os.EOL + mirror + os.EOL 
        if (mirror == text){
            output += ">> " + Formulation.BIEN_DIT + os.EOL;
        }

        return output + Formulation.AU_REVOIR;
    }
}