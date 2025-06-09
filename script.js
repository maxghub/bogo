function selectUnit(unitNumber) {
    // Hide all dropdowns first
    document.querySelectorAll('.unit-dropdowns').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
    
    // Remove 'active' class from all unit boxes
    document.querySelectorAll('.unit-box').forEach(box => {
      box.classList.remove('active');
    });
    
    // Show the selected dropdown & mark as active
    const selectedDropdown = document.getElementById(`dropdown-unit${unitNumber}`);
    if (selectedDropdown) {
      selectedDropdown.style.display = 'block';
    }
    
    const selectedBox = document.getElementById(`unit${unitNumber}box`);
    if (selectedBox) {
      selectedBox.classList.add('active');
    }
    
    // Update the radio button selection
    const radioButton = document.getElementById(`unit${unitNumber}`);
    if (radioButton) {
      radioButton.checked = true;
    }
    
    // Update total price based on selection
    updateTotalPrice(unitNumber);
  }
  
  function updateTotalPrice(unitNumber) {
    const prices = {
      1: "$10.00",
      2: "$18.00",
      3: "$24.00"
    };
    
    const totalElement = document.querySelector('.fw-bold.mb-3');
    if (totalElement) {
      totalElement.textContent = `Total : ${prices[unitNumber]} USD`;
    }
  }
  
  // Initialize with Unit 2 selected (MOST POPULAR)
  document.addEventListener('DOMContentLoaded', function() {
    selectUnit(2);
  });