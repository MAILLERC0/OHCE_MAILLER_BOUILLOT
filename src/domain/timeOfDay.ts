export class TimeOfDay {
    private readonly _moment: string;

    public static Inconnu: TimeOfDay = new TimeOfDay("Inconnu");
    public static Matin: TimeOfDay = new TimeOfDay("Matin");
    public static AprèsMidi: TimeOfDay = new TimeOfDay("Après-Midi");
    public static Soirée: TimeOfDay = new TimeOfDay("Soirée");
    public static Nuit: TimeOfDay = new TimeOfDay("Nuit");

    private constructor(moment: string) {
        this._moment = moment;
    }

    public toString(){
        return this._moment;
    }
}