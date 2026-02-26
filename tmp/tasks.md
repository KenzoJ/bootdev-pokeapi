
- [x] Create a new file in your src directory called pokecache.ts. This will encapsulate all of our caching logic.
- [ ] I created a CacheEntry<T> type to hold the objects we're going to cache. It has the following properties:
	createdAt - A [number] for the Date.now() value that represents when the entry was created.
	val - A T generic that represents the object we're caching.
	Then I made a Cache class that has a private #cache property. It's a Map of CacheEntry objects:

`export class Cache {`
`#cache = new Map<string, CacheEntry<any>>();`
`}`

- [ ] Create an add<T>() method that adds a new entry to the cache object. It should take a key (a string) and a val (a T generic).
  For your add<T>() method, you'll need to:
      Accept a key (string) and a val (generic T)
      Create a new CacheEntry<T> object with the current timestamp (Date.now()) and the value
      Use .set() to add that entry to this.#cache

- [ ] Create a get<T>() method that gets an entry from the cache object. It should take a key (a string) and returns some object. Return undefined if the entry is missing.

- [ ] Great, now we can add and remove entries from our cache... but we don't want it to just grow forever! Let's add a loop that cleans up old entries.
- [ ] Add a #reapIntervalId private field for a union type of NodeJS.Timeout and undefined, initialized to undefined. We'll use this as a timer to know when to clean up old entries.
- [ ] Add a #interval private field for a number to hold the interval (in milliseconds) for the timer.

export class Cache {
#cache = new Map<string, CacheEntry<any>>();
#reapIntervalId: NodeJS.Timeout | undefined = undefined;
#interval: number;
}

- [ ] Create a #reap() method to delete any entries that are older than the interval. It should loop through the cache and delete any entries that are older than Date.now() - this.#interval.
- [ ] Create a #startReapLoop() method that uses setInterval() to call this.#reap() after a delay of this.#interval and store the interval ID in this.#reapIntervalId.
- [ ] Pass a number parameter to the constructor() method and assign its value to this.#interval. Call this.#startReapLoop() in the constructor() method to get the loop started.
- [ ] Create a public (non-#) stopReapLoop() method that uses clearInterval() to stop the reap loop and set this.#reapIntervalId back to undefined.
- [ ] Update your code PokeAPI class to use the cache. If you already have the data for a given URL (we'll use the URLs as our cache keys) in the cache, use that cached data instead of making a new request. Whenever you do make a request, add the response to the cache.
- [ ] Write at least 1 test for your cache package! The tip below should help you get started. Vitest's test.concurrent.each() method may come in handy here.
- [ ] Test your application manually to ensure that the cache works as expected. When you use the map command to get data for the first time there should be a noticeable waiting time. However, when you use mapb it should be instantaneous because the data for that page is already in the cache. Feel free to add some logging that informs you in the command line when the cache is being used.

Run and submit the CLI tests from the root of the repo.

