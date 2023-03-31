const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}

function addMessage(sender, message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = `${sender}: ${message}`;
  chatBody.appendChild(messageElement);
  scrollToBottom();
}

async function getOpenAIResponse(userMessage) {
  try {
    const response = await fetch('/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from server:', errorText);
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error getting response:', error);
    return 'Error: Unable to get response from OpenAI API';
  }
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage('You', userMessage);
  chatInput.value = '';

  const chatbotResponse = await getOpenAIResponse(userMessage);
  addMessage('Chatbot', chatbotResponse);

  chatInput.value = '';
});

scrollToBottom();
