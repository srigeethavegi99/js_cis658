document.addEventListener("DOMContentLoaded", function() {
  const numberTable = document.getElementById("numberTable");
  const tbody = numberTable.getElementsByTagName("tbody")[0];
  const sortButton = document.getElementById("sortButton");

  // Function to generate a random number between min and max
  function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Function to populate the table with random numbers
  function populateTable() {
      const numRows = 10; // Change the number of rows as needed
      for (let i = 0; i < numRows; i++) {
          const newRow = document.createElement("tr");
          const newCell = document.createElement("td");
          newCell.textContent = getRandomNumber(1, 100);
          newRow.appendChild(newCell);
          tbody.appendChild(newRow);
      }
  }

  // Initial population of the table
  populateTable();

  // Click event listener for the sort button
  sortButton.addEventListener("click", function() {
      const rows = Array.from(tbody.getElementsByTagName("tr"));
      const sortedRows = rows.sort((a, b) => {
          const numA = parseInt(a.getElementsByTagName("td")[0].textContent);
          const numB = parseInt(b.getElementsByTagName("td")[0].textContent);
          return numA - numB;
      });
      tbody.innerHTML = "";
      sortedRows.forEach(row => tbody.appendChild(row));
  });
});