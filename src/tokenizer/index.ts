import Token from "./Token";

interface TokenizerOptns {

}

export default class Tokenizer {
  tokens: Token[] = [];

  constructor(optns: TokenizerOptns) {

  }

  tokenize(script: string): void {
    let i = 0;
    while (i < script.length) {
      let char = script[i]!;

      // ignore whitespace & semicolon
      if (/[\s;]/.test(char)) {
        i++;
        continue;
      }

      if (char === "(") {
        this.tokens.push(new Token("OpenParenToken"));
        i++;
        continue;
      }

      if (char === ")") {
        this.tokens.push(new Token("CloseParenToken"));
        i++;
        continue;
      }

      if (char === "+") {
        this.tokens.push(new Token("PlusToken"));
        i++;
        continue;
      }

      if (char === "-") {
        this.tokens.push(new Token("MinusToken"));
        i++;
        continue;
      }

      const NUMBERS = /[0-9]/;
      if (NUMBERS.test(char)) {
        let value = "";

        while (NUMBERS.test(char)) {
          value += char;
          char = script[++i]!;
        }

        this.tokens.push(new Token("NumericLiteral", value));
        continue;
      }

      const LETTERS = /[a-z_$]/i;
      if (LETTERS.test(char)) {
        let value = "";

        while (LETTERS.test(char)) {
          value += char;
          char = script[++i]!;
        }

        this.tokens.push(new Token("Identifier", value));
        continue;
      }

      throw new SyntaxError(`Unexpected token: "${char}"`);
    }
  }
}
