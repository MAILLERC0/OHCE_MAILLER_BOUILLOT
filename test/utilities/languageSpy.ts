import {LanguageStub} from "./languageStub";

export class LanguageSpy extends LanguageStub {
    private _beginAccessed:boolean = false;
    private _endAccessed:boolean = false;

    public Begin(): string {
        this._beginAccessed = true;
        return super.Begin();
    }

    public BeginAccessed() {
        return this._beginAccessed;
    }

    public End(): string {
        this._endAccessed = true;
        return super.End();
    }

    public EndAccessed() {
        return this._endAccessed;
    }
}