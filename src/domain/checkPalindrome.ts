export class CheckPalindrome{

    public static Check(text:string): string {
        
        let mirror = text.split('').reverse().join('');

        return mirror;
    }
}