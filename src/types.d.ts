export type ItemId = `${string}-${string}-${string}-${string}-${string}`;
export interface Item {
  id: ItemId;
  text: string;
  done: boolean;
  timestamp: number;
}
