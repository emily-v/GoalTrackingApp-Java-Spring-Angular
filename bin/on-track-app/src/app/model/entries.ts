import {Goal} from "./goals";
import {Time} from "@angular/common";

export class Entry {
  public entryId: number;
  public amount: number;
  public goal : Goal;
  public timestamp: Time;
}
