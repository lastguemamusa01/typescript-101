// The Voice: blind auditions

class Person55 {
    id: number;
    name: string;
    age: number;
  }
  
  type RemoveProps<T, K> = Exclude<keyof T, K>;
  
  type RemainingProps = RemoveProps<Person55, 'name' | 'age'>;
  
  type PersonBlindAuditions = Pick<Person55, RemainingProps>;