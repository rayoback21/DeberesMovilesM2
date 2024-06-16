
export class DnDCharacter {
  static generateAbilityScore(): number {
    const rolls: number[] = [...Array(4)].map(_ => this.generateRandomDiceRollScore());
    return rolls.sort((a, b) => a - b).slice(0, 3).reduce((n, sum) => sum + n);
  }

  static getModifierFor(numberValue: number): number {
    return Math.floor((numberValue - 10) / 2);
  }

  static generateRandomDiceRollScore(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  static generateCharacter(): {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;
  } {
    const strength = DnDCharacter.generateAbilityScore();
    const dexterity = DnDCharacter.generateAbilityScore();
    const constitution = DnDCharacter.generateAbilityScore();
    const intelligence = DnDCharacter.generateAbilityScore();
    const wisdom = DnDCharacter.generateAbilityScore();
    const charisma = DnDCharacter.generateAbilityScore();
    const hitpoints = 10 + DnDCharacter.getModifierFor(constitution);

    return { strength, dexterity, constitution, intelligence, wisdom, charisma, hitpoints };
  }
}

function CharacterGenerator() {
  const character = DnDCharacter.generateCharacter();

  return (
    <div>
      <h1>Generated Character</h1>
      <ul>
        <li>Strength: {character.strength}</li>
        <li>Dexterity: {character.dexterity}</li>
        <li>Constitution: {character.constitution}</li>
        <li>Intelligence: {character.intelligence}</li>
        <li>Wisdom: {character.wisdom}</li>
        <li>Charisma: {character.charisma}</li>
        <li>Hitpoints: {character.hitpoints}</li>
      </ul>
    </div>
  );
}

export default CharacterGenerator;
