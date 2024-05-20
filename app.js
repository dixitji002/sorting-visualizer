let array = [];
let delay = 500; // Default delay time in milliseconds

function resetArray() {
  array = [];
  const arrayContainer = document.getElementById("array-container");
  arrayContainer.innerHTML = "";
  const size = document.getElementById("size").value;
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 500) + 1);
    const arrayBar = document.createElement("div");
    arrayBar.classList.add("array-bar");
    arrayBar.style.height = `${array[i]}px`;
    arrayContainer.appendChild(arrayBar);
  }
}

async function bubbleSort() {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const bar1 = document.getElementsByClassName("array-bar")[j];
      const bar2 = document.getElementsByClassName("array-bar")[j + 1];
      bar1.classList.add("comparing");
      bar2.classList.add("comparing");
      await new Promise(resolve => setTimeout(resolve, delay)); // Delay for visualization
      if (array[j] > array[j + 1]) {
        await swap(j, j + 1);
      }
      bar1.classList.remove("comparing");
      bar2.classList.remove("comparing");
    }
  }
}

async function selectionSort() {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      const bar1 = document.getElementsByClassName("array-bar")[minIndex];
      const bar2 = document.getElementsByClassName("array-bar")[j];
      bar1.classList.add("comparing");
      bar2.classList.add("comparing");
      await new Promise(resolve => setTimeout(resolve, delay)); // Delay for visualization
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      bar1.classList.remove("comparing");
      bar2.classList.remove("comparing");
    }
    await swap(minIndex, i);
  }
}

async function swap(index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  updateVisual();
  await new Promise(resolve => setTimeout(resolve, delay)); // Delay for visualization
}

function updateVisual() {
  const arrayBars = document.getElementsByClassName("array-bar");
  for (let i = 0; i < array.length; i++) {
    arrayBars[i].style.height = `${array[i]}px`;
  }
}

// Event listener for speed control input
document.getElementById("speed").addEventListener("input", function(event) {
  delay = 100 - event.target.value; // Update delay based on input value
});

// Event listener for size control input
document.getElementById("size").addEventListener("input", resetArray);

resetArray(); // Generate initial array on page load
``
