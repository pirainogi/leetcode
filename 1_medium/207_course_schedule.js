// There are a total of n courses you have to take, labeled from 0 to n-1. Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1] Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
//
// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.
//
// Input: 2, [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible
//
// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

const canFinish = (numCourses, prerequisites) => {
  const indegree = new Array(numCourses).fill(0);
  const queue = [];

  for (const [course, prereq] of prerequisites) {
    indegree[course] += 1;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;

  while (queue.length !== 0) {
    const c = queue.pop();
    count += 1;

    for (const [course, prereq] of prerequisites) {
      if (prereq === c) {
        indegree[course] -= 1;
        if (indegree[course] === 0) {
          queue.push(course);
        }
      }
    }
  }
  return count === numCourses;
};

// Big O: O(n^2)
