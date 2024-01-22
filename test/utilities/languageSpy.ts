import { TimeOfDay } from "../../src/domain/timeOfDay";
import {LanguageStub} from "./languageStub";

export class LanguageSpy extends LanguageStub {
    private _beginAccessed:boolean = false;
    private _endAccessed:boolean = false;

    public Begin(moment: TimeOfDay): string {
        this._beginAccessed = true;
        return super.Begin(moment);
    }

    public BeginAccessed() {
        return this._beginAccessed;
    }

    public End(moment: TimeOfDay): string {
        this._endAccessed = true;
        return super.End(moment);
    }

    public EndAccessed() {
        return this._endAccessed;
    }
}