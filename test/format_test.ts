import { CheckPalindromeBuilder } from "./utilities/checkPalindromeBuilder";

describe("STEP 4 - Format de sortie", () => {

    test('QUAND on saisit une chaîne ' +
        'ALORS un retour à la ligne doit conclure le retour de la console',
        () => {
            let text = 'test'
            let checker =
                new CheckPalindromeBuilder()
                    .Build();

            let result = checker.Check(text);
            // @ts-ignore
            expect(result).checkLastLine()
        });
    
 });