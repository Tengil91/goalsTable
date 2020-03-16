export interface IGoal {
  title: string,
  url?: string,
  prerequisiteUrl?: string,
  fullfillments?: number
}

export interface IGoals {
  goals: IGoal[]
}