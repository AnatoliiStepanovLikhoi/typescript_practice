function echo<const T>(values: T[]): T[] {
  return values;
}

const redOrGreen = echo(["red", "green"]);

// redOrGreen.push("yellow");
