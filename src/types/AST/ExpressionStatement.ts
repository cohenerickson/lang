import MemberExpression from "./MemberExpression";
import CallExpression from "./CallExpression";

export default interface ExpressionStatement {
  type: "ExpressionStatement";
  expression: MemberExpression | CallExpression;
}
