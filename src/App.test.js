import { hello, add, removeSNames, squareDigits, isPangram, camelCase, shout, XO } from './App';

describe('ADD', () => {
  it('should add two numbers', () => {
    expect(add(1,3)).toBe(4);
    expect(add(2,2)).toBe(4);
    expect(add(2,-2)).toBe(0);
  });
  it('should not add strings', () => {
    expect(add(2, '2')).toBe(null)
  });

  it('should not add objects', () => {
    expect(add(2, {})).toBe(null)
  });

  it('should not add arrays', () => {
    expect(add(2, [])).toBe(null)
  });
});

const names = ['Sam', 'Jill', 'suzan'];

describe('Remove S Names', () => {
  it('should remove all S names.', () =>{
    expect(removeSNames(names)).not.toContain('Sam');
    expect(removeSNames(names).length).toBe(1);
  });

  it('should not remove non S names.', () =>{
    expect(removeSNames(names)).toContain('Jill');
  });

  it('should account for case.', () =>{
    expect(removeSNames(names)).not.toContain('suzan');
    expect(removeSNames(names)).not.toContain('Sam');
  });
});


describe('Square every digit of a number', () => {
  it('should return 811181 when given 9119', () => {
    expect(squareDigits(9119)).toBe(811181);
  });

  it('should return 811181 when given 9119', () => {
    expect(squareDigits(92)).toBe(814);
  });
});



describe('Panagram', () => {
  it('should return true if sentece conatains every letter.', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBeTruthy();
  });

  it('should return false if it doesn\'t contain every letter.', () => {
    expect(isPangram("This is just a random Sentence")).toBeFalsy();
  });
});

describe('CamelCase', () => {
  it('should convert text to camel case', () => {
    expect(camelCase('beach boys')).toBe('BeachBoys');
  });

  it('Should not contain Spaces', () => {
    expect(camelCase('Jean simons jeans')).not.toContain(" ");
  });
});

describe('SHOUT!', () => {
  const testSentence = 'This is a test sentence';
  it('should have an exclamation point at the end', () => {
    expect(shout(testSentence)).toContain('!');
  });

  it('should have be all caps', () => {
    expect(shout(testSentence)).toBe(`${testSentence.toUpperCase()}!`);
  });
});




describe('XO', () => {
  it('should return true if there are an equal number of Xs and Os.', () => {
    expect(XO('xoxo')).toBeTruthy();
  });
  it('should return false if there are an un-equal number of Xs and Os.', () => {
    expect(XO('xox')).toBeFalsy();
  });
  it('should expect other cracters to be in the string', () => {
    expect(XO('xxoh')).toBeFalsy();
    expect(XO('xxdoo')).toBeTruthy();
  });
});
