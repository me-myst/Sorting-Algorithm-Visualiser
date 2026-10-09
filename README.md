# SortLab — Sorting Algorithm Visualizer

SortLab is a browser-based learning tool for exploring how common sorting algorithms rearrange an array. Select an algorithm, adjust the array size and animation speed, and follow highlighted comparisons as the values move into order.

## Features

- Six animated algorithms: Quick sort, Merge sort, Heap sort, Insertion sort, Selection sort, and Bubble sort.
- Adjustable array size and animation speed, with shuffle and pause/resume controls.
- Live comparison count and elapsed-time display.
- Algorithm descriptions and best, average, and worst time complexity, plus auxiliary space.
- Responsive layout, keyboard playback shortcut (Space), and reduced-motion support.
- No framework, build step, or runtime dependencies.

## Run locally

The project uses browser-native HTML, CSS, and JavaScript. You can open `index.html` directly, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Project structure

```text
sortlab-project/
├── index.html
├── README.md
├── LICENSE
└── src/
    ├── app.js
    └── style.css
```

## Algorithms and complexity

| Algorithm | Best time | Average time | Worst time | Extra space |
| --- | --- | --- | --- | --- |
| Quick sort | O(n log n) | O(n log n) | O(n²) | O(log n) average recursion |
| Merge sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Heap sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| Insertion sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection sort | O(n²) | O(n²) | O(n²) | O(1) |
| Bubble sort | O(n) with early exit | O(n²) | O(n²) | O(1) |

## Implementation notes

- Each algorithm is implemented directly in `src/app.js`; the visualizer does not use an algorithm library.
- Animation is driven by async step functions, so comparisons can be visualized and playback paused.
- The comparison metric counts comparisons between array values. It excludes bookkeeping operations such as merge-tail copies and swaps.
- Elapsed time measures the animated run, including the selected animation delay. It is a teaching metric, not a benchmark of raw algorithm speed.
- Quicksort uses the last array value as its pivot and has O(n²) worst-case time and O(n) worst-case recursion space.

## Deployment

This is a static site; no server-side runtime is required. To host it with GitHub Pages, push the project to a GitHub repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub will show the published URL in the Pages settings when the first deployment finishes. Netlify and other static hosts can publish the project directory directly.

## Resume entry

**SortLab — Sorting Algorithm Visualizer** | HTML, CSS, JavaScript  
Built a responsive browser-based visualizer for six sorting algorithms with adjustable input size and animation speed, pause/resume controls, live comparison and elapsed-time metrics, and interactive complexity explanations.

Replace this bullet with a measured outcome only after you have measured it, for example: “Implemented six algorithms and validated sorted output across randomized arrays.”

## License

MIT. See [LICENSE](LICENSE).
