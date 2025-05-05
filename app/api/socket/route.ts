// app/api/socket/route.ts (Next.js 13+ API Route)
import { NextApiRequest, NextApiResponse } from 'next';
import { Server as SocketIOServer } from 'socket.io';
import { Server as HTTPServer } from 'http';

// Extend the Next.js response type to include the Socket.io server
interface ExtendedNextApiResponse extends NextApiResponse {
  socket: Socket & {
    server: HTTPServer & {
      io?: SocketIOServer;
    };
  };
}

// Define types for Emergency and TeamMember
interface Emergency {
  id: string;
  type: string;
  location: string;
  status: string;
  assignedTo: string[];
  lastUpdated: Date;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: string;
  lastCheckIn: Date;
}

let emergencies: Emergency[] = [];
let team: TeamMember[] = [
  { id: '1', name: 'Alex', role: 'Team Lead', status: 'safe', lastCheckIn: new Date() },
  { id: '2', name: 'Jamie', role: 'Developer', status: 'safe', lastCheckIn: new Date() },
  { id: '3', name: 'Taylor', role: 'Designer', status: 'safe', lastCheckIn: new Date() },
];

export default function handler(req: NextApiRequest, res: ExtendedNextApiResponse) {
  if (!res.socket.server.io) {
    console.log('Initializing Socket.io server...');
    const io = new SocketIOServer(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('New client connected:', socket.id);

      // Send initial data
      socket.emit('emergencyUpdate', emergencies);
      socket.emit('teamStatusUpdate', team);

      // Handle emergency triggers
      socket.on('triggerEmergency', (data: Omit<Emergency, 'id' | 'status' | 'assignedTo' | 'lastUpdated'>) => {
        const newEmergency: Emergency = {
          id: Date.now().toString(),
          ...data,
          status: 'active',
          assignedTo: [],
          lastUpdated: new Date(),
        };
        emergencies.push(newEmergency);
        io.emit('emergencyUpdate', emergencies);
      });

      // Handle chat messages
      socket.on('sendChatMessage', (data: { text: string }) => {
        io.emit('newChatMessage', { user: `User-${socket.id.slice(0, 4)}`, text: data.text });
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });
  }
  res.end();
}