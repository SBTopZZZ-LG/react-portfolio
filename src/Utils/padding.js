/**
 * @param {number} num Number to pad
 * @param {number} n Padding size
 * @returns {string} Result
 */
export function numPadding(num, n) {
	const numStr = String(num);
	if (numStr.length >= n) return numStr;

	return (
		Array.from({ length: n - numStr.length })
			.map((_) => "0")
			.join("") + numStr
	);
}
