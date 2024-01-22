import * as os from 'os';

export function checkLastLine(actual: string) {
  const lines = actual.split(os.EOL);
  const lastLine = lines[lines.length - 1];

  const endsWithNewline = lastLine === '';

  const message = endsWithNewline
    ? 'La dernière ligne se termine par un retour à la ligne.'
    : `La dernière ligne devrait se terminer par un retour à la ligne, mais elle se termine par ${actual}.`;

  return {
    message: () => message,
    pass: endsWithNewline,
  };
}