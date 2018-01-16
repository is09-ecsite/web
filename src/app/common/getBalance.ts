import { Self } from "../struct/self";
import { Settlement } from "../struct/settlement";

export default (self: Self, settlements: Settlement[]) : number => 
    self.amount - settlements.map(settlement => 
        settlement.transitions
            .map(x => x.price * x.count)
            .reduce((prev, next) => prev + next, 0)
    )
        .reduce((prev, next) => prev + next, 0)
