# 🔄 Sorting Algorithm Visualizer

An interactive web application that visualizes popular sorting algorithms in real-time.

![Sorting Algorithm Visualizer](https://github.com/user-attachments/assets/b4e99280-3fbd-4a8a-92a5-674b9433b165)

## Features

- **5 Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort
- **Interactive Visualization**: Watch sorting algorithms in action with color-coded bars
- **Customizable Parameters**: 
  - Adjust sorting speed (1-100%)
  - Change array size (10-100 elements)
- **Real-time Controls**: Start, Stop, and Generate New Array buttons
- **Algorithm Comparison Table**: View time and space complexity for each algorithm

## How to Use

1. **Open the Application**: Simply open `index.html` in a web browser
2. **Select Algorithm**: Choose from the dropdown menu
3. **Adjust Settings**: 
   - Use the speed slider to control visualization speed
   - Use the array size slider to change the number of elements
4. **Generate Array**: Click "Generate New Array" to create a new random array
5. **Start Sorting**: Click "Start Sort" to begin the visualization
6. **Stop Anytime**: Click "Stop" to halt the sorting process

## Color Coding

- **Blue**: Unsorted elements
- **Orange/Red**: Elements being compared
- **Green**: Sorted elements

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Sorting algorithms and DOM manipulation

## Sorting Algorithms Implemented

### Bubble Sort
- **Time Complexity**: O(n²) average and worst case, O(n) best case
- **Space Complexity**: O(1)
- **Stable**: Yes

### Selection Sort
- **Time Complexity**: O(n²) all cases
- **Space Complexity**: O(1)
- **Stable**: No

### Insertion Sort
- **Time Complexity**: O(n²) average and worst case, O(n) best case
- **Space Complexity**: O(1)
- **Stable**: Yes

### Quick Sort
- **Time Complexity**: O(n log n) average and best case, O(n²) worst case
- **Space Complexity**: O(log n)
- **Stable**: No

### Merge Sort
- **Time Complexity**: O(n log n) all cases
- **Space Complexity**: O(n)
- **Stable**: Yes

## Running Locally

No build process required! Just:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## License

Free to use for educational purposes.
