// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete at most two transactions.
//
// **Note: **You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
//
// Input: [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3. Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
//
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

const maxProfit = (prices) => {
  let buy1 = Number.MIN_SAFE_INTEGER;
  let sell1 = 0;
  let buy2 = Number.MIN_SAFE_INTEGER;
  let sell2 = 0;
  const len = prices.length;
  for (let i = 0; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};

// Big O: O(n)
