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

    public static getCurrentTimeOfDay(): TimeOfDay{
        const currentTime = new Date();
        const hour = currentTime.getHours();

        if (hour >= 5 && hour < 12) {
            return TimeOfDay.Matin;
        } else if (hour >= 12 && hour < 18) {
            return TimeOfDay.AprèsMidi;
        } else if (hour >= 18 && hour < 22) {
            return TimeOfDay.Soirée;
        } else {
            return TimeOfDay.Nuit;
        }
    }

    public toString(){
        return this._moment;
    }
}