interface MajorCredits {
  credit: number;
  _majorCreditsBrand: "Major";
}

interface MinorCredits {
  credit: number;
  _minorCreditsBrand: "Minor";
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MajorCredits = {
    credit: sum,
    _majorCreditsBrand: "Major",
  };

  return obj;
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): number {
  return subject1.credit + subject2.credit;
}
