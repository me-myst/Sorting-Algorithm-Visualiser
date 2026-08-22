// Sorting Algorithm Visualizer Controller
// Vanilla JavaScript implementation

class SortingVisualizer {
  constructor() {
    this.array = [];
    this.isRunning = false;
    this.speed = 50;
    
    // Get DOM elements
    this.containerTarget = document.querySelector('[data-sorting-target="container"]');
    this.algorithmTarget = document.querySelector('[data-sorting-target="algorithm"]');
    this.speedTarget = document.querySelector('[data-sorting-target="speed"]');
    this.sizeTarget = document.querySelector('[data-sorting-target="size"]');
    this.statusTarget = document.querySelector('[data-sorting-target="status"]');
    
    // Initialize
    this.init();
  }
  
  init() {
    this.generateArray();
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Start Sort button
    document.querySelector('[data-action="click->sorting#startSort"]')
      ?.addEventListener('click', () => this.startSort());
    
    // Stop button
    document.querySelector('[data-action="click->sorting#stopSort"]')
      ?.addEventListener('click', () => this.stopSort());
    
    // Generate Array button
    document.querySelector('[data-action="click->sorting#generateArray"]')
      ?.addEventListener('click', () => this.generateArray());
  }

  generateArray() {
    const size = parseInt(this.sizeTarget.value);
    this.array = [];
    for (let i = 0; i < size; i++) {
      this.array.push(Math.floor(Math.random() * 300) + 10);
    }
    this.renderArray();
    this.statusTarget.textContent = "Array generated. Ready to sort!";
  }

  renderArray(comparing = [], sorted = []) {
    this.containerTarget.innerHTML = "";
    const containerWidth = this.containerTarget.offsetWidth || 800;
    const barWidth = Math.max(
      2,
      (containerWidth - this.array.length * 2) / this.array.length
    );

    this.array.forEach((value, index) => {
      const bar = document.createElement("div");
      bar.style.cssText = `
                width: ${barWidth}px;
                height: ${value}px;
                background-color: ${
                  sorted.includes(index)
                    ? "#4CAF50"
                    : comparing.includes(index)
                    ? "#FF5722"
                    : "#2196F3"
                };
                margin: 0 1px;
                display: inline-block;
                vertical-align: bottom;
                transition: all 0.1s ease;
                border-radius: 2px 2px 0 0;
            `;
      this.containerTarget.appendChild(bar);
    });
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async swap(i, j) {
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    this.renderArray([i, j]);
    await this.sleep(101 - this.speed);
  }

  async startSort() {
    if (this.isRunning) return;

    this.isRunning = true;
    const algorithm = this.algorithmTarget.value;
    this.speed = parseInt(this.speedTarget.value);

    this.statusTarget.textContent = `Running ${algorithm}...`;

    try {
      switch (algorithm) {
        case "bubble":
          await this.bubbleSort();
          break;
        case "selection":
          await this.selectionSort();
          break;
        case "insertion":
          await this.insertionSort();
          break;
        case "quick":
          await this.quickSort(0, this.array.length - 1);
          break;
        case "merge":
          await this.mergeSort(0, this.array.length - 1);
          break;
      }
      this.statusTarget.textContent = `${algorithm} sort completed!`;
      this.renderArray([], [...Array(this.array.length).keys()]);
    } catch (error) {
      this.statusTarget.textContent = "Sorting stopped.";
    }

    this.isRunning = false;
  }

  stopSort() {
    this.isRunning = false;
  }

  // Bubble Sort Algorithm
  async bubbleSort() {
    const n = this.array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!this.isRunning) return;
        if (this.array[j] > this.array[j + 1]) {
          await this.swap(j, j + 1);
        } else {
          this.renderArray([j, j + 1]);
          await this.sleep(101 - this.speed);
        }
      }
    }
  }

  // Selection Sort Algorithm
  async selectionSort() {
    const n = this.array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (!this.isRunning) return;
        this.renderArray([i, j, minIdx]);
        await this.sleep(101 - this.speed);
        if (this.array[j] < this.array[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        await this.swap(i, minIdx);
      }
    }
  }

  // Insertion Sort Algorithm
  async insertionSort() {
    for (let i = 1; i < this.array.length; i++) {
      let key = this.array[i];
      let j = i - 1;

      while (j >= 0 && this.array[j] > key) {
        if (!this.isRunning) return;
        this.array[j + 1] = this.array[j];
        this.renderArray([j, j + 1]);
        await this.sleep(101 - this.speed);
        j--;
      }
      this.array[j + 1] = key;
    }
  }

  // Quick Sort Algorithm
  async quickSort(low, high) {
    if (low < high && this.isRunning) {
      const pi = await this.partition(low, high);
      await this.quickSort(low, pi - 1);
      await this.quickSort(pi + 1, high);
    }
  }

  async partition(low, high) {
    const pivot = this.array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (!this.isRunning) return i + 1;
      this.renderArray([j, high, i + 1]);
      await this.sleep(101 - this.speed);

      if (this.array[j] < pivot) {
        i++;
        if (i !== j) {
          await this.swap(i, j);
        }
      }
    }
    await this.swap(i + 1, high);
    return i + 1;
  }

  // Merge Sort Algorithm
  async mergeSort(left, right) {
    if (left < right && this.isRunning) {
      const mid = Math.floor((left + right) / 2);
      await this.mergeSort(left, mid);
      await this.mergeSort(mid + 1, right);
      await this.merge(left, mid, right);
    }
  }

  async merge(left, mid, right) {
    const leftArr = this.array.slice(left, mid + 1);
    const rightArr = this.array.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftArr.length && j < rightArr.length) {
      if (!this.isRunning) return;
      this.renderArray([k]);
      await this.sleep(101 - this.speed);

      if (leftArr[i] <= rightArr[j]) {
        this.array[k] = leftArr[i];
        i++;
      } else {
        this.array[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < leftArr.length) {
      if (!this.isRunning) return;
      this.array[k] = leftArr[i];
      this.renderArray([k]);
      await this.sleep(101 - this.speed);
      i++;
      k++;
    }

    while (j < rightArr.length) {
      if (!this.isRunning) return;
      this.array[k] = rightArr[j];
      this.renderArray([k]);
      await this.sleep(101 - this.speed);
      j++;
      k++;
    }
  }
}

// Initialize the visualizer when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  window.sortingVisualizer = new SortingVisualizer();
});
