import { Box, Paper, Typography, IconButton, TextField, Divider, Fab } from '@mui/material';
import { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import apiUrl from '../utils/apiUrl';
import ReactMarkdown from 'react-markdown';
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [_error, setError] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);



  const { mutate, isPending } = useMutation({
    mutationKey: ['Chatbot'],
    mutationFn: async (message: string) => {
      const response = await axios.post(`${apiUrl}/chat/chatbot`, { prompt:message }); /
      return response.data; 
    },
    onSuccess: (data: { data: string }) => {
  const botText = data.data;
  setIsTyping(true);

  let index = 0;
  let currentText = "";

  const interval = setInterval(() => {
    if (index < botText.length) {
      currentText += botText[index];
      index++;

      setMessages((prev) => {
       
        if (prev[prev.length - 1]?.sender === 'bot') {
          return [
            ...prev.slice(0, -1),
            { sender: 'bot', text: currentText }
          ];
        }
        
        return [...prev, { sender: 'bot', text: currentText }];
      });
    } else {
      clearInterval(interval);
      setIsTyping(false);
    }
  }, 30); 
},

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message || 'An error occurred');
      } else {
        setError('Server is down, try again');
      }
    }
  });

  const toggleChat = () => setIsOpen(!isOpen);

  
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: 'user',
      text: input
    };

    setMessages((prev) => [...prev, userMessage]); 
    mutate(input); 
    setInput('');
  };

  return (
    <>
      {isOpen && (
        <Paper
          elevation={6}
          sx={{
            position: 'fixed',
            bottom: 100,
            right: 20,
            width: 320,
            height: 420,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 2000,
            borderRadius: 3,
          }}
        >
        
          <Box
            sx={{
              backgroundColor: 'seagreen',
              color: 'white',
              p: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 3,
            }}
          >
            <Typography variant="subtitle1">Chat Assistant</Typography>
            <IconButton onClick={toggleChat} size="small" sx={{ color: 'white' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

         
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflowY: 'auto',
              bgcolor: '#f9f9f9'
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  mb: 1,
                  textAlign: msg.sender === 'user' ? 'right' : 'left'
                }}
              >
                <Box
                  sx={{
                    display: 'inline-block',
                    bgcolor: msg.sender === 'user' ? 'seagreen' : '#e0e0e0',
                    color: msg.sender === 'user' ? 'white' : 'black',
                    p: 1,
                    borderRadius: 2,
                    maxWidth: '80%'
                  }}
                >
                <ReactMarkdown>
                    {msg.text}
                </ReactMarkdown>
                </Box>
              </Box>
            ))}
          </Box>
          {isTyping && (
  <Box sx={{ textAlign: 'left', mb: 1 }}>
    <Box
      sx={{
        display: 'inline-block',
        bgcolor: '#e0e0e0',
        color: 'black',
        p: 1,
        borderRadius: 2,
        maxWidth: '80%',
        fontStyle: 'italic',
        opacity: 0.6
      }}
    >
      Typing...
    </Box>
  </Box>
)}


          <Divider />

          
          <Box sx={{ p: 1, display: 'flex' }}>
            <TextField
              fullWidth
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
            />
            <IconButton onClick={handleSend} color="primary" disabled={isPending}>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}

      
      <Fab
        color="primary"
        onClick={toggleChat}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1500
        }}
      >
        <ChatIcon />
      </Fab>
    </>
  );
};

export default ChatWidget;
