'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy, Download, ThumbsUp, ThumbsDown, Send, UserCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

interface Message {
  role: "agent" | "user"
  content: string
  timestamp: string
}

export default function ChatInterface() {
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const [messages] = useState<Message[]>([
    {
      role: "agent",
      content: "Hi there! 👋 I'm your AI therapy assistant. How are you feeling today?",
      timestamp: new Date().toLocaleTimeString()
    },
    {
      role: "user",
      content: "I've been feeling anxious lately...",
      timestamp: new Date().toLocaleTimeString()
    },
    {
      role: "agent",
      content: "I understand that anxiety can be challenging. Could you tell me more about what's been causing these feelings? Remember, this is a safe space to share.",
      timestamp: new Date().toLocaleTimeString()
    }
  ])

  const handleSend = () => {
    if (!input.trim()) return
    // Add message handling logic here
    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Profile Preview */}
      <div className="absolute top-4 right-96 p-2">
        <div 
          onClick={() => navigate('/profile')}
          className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-lg cursor-pointer transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <UserCircle2 className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <div className="text-sm font-medium">Dr. Sarah Connor</div>
            <div className="text-xs text-muted-foreground">Clinical Psychologist</div>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-3",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div className={cn(
                "max-w-[85%] flex gap-3",
                message.role === "user" && "flex-row-reverse"
              )}>
                <div className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.role === "agent" ? "bg-blue-600 text-white" : "bg-slate-100"
                )}>
                  {message.role === "agent" ? "AI" : "Me"}
                </div>
                <div>
                  <div className={cn(
                    "rounded-2xl px-4 py-2 max-w-prose",
                    message.role === "agent" ? "bg-slate-100" : "bg-blue-600 text-white"
                  )}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="border-t bg-white p-4">
        <div className="max-w-2xl mx-auto flex gap-2">
          <Textarea
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="min-h-[44px] max-h-32 resize-none bg-slate-50 border-slate-200 focus:ring-blue-500"
          />
          <Button 
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

