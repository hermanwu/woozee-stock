export interface Demand {
  name: string;
  parents?: Demand[];
  morality?: string;
}

export enum DemandEnum {
  harmonyOfLife = 'Inner peace',
  timeSaving = 'time saving',
  morality = '',
  creativity = '',
  spontaneity = '',
  acceptance = '',
  purpose = '',
  meaning = '',
  innerPotential = '',
  confidence = '',
  achievement = '',
  repects = '',
  unique = '',
  friendship = '',
  intimacy = '',
  senseOfConnection = '',
  health = '',
  employment = '',
  property = '',
  family = '',
  socialAbility = '',
  breathing = '',
  food = '',
  water = '',
  shelter = '',
  clothing = '',
  sleep = '',
  sex = '',
}
