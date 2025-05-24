// Step 1: Simulate User Behavior
document.addEventListener('DOMContentLoaded', () => {
  const simulateButton = document.getElementById('simulate-click');
  if (simulateButton) {
    simulateButton.addEventListener('click', () => {
      simulateClick('dynamic-content', 'Button Clicked!');
    });
  }

  const form = document.getElementById('user-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      handleFormSubmit('user-form', 'dynamic-content');
    });
  }
});


// DOM Manipulation Functions

function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId);
  if (!container) {
    displayError(`Container with ID "${containerId}" not found.`);
    return;
  }
  const element = document.createElement('div');
  element.textContent = content;
  container.appendChild(element);
}


function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}


function simulateClick(containerId, content) {
  addElementToDOM(containerId, content);
}

function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId);
  if (!form) {
    displayError(`Form with ID "${formId}" not found.`);
    return;
  }
  const input = form.querySelector('#user-input');
  if (!input) {
    displayError('Input field not found.');
    return;
  }
  const value = input.value.trim();
  if (!value) {
    displayError('Input cannot be empty');
    return;
  }
  clearError();
  addElementToDOM(containerId, value);
  input.value = '';
}

//  Error Handling
function displayError(message) {
  const errorEl = document.getElementById('error-message');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  }
}
function clearError() {
  const errorEl = document.getElementById('error-message');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }
}
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
};