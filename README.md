# ORMUCO Assignment
#### Question A
Your goal for this question is to write a program that accepts two lines (x1,x2) and (x3,x4) on the
x-axis and returns whether they overlap. As an example, (1,5) and (2,6) overlaps but not (1,5)
and (6,8).

#### Question B
The goal of this question is to write a software library that accepts 2 version string as input and
returns whether one is greater than, equal, or less than the other. As an example: “1.2” is
greater than “1.1”. Please provide all test cases you could think of.

##### Answer:
To verify first two questions from the assignment:
- after downloading repository: go to "client" folder, run *npm i*
- and then *npm run test*

  The results will be in the terminal window
  https://github.com/alxmandra/assesment/blob/main/client/src/spec.js
  ![assignment](https://github.com/alxmandra/assesment/assets/22781341/66e12a2b-b097-4562-95a8-dcc484384695)


#### Question C
At Ormuco, we want to optimize every bits of software we write. Your goal is to write a new
library that can be integrated to the Ormuco stack. Dealing with network issues everyday,
latency is our biggest problem. Thus, your challenge is to write a new Geo Distributed LRU (Least
Recently Used) cache with time expiration. This library will be used extensively by many of our
services so it needs to meet the following criteria:
1 - Simplicity. Integration needs to be dead simple.
2 - Resilient to network failures or crashes.
3 - Near real time replication of data across Geolocation. Writes need to be in real time.
4 - Data consistency across regions
5 - Locality of reference, data should almost always be available from the closest region
6 - Flexible Schema
7 - Cache can expire
As a hint, we are not looking for quantity, but rather quality, maintainability, scalability,
testability and a code that you can be proud of.

##### Answer:
As an answer to the question "C", I'm taking responsibility to say: nothing better responds to all acceptance criterias, than Redis.
It requires 0 line of code, other than configuration.

I've added an example - that demonstrates integration part for the NodeJs project.

To run sample project:
- Make sure that you have installed Docker and [Docker-Compose](https://docs.docker.com/compose/install/) 
- Go to root directory
- Run **docker-compose up** - that will pull images from the Docker repository for the Redis and our express.js application.
  ![redis1](https://github.com/alxmandra/assesment/assets/22781341/1b4cd237-6463-4d97-aae9-7947e7a427b4)

  Once all up, we can go and run simple tests in the browser:

  If we run in the adressbar http://localhost:8000/setKey?key=test&value=hello

  We'll see response, confirming that cache was missing, and the cached result - what we are passing on this iteration.
  ![redis_testOne](https://github.com/alxmandra/assesment/assets/22781341/8b735569-4f9f-43cb-a474-e7abeb7db8ee)

  If we hit again "refresh" the same address-bar, we'll notice that cache now valid and it returns message "cache hit".
  ![redis_testTwo](https://github.com/alxmandra/assesment/assets/22781341/8f0432ec-e356-4d45-94b4-b3c1b598f3d2)

  It happens, even if we hit the same link with different value - because the cache is still valid
  ![redis_testTwoOne](https://github.com/alxmandra/assesment/assets/22781341/b6eb45b0-5067-42ba-8620-047318b2ac4b)

  And if we'll be hitting the same link multiple times, we'll notice the moment, when cache becomes invalid and accepts new value.

  Here we've examined simple caching behavior with data-expirity settings.

   Other acceptance criterias could be satisfied with proper Redis configuration for deployed instances (repliction, data consistency across regions, simplisity of integration,
   resilientce to network failures or crashes). Particularly to LRU - [there is a wide list of policies to pick up](https://github.com/alxmandra/assesment/blob/main/redis.conf#L568)

  [Possible options to setUp](https://github.com/alxmandra/assesment/blob/main/redis.conf)

  
  
#### P.S.
For the production I wouldn't select any custom or hand-made creation.
My preference is to use tested, trusted and verified with miilions instalations solution, which is Redis.


