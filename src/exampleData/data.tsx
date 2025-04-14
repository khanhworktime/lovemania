import { IPost } from "@/interfaces/post.model";
import { IStoryLine } from "@/interfaces/storyLine.model";
import { IUserExample } from "@/interfaces/user.model";

import { IConversation, IMessage } from "@/interfaces/message.model";
import { IToken } from "@/interfaces/token.model";

export const storyLineTestData: IStoryLine[] = [
  {
    id: 2,
    userId: "2",
    userName: "Selena",
    userAvatar: "https://picsum.photos/seed/1/800",
    storyLine: [
      {
        image: "https://picsum.photos/seed/2/800",
      },
    ],
  },
  {
    id: 3,
    userId: "3",
    userName: "Simon",
    userAvatar: "https://picsum.photos/seed/3/800",
    storyLine: [
      {
        image: "https://picsum.photos/seed/4/800",
      },
    ],
  },
  {
    id: 4,
    userId: "4",
    userName: "Fabian",
    userAvatar: "https://picsum.photos/seed/5/800",
    storyLine: [
      {
        image: "https://picsum.photos/seed/6/800",
      },
    ],
  },
  {
    id: 44,
    userId: "44",
    userName: "Fabians",
    userAvatar: "https://picsum.photos/seed/7/800",
    storyLine: [
      {
        image: "https://picsum.photos/seed/8/800",
      },
    ],
  },
];

export const currentUser: IUserExample = {
  id: "0",
  name: "Clara",
  age: 25,
  location: "VIETNAM",
  interests: ["traveling", "cooking", "reading"],
  matchesPercentage: 0,
  image: "https://picsum.photos/seed/9/800",
};

export const userTestData: IUserExample[] = [
  {
    id: "1",
    name: "Miranda Kehlani",
    age: 25,
    location: "VIETNAM",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 80,
    image: "https://picsum.photos/seed/10/800",
  },
  {
    id: "2",
    name: "Brandon Aminoff",

    age: 0,
    location: "HAMBURG",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 75,
    image: "https://picsum.photos/seed/11/800",
  },
  {
    id: "3",
    name: "Anna",
    age: 15,
    location: "USA",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 60,
    image: "https://picsum.photos/seed/12/800",
  },
  {
    id: "4",
    name: "Parody Elon",
    age: 25,
    location: "USA",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 50,
    image: "https://picsum.photos/seed/13/800",
  },
  {
    id: "5",
    name: "Eddie",
    age: 23,
    location: "DORTMUND",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 65,
    image: "https://picsum.photos/seed/14/800",
  },
  {
    id: "6",
    name: "BaoBao",
    age: 18,
    location: "VIETNAM",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 70,
    image: "https://picsum.photos/seed/15/800",
  },
  {
    id: "7",
    name: "Chris",
    age: 25,
    location: "USA",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 80,
    image: "https://picsum.photos/seed/16/800",
  },
  {
    id: "8",
    name: "Finn",
    age: 21,
    location: "COLOGNE",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 85,
    image: "https://picsum.photos/seed/17/800",
  },
];

export const postTestData: IPost[] = [
  {
    id: "1",
    content: "Ping me if you wanna talk about Trump memecoins",
    createdAt: new Date(),
    author: userTestData[0],
    image: "https://picsum.photos/seed/18/800",
  },
  {
    id: "2",
    content: "Who do you think will win Euro 2020?",
    createdAt: new Date(),
    author: userTestData[1],
    image: "https://picsum.photos/seed/19/800",
  },
  {
    id: "3",
    content: "So lonely here guys, wanna talk with me???",
    createdAt: new Date(),
    author: userTestData[2],
    image: "https://picsum.photos/seed/20/800",
  },
  {
    id: "4",
    content: "Share with me the type of girl that everyone likes the most! 😆",
    createdAt: new Date(),
    author: userTestData[3],
    image: "https://picsum.photos/seed/21/800",
  },
];

export const conversationTestData: IConversation[] = [
  {
    id: "msg-1",
    from: userTestData[0], // Eddie
    latestMessage: {
      content: "Hey! How are you doing?",
      createdAt: new Date("2025-03-20T10:30:00"),
    },
    unread: true,
  },
  {
    id: "msg-2",
    from: userTestData[5], // BaoBao
    latestMessage: {
      content: "Nice to meet you!",
      createdAt: new Date("2025-03-20T09:15:00"),
    },
    unread: false,
  },
  {
    id: "msg-3",
    from: userTestData[2], // Chris
    latestMessage: {
      content: "Would you like to grab coffee sometime?",
      createdAt: new Date("2025-03-19T18:45:00"),
    },
    unread: true,
  },
  {
    id: "msg-4",
    from: userTestData[3], // Finn
    latestMessage: {
      content: "I love your travel photos!",
      createdAt: new Date("2025-03-19T15:20:00"),
    },
    unread: false,
  },
];

export const messageDetailTestData: IMessage[] = [
  {
    id: "msg-detail-1",
    content: "Hi Nadia, Baobao here! 👋",
    createdAt: new Date("2025-03-20T17:34:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-2",
    content: "Hey Baobao, Nice to meet you! 😊",
    createdAt: new Date("2025-03-20T17:35:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-3",
    content: "You too! Seems we have some things in common here",
    createdAt: new Date("2025-03-20T17:36:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-4",
    content: "So what song are you currently listening to?",
    createdAt: new Date("2025-03-20T17:00:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-5",
    content: "Been listening to John Mayer's new song, Last Train Home",
    createdAt: new Date("2025-03-20T17:01:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-6",
    content: "Oh nice! I love John Mayer too",
    createdAt: new Date("2025-03-20T17:02:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-7",
    content: "What's your favorite album of his?",
    createdAt: new Date("2025-03-20T17:03:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-8",
    content: "Continuum is definitely my favorite! You?",
    createdAt: new Date("2025-03-20T17:04:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-9",
    content: "Same here! Gravity is such a masterpiece",
    createdAt: new Date("2025-03-20T17:05:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-10",
    content: "Would you like to go to his concert together sometime?",
    createdAt: new Date("2025-03-20T17:06:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-11",
    content: "That would be amazing! Let's plan for it! 🎸",
    createdAt: new Date("2025-03-20T17:07:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-12",
    content: "Nice to meet you!",
    createdAt: new Date("2025-03-20T17:08:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
];

export const tokens: IToken[] = [
  {
    name: "STT",
    symbol: "STT",
    image: "https://somnia.network/favicon.ico",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  {
    name: "Tether",
    symbol: "USDT",
    image:
      "https://smithii.io/wp-content/uploads/2023/04/png-transparent-usdt-cryptocurrencies-icon-thumbnail.png",
  },
];
