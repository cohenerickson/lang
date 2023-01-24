type TokenType = "Identifier" | "OpenParenToken" | "CloseParenToken" | "NumericLiteral" | "PlusToken" | "MinusToken" | "AccessorToken";

export default class Token {
  type: TokenType;
  value?: string;

  constructor(type: TokenType, value?: string) {
    this.type = type;

    // type safety
    if (value && this.doesSupportValue()) {
      this.value = value;
    } else if (!value && this.doesSupportValue()) {
      throw new SyntaxError(`Value for token of type ${type} was not provided.`);
    } else if (value && !this.doesSupportValue()) {
      throw new SyntaxError(`Token of type ${type} does not support a value.`);
    }
  }

  private doesSupportValue(): boolean {
    return ["Identifier", "NumericLiteral"].includes(this.type);
  }
}
