export interface IGoal {
  title: string,
  url: string,
  prerequisticUrl: string,
  fullfillments: number
}

export interface IGoals {
  goals: IGoal[]
}