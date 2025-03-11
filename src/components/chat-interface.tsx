"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendIcon, BrainIcon, UserIcon } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm NeuroHaven, your AI mental health companion. How are you feeling today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(input),
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  const getAIResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase()

    if (lowerInput.includes("sad") || lowerInput.includes("depressed") || lowerInput.includes("unhappy")) {
      return "I'm sorry to hear you're feeling down. Remember that it's okay to have these feelings. Would you like to talk more about what's causing these emotions?"
    } else if (lowerInput.includes("anxious") || lowerInput.includes("worried") || lowerInput.includes("stress")) {
      return "Anxiety can be challenging to deal with. Taking deep breaths and focusing on the present moment might help. Would you like to try a quick breathing exercise together?"
    } else if (lowerInput.includes("happy") || lowerInput.includes("good") || lowerInput.includes("great")) {
      return "I'm glad to hear you're feeling positive! What's contributing to your good mood today?"
    } else if (lowerInput.includes("help") || lowerInput.includes("support")) {
      return "I'm here to support you. Would you like to talk about specific challenges you're facing, or would you prefer some general wellness tips?"
    } else {
      return "Thank you for sharing. How does that make you feel? Remember, I'm here to listen and support you through whatever you're experiencing."
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="w-full">
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex max-w-[80%] items-start gap-2 rounded-lg px-4 py-2 ${
                  message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {message.sender === "ai" && <BrainIcon className="mt-1 h-4 w-4 shrink-0" />}
                <div>
                  <p>{message.content}</p>
                  <p className="mt-1 text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && <UserIcon className="mt-1 h-4 w-4 shrink-0" />}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[80%] items-center gap-2 rounded-lg bg-muted px-4 py-2">
                <BrainIcon className="h-4 w-4" />
                <div className="flex space-x-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground delay-75"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="flex w-full items-center space-x-2 mt-4">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <Button size="icon" onClick={handleSendMessage} disabled={isLoading || !input.trim()}>
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

