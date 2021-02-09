interface MajorCredits {
  credit: number;
  _majorCreditsBrand: string;
}

interface MinorCredits {
  credit: number;
  _minorCreditsBrand: string;
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): number {
  return subject1.credit + subject2.credit;
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): number {
  return subject1.credit + subject2.credit;
}
