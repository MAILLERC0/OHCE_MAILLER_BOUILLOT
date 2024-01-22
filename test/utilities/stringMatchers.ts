import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';

const checkLastLineHasNewline: MatcherFunction = function (current: unknown) {
  if (typeof current !== 'string') throw new Error("Only works with strings");

  const hasNewline = /\r?\n$/.test(current);

  const message = hasNewline
    ? `La dernière ligne se terminer par un retour à la ligne.`
    : `La dernière ligne devrait se terminer par un retour à la ligne, mais elle se termine par ${current}.`;

  return {
    message: () => message,
    pass: hasNewline
  };
};

expect.extend({
    checkLastLine: checkLastLineHasNewline,
  });
  
export {};