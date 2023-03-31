const db = firebase.firestore();
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

// Scroll to the bottom of the chat
function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Add a message to the chat
function addMessage(sender, message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = `${sender}: ${message}`;
  chatBody.appendChild(messageElement);
  scrollToBottom();
}

// Fetch chatbot response
async function getChatbotResponse(message) {
  // Replace this function with an API call or custom logic to get a chatbot response
  return `You said: ${message}`;
}

// Listen for form submission
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage('You', userMessage);

  // Get chatbot response
  const chatbotResponse = await getChatbotResponse(userMessage);
  addMessage('Chatbot', chatbotResponse);

  // Clear input field
  chatInput.value = '';
});

scrollToBottom();