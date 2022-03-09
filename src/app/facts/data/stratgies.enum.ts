export enum StrategyType {
  platform = 'Universal Platform',
  tool = 'Standard Tool',
  ecoSystem = 'Ecosystem',
  technology = 'Technology and IP',
  feature = 'More Features',
  userData = 'User Data',
  networkEffect = 'Network Effect',
}

export interface Strategy {
  type: StrategyType;
}
