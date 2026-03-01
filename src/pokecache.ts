export type CacheEntry<T> = {
  createdAt: number;
  val: <T>
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(tempNumber: number) {
    this.#interval = tempNumber;
    this.#startReapLoop
  }

  add(key: string, val: <T>): void {
    let tempEntry: CacheEntry<T> = { createdAt: Date.now(), val }
    this.#cache.set(key, tempEntry)
  }

  get(key: string): <any> {
    let tempValue: <any> = this.#cache.get(key)
if (tempValue != undefined) {
  return tempValue.val;
}
return undefined;
  }

#reap(): void { for(const [key, entry] of this.#cache) {
  let timePassed: number = Date.now() - value.createdAt
  if (timePassed > this.#interval) {
    this.#cache.delete(key);
  };
}
  }

#startReapLoop(): void {;
  let intervalID: NodeJS.Timeout | undefined = setInterval(() => {
  this.#reap()
}, this.#interval);
this.#reapIntervalId = intervalID;
  }

}




}

