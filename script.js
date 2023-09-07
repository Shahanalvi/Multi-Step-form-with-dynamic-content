///   <!-- Start Multi-step form -->

const form = document.getElementById('multiStepForm');
const steps = Array.from(form.getElementsByClassName('step'));
const nextBtns = Array.from(form.getElementsByClassName('nextBtn'));
const prevBtns = Array.from(form.getElementsByClassName('prevBtn'));
const reviewName = document.getElementById('reviewName');
const reviewAddress = document.getElementById('reviewAddress');

let currentStep = 0;

nextBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (validateStep(currentStep)) {
      steps[currentStep].style.display = 'none';
      currentStep++;
      steps[currentStep].style.display = 'block';
      updateReview();
    }
  });
});

prevBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    steps[currentStep].style.display = 'none';
    currentStep--;
    steps[currentStep].style.display = 'block';
    updateReview();
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateStep(currentStep)) {
    // Submit the form data
    alert('Form submitted successfully!');
  }
});

function validateStep(stepIndex) {
  const inputs = Array.from(steps[stepIndex].getElementsByTagName('input'));
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
      showErrorMessage(input);
    } else {
      hideErrorMessage(input);
    }
  });
  
  return isValid;
}

function showErrorMessage(input) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'invalid-feedback';
  errorDiv.textContent = input.validationMessage;
  input.classList.add('is-invalid');
  input.parentNode.insertBefore(errorDiv, input.nextSibling);
}

function hideErrorMessage(input) {
  const errorDiv = input.nextElementSibling;
  if (errorDiv && errorDiv.className === 'invalid-feedback') {
    errorDiv.remove();
    input.classList.remove('is-invalid');
  }
}

function updateReview() {
  if (currentStep === 0) {
    reviewName.textContent = form.name.value;
  } else if (currentStep === 1) {
    reviewAddress.textContent = form.address.value;
  }
}

///<!-- End Multi-step form -->


///Start dynamic

updateProgressBar();

editBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const stepToEdit = parseInt(btn.getAttribute('data-step'));
    goToStep(stepToEdit);
  });
});

function goToStep(stepIndex) {
  steps[currentStep].style.display = 'none';
  currentStep = stepIndex;
  steps[currentStep].style.display = 'block';
  updateProgressBar();
}

function updateProgressBar() {
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.setAttribute('aria-valuenow', progressPercentage);
}

///End Dynamic 
