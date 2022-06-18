class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    // if (pos > this.items.length - 1) {
    //   throw new Error("OutOfBounds");
    // }

    // return this.items[pos];

    if (pos <= this.items.length - 1) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
