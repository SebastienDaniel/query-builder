import { Operator } from "../types";

export function operatorSupportsValue(operator: Operator) {
  return (
    operator !== Operator.OPERATOR_IS_SET &&
    operator !== Operator.OPERATOR_IS_NOT_SET &&
    operator !== Operator.OPERATOR_INVALID
  );
}
