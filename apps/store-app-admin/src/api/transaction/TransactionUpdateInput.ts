import { BoxWhereUniqueInput } from "../box/BoxWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  box?: BoxWhereUniqueInput | null;
  date?: Date | null;
  transactionType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
