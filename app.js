import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-Drdsjm1gOMAanaw4foPs6GvV",
    apiKey: process.env.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,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();




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

// Simple rule-based chatbot logic
function getChatbotResponse(message) {
  message = message.toLowerCase();
  const completion =  openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: message.textContent}],
  });
  return completion.data.choices[0].message;



 /* if (message.includes('hello') || message.includes('hi')) {
    return 'Hello! How can I help you?';
  } else if (message.includes('how are you')) {
    return "I'm doing well, thank you! How can I assist you today?";
  } else if (message.includes('your name')) {
    return "I'm a simple rule-based chatbot!";
  } else {
    return "I'm not sure how to respond to that. Please try asking something else!";
  }*/
}

// Listen for form submission
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage('You', userMessage);

  // Get chatbot response
  const chatbotResponse = getChatbotResponse(userMessage);
  addMessage('Chatbot', chatbotResponse);

  // Clear input field
  chatInput.value = '';
});

scrollToBottom();