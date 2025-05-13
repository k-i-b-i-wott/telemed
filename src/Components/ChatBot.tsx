;
import {Box, Paper,Typography,IconButton,TextField,Divider,Button,Fab} from '@mui/material'

import React,{useState} from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';


interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      sender: 'user',
      text: input
    };

    setMessages((prev) => [...prev, newMessage]);
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
            zIndex: 2000
          }}
        >
          
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              p: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
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
                    bgcolor: msg.sender === 'user' ? '#1976d2' : '#e0e0e0',
                    color: msg.sender === 'user' ? 'white' : 'black',
                    p: 1,
                    borderRadius: 2,
                    maxWidth: '80%'
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            ))}
          </Box>

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
            <IconButton onClick={handleSend} color="primary">
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}

      {/* Floating Action Button */}
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
