// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
//
// Example 1: coins = [1, 2, 5], amount = 11 return 3 (11 = 5 + 5 + 1)
//
// Example 2: coins = [2], amount = 3 return -1.
//
// Note: You may assume that you have an infinite number of each kind of coin.


const coinChange = (coins, amount) => {
  let dp = Array(amount + 1).fill(amount + 1);

  if (amount < 0) return -1;
  if (amount === 0) return 0;

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
