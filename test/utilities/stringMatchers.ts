import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';
import * as os from 'os';

const checkLastLine: MatcherFunction<[expected: unknown]> = function (actual: unknown) {
  if (typeof actual !== 'string') throw new Error("Only works with strings");

  const lines = actual.split(os.EOL);
  const lastLine = lines[lines.length - 1];

  const endsWithNewline = lastLine === '';

  const message = endsWithNewline
    ? `La dernière ligne se terminer par un retour à la ligne.`
    : `La dernière ligne devrait se terminer par un retour à la ligne, mais elle se termine par ${actual}.`;

  return {
    message: () => message,
    pass: endsWithNewline
  };
};

expect.extend({
    checkLastLine,
});
