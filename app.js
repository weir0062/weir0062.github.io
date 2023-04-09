const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}
let b = true;


function addMessage(sender, message) {
  if(b)
  {
   b= false;
   const messageElement = document.createElement('p');
   messageElement.textContent = `poopy badoopy`;
   chatBody.appendChild(messageElement);
  }
  const messageElement = document.createElement('p');
  messageElement.textContent = `${sender}: ${message}`;
  chatBody.appendChild(messageElement);
  scrollToBottom();
}

async function getOpenAIResponse(userMessage) {
  try {
    const response = await fetch('https://mychat-charlesweir.herokuapp.com/message', {
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

const chatContainer = document.querySelector('.chat-container');
const chatButton = document.getElementById('chat-button');
const chatWidget = document.querySelector('.chat-widget');
chatButton.addEventListener('click', () => {
  chatWidget.classList.toggle('show');
});

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const userMessage = chatInput.value;
  addMessage('You', userMessage);
  chatInput.value = '';

  const chatbotResponse = await getOpenAIResponse(userMessage);
  addMessage('Chatbot', chatbotResponse);

});

scrollToBottom();
