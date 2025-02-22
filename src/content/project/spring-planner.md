---
title: "Sprint Planner"
thumbnail:
  url: https://res.cloudinary.com/dceqefagi/image/upload/v1740235058/portfolio/sprint-planner_800x450_wqhv7x.jpg
  alt: Sprint Planner Thumbnail
mainImage:
  url: https://res.cloudinary.com/dceqefagi/image/upload/v1740235058/portfolio/sprint-planner_1600x900_pvzmhu.jpg
  alt: Sprint Planner
additionalImages:
  - url: https://res.cloudinary.com/dceqefagi/image/upload/v1740235058/sprint-planner/sprint-planner_1600x900_pvzmhu.jpg
    alt: Sprint Planner Landing Page
tags:
  [
    "React",
    "TypeScript",
    "Node",
    "Express",
    "Socket.io",
    "Vite",
    "Materialize CSS",
  ]
projectURL: "https://sprint-planner.aaliyev.com"
githubRepoLinks: ["https://github.com/aliyev12/sprint-planner"]
excerpt: "A real-time collaborative planning poker application for agile teams, featuring customizable categories, interactive voting, and instant results visualization."
weight: 5
status: published
slug: sprint-planner
---

# Sprint Planner - Real-time Agile Estimation Tool

Sprint Planner is a sophisticated real-time collaborative estimation tool built for agile teams to efficiently conduct planning poker sessions. The application enables distributed teams to seamlessly estimate story points, effort, and other metrics in a synchronized, interactive environment.

## Technical Architecture

- **Frontend**: React 19 with TypeScript and Vite
- **State Management**: XState for sophisticated state machines
- **UI Framework**: Materialize CSS for responsive design
- **Backend**: Node.js with Express and TypeScript
- **Real-time Communication**: Socket.io for WebSockets
- **Routing**: React Router v7
- **Theme Support**: Customizable light/dark mode
- **Notifications**: React Toastify for user alerts

## Key Features

### Real-time Collaboration

- Instant synchronization of voting sessions across all connected users
- Live user presence indicators showing who's in the room
- Real-time updates when team members join or leave

### Customizable Estimation Framework

- Create and manage custom estimation categories (story points, LOE, testing hours)
- Design custom voting cards with team-specific values
- Flexible voting scales to match team preferences

### Interactive Voting Experience

- Clear voting session management for admins
- Anonymous voting until all votes are revealed
- Visual indicators of who has and hasn't voted

### Results Visualization

- Automatic statistical analysis of voting results
- Interactive pie charts showing distribution of votes
- Clear indication of winning estimates
- Option to save and track estimation history

### Admin Controls

- Room creation with shareable links
- Session management (start/stop/reset voting)
- Category and card editing permissions
- Exclusive control over results revelation

### User-Friendly Interface

- Intuitive card selection for voting
- Real-time feedback on session status
- Responsive design for desktop and mobile use
- Dark/light theme options for accessibility

## User Experience

### For Session Admins

Admins (the first person to create a room) can:

- Initiate a new planning room with a custom name
- Share a generated room ID or URL with team members
- Create custom categories and estimation values
- Control the voting flow (start/end sessions)
- Reveal results when voting is complete
- Manage the room settings and user access

### For Team Members

Participants can:

- Join sessions via room ID or direct link
- Vote using the provided estimation cards
- See who else has voted (without seeing values until revealed)
- View results visualizations after voting ends
- Participate in successive estimation rounds

## Technical Implementation

- **WebSocket Architecture**: Bidirectional real-time communication between server and clients
- **State Machine**: XState implementation for predictable UI states and transitions
- **Room Management**: Sophisticated room creation, joining, and synchronization logic
- **Responsive UI**: Carefully crafted interface that works across devices
- **Theme System**: Context-based theme switching with persistent preferences
- **Event Handling**: Robust socket event system for reliable message delivery

## Future Roadmap

Sprint Planner is evolving with planned enhancements including:

- Persistent data storage with database integration
- User authentication and profiles
- Sprint history and reporting features
- In-app messaging and discussion functionality
- Custom team templates and presets
- Integration with popular project management tools
- Advanced analytics on team estimation patterns
- Enhanced accessibility features
- Customizable room permissions and roles
- Mobile-native applications
