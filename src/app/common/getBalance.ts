import { Self } from "../struct/self";
import { Settlement } from "../struct/settlement";

const sum = (prev, next) => prev + next;

export default (self: Self, settlements: Settlement[]) : number => 
    self.amount - settlements.map(settlement => 
        settlement.transitions
            .map(x => x.price * x.count)
            .reduce(sum, 0)
    )
        .reduce(sum, 0)
