const platformLinks = document.querySelectorAll('.platform-link');
const conversationGroups = document.querySelectorAll('.conversation-group');
const conversationItems = document.querySelectorAll('.conversation-item');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.querySelector('.chat-messages');
const chatHeader = document.querySelector('.chat-header');
const searchInput = document.querySelector('input[type="search"]');

const chatData = {
  1: {
    name: 'João Silva',
    phone: '5549999999999',
    platform: 'WhatsApp',
    status: 'Online',
    avatar: 'https://ui-avatars.com/api/?name=João+Silva&background=25D366&color=fff',
    messages: [
      { type: 'received', text: 'Olá! Boa tarde!', time: '10:25' },
      { type: 'received', text: 'Gostaria de saber mais sobre os produtos disponíveis.', time: '10:26' },
      { type: 'received', text: 'Vocês fazem entrega?', time: '10:26' },
      { type: 'sent', text: 'Olá João! Claro, temos vários produtos disponíveis.', time: '10:28' },
      { type: 'sent', text: 'Sim, fazemos entrega em toda a cidade! 🚚', time: '10:28' },
      { type: 'received', text: 'Perfeito! Qual o prazo de entrega?', time: '10:30' },
      { type: 'sent', text: 'O prazo é de 2 a 3 dias úteis para a sua região 📦', time: '10:31' },
      { type: 'received', text: 'Ótimo! Vou fazer o pedido então 😊', time: '10:32' }
    ]
  },
  2: {
    name: 'Maria Santos',
    phone: '5549988888888',
    platform: 'WhatsApp',
    status: 'Online',
    avatar: 'https://ui-avatars.com/api/?name=Maria+Santos&background=25D366&color=fff',
    messages: [
      { type: 'received', text: 'Boa tarde!', time: '09:10' },
      { type: 'sent', text: 'Boa tarde Maria! Como posso ajudar?', time: '09:12' },
      { type: 'received', text: 'Queria saber se tem o produto X em estoque', time: '09:13' },
      { type: 'sent', text: 'Sim, temos disponível! Gostaria de realizar o pedido?', time: '09:14' },
      { type: 'received', text: 'Obrigada pelo atendimento', time: '09:15' }
    ]
  },
  3: {
    name: 'Pedro Costa',
    phone: '5549977777777',
    platform: 'WhatsApp',
    status: 'Visto por último hoje às 08:30',
    avatar: 'https://ui-avatars.com/api/?name=Pedro+Costa&background=25D366&color=fff',
    messages: [
      { type: 'received', text: 'Qual o prazo de entrega?', time: 'Ontem 15:30' },
      { type: 'sent', text: 'Olá Pedro! O prazo é de 2 a 3 dias úteis', time: 'Ontem 15:35' }
    ]
  },
  4: {
    name: 'Ana Lima',
    phone: '5549966666666',
    platform: 'WhatsApp',
    status: 'Online',
    avatar: 'https://ui-avatars.com/api/?name=Ana+Lima&background=25D366&color=fff',
    messages: [
      { type: 'received', text: 'Bom dia! Gostaria de um orçamento', time: '07:45' },
      { type: 'sent', text: 'Bom dia Ana! Claro, vou preparar um orçamento para você', time: '07:50' }
    ]
  },
  5: {
    name: 'Carlos Mendes',
    phone: '5549955555555',
    platform: 'WhatsApp',
    status: 'Digitando...',
    avatar: 'https://ui-avatars.com/api/?name=Carlos+Mendes&background=25D366&color=fff',
    messages: [
      { type: 'received', text: 'Tem disponível em outras cores?', time: 'Seg 14:20' },
      { type: 'sent', text: 'Sim! Temos nas cores azul, vermelho e preto', time: 'Seg 14:25' }
    ]
  },
  6: {
    name: 'Julia Costa',
    platform: 'Instagram',
    status: 'Online',
    avatar: 'https://ui-avatars.com/api/?name=Julia+Costa&background=E4405F&color=fff',
    messages: [
      { type: 'received', text: 'Adorei o produto! 😍', time: '11:20' },
      { type: 'sent', text: 'Que bom que gostou! Quer fazer o pedido?', time: '11:25' }
    ]
  },
  7: {
    name: 'Rafael Alves',
    platform: 'Instagram',
    status: 'Ativo há 5min',
    avatar: 'https://ui-avatars.com/api/?name=Rafael+Alves&background=E4405F&color=fff',
    messages: [
      { type: 'received', text: 'Vi seu post, como faço pedido?', time: '10:45' },
      { type: 'sent', text: 'Olá! Você pode fazer pelo direct ou WhatsApp', time: '10:50' }
    ]
  },
  8: {
    name: 'Lucia Ferreira',
    platform: 'Facebook',
    status: 'Online',
    avatar: 'https://ui-avatars.com/api/?name=Lucia+Ferreira&background=1877F2&color=fff',
    messages: [
      { type: 'received', text: 'Preciso de mais informações', time: '12:00' },
      { type: 'sent', text: 'Claro! O que gostaria de saber?', time: '12:05' }
    ]
  },
  9: {
    name: 'Bruno Souza',
    platform: 'Telegram',
    status: 'Online',
    avatar: 'https://ui-avatars.com/api/?name=Bruno+Souza&background=0088cc&color=fff',
    messages: [
      { type: 'received', text: 'Olá, tudo bem?', time: '13:15' },
      { type: 'sent', text: 'Tudo ótimo! E você?', time: '13:20' }
    ]
  }
};

platformLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const platform = link.getAttribute('data-platform');
    
    platformLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    conversationGroups.forEach(group => {
      group.classList.add('d-none');
    });
    
    const selectedGroup = document.querySelector(`.conversation-group[data-platform="${platform}"]`);
    if (selectedGroup) {
      selectedGroup.classList.remove('d-none');
      
      const firstConversation = selectedGroup.querySelector('.conversation-item');
      if (firstConversation) {
        firstConversation.click();
      }
    }
  });
});

conversationItems.forEach(item => {
  item.addEventListener('click', () => {
    conversationItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    
    const badge = item.querySelector('.badge');
    if (badge) {
      badge.remove();
    }
    
    const chatId = item.getAttribute('data-chat-id');
    loadChat(chatId);
  });
});

function loadChat(chatId) {
  const chat = chatData[chatId];
  if (!chat) return;
  
  const headerHtml = `
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img src="${chat.avatar}" class="rounded-circle me-3" width="50" height="50">
        <div>
          <h5 class="mb-0">${chat.name}</h5>
          <small class="text-muted">
            <i class="bi bi-${getPlatformIcon(chat.platform)} text-${getPlatformColor(chat.platform)}"></i> 
            ${chat.platform} • <span class="text-${getStatusColor(chat.status)}">${chat.status}</span>
          </small>
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-outline-secondary me-2" title="Chamada de voz">
          <i class="bi bi-telephone"></i>
        </button>
        <button class="btn btn-sm btn-outline-secondary me-2" title="Chamada de vídeo">
          <i class="bi bi-camera-video"></i>
        </button>
        <button class="btn btn-sm btn-outline-secondary" title="Mais opções">
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </div>
  `;
  
  chatHeader.innerHTML = headerHtml;
  
  chatMessages.innerHTML = '<div class="message-date text-center mb-3"><span class="badge bg-light text-dark">Hoje</span></div>';
  
  chat.messages.forEach(msg => {
    addMessageToChat(msg.text, msg.type, msg.time, chat.avatar);
  });
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMessageToChat(text, type, time, avatar = null) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  
  if (type === 'received') {
    messageDiv.innerHTML = `
      <img src="${avatar}" class="rounded-circle me-2" width="35" height="35">
      <div class="message-bubble">
        <p class="mb-1">${escapeHtml(text)}</p>
        <small class="text-muted">${time}</small>
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="message-bubble">
        <p class="mb-1">${escapeHtml(text)}</p>
        <small class="text-muted">${time} <i class="bi bi-check-all text-primary"></i></small>
      </div>
    `;
  }
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;
  
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
  addMessageToChat(text, 'sent', time);
  messageInput.value = '';
  messageInput.focus();
  
  setTimeout(() => {
    const responses = [
      'Entendi! Vou verificar isso para você.',
      'Obrigado pela mensagem!',
      'Deixe-me consultar essas informações.',
      'Perfeito! Já estou providenciando.',
      'Tudo certo! Pode deixar comigo.'
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
  }, 2000);
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  
  conversationItems.forEach(item => {
    const name = item.querySelector('h6').textContent.toLowerCase();
    const message = item.querySelector('p').textContent.toLowerCase();
    
    if (name.includes(searchTerm) || message.includes(searchTerm)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});

function getPlatformIcon(platform) {
  const icons = {
    'WhatsApp': 'whatsapp',
    'Instagram': 'instagram',
    'Facebook': 'facebook',
    'Telegram': 'telegram'
  };
  return icons[platform] || 'chat';
}

function getPlatformColor(platform) {
  const colors = {
    'WhatsApp': 'success',
    'Instagram': 'danger',
    'Facebook': 'primary',
    'Telegram': 'info'
  };
  return colors[platform] || 'secondary';
}

function getStatusColor(status) {
  if (status.includes('Online') || status.includes('Digitando')) {
    return 'success';
  }
  return 'secondary';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  loadChat('1');
  
  messageInput.focus();
});