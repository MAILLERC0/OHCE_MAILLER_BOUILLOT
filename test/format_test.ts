import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";
import { checkLastLine } from './utilities/checkLastLine';
import * as os from 'os';

describe("STEP 4 - Format de sortie", () => {

    test('QUAND on saisit une chaîne ' +
        'ALORS un retour à la ligne doit conclure le retour de la console',
        () => {
            let text = 'test'
            let checker =
                new CheckPalindromeBuilder()
                    .Build();

            let result = checker.Check(text) + os.EOL;
            console.log(result);

            expect(checkLastLine(result)).toMatchObject({
                pass: true,
            });
        });
    
 });