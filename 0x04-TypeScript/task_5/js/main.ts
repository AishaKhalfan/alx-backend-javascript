export interface MajorCredits {
    credits: Number;
    brand: "Major";

}
export interface MinorCredits {
    credits: Number;
    brand: "Minor";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits};
}
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
    return { credits: subject1.credits + subject2.credits};
}