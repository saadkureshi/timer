const args = (process.argv).slice(2);

if (args.some(isNaN) || args.some(x => x < 0)) {
  throw new Error("Invalid arguments.");
}

for (let arg of args) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
}