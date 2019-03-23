let dictionary: Record<string, typeof item> = {};

// { [key: string] : any} = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: 'js02js09',
  next: 'asda243s',
};

// Numbers are coerced to String
dictionary[0] = item;
