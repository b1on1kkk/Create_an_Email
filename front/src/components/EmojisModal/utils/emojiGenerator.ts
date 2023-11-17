const emojRange = [
  [128513, 128591],
  [128640, 128704]
];

export const emojiGenerator = (): number[] => {
  return emojRange
    .map(([start, end]) =>
      Array.from({ length: end - start }, (_, i) => i + start)
    )
    .flat();
};
