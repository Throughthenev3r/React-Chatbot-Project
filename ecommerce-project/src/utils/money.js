export function formatMoney(cents) {
  if (typeof cents !== "number" || isNaN(cents)) {
    return "$0.00";
  }

  return `$${(cents / 100).toFixed(2)}`;
}
