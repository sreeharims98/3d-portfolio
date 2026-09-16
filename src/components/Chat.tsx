import { useState, useRef, useEffect } from "react";
import chatBotIcon from "../assets/chat-bot.png";

type Message = { role: "user" | "assistant"; content: string };

const STARTER: Message = {
  role: "assistant",
  content: "Ask me about my experience, projects, or skills!",
};

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([STARTER]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [
      ...messages,
      { role: "user", content: text } as Message,
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.slice(1) }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-4 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl bg-[#f5f6fa] shadow-card">
          <div className="bg-gradient-to-r from-[#4d79f5] to-[#6c5cf5] px-4 py-3">
            <p className="font-medium text-white">Ask Sreehari's assistant</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-gradient-to-br from-[#8b3ff0] to-[#6a1fd0] text-white"
                    : "bg-[#e2e4ec] text-[#1f2430]"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-xl bg-[#eef0f5] px-3 py-2 text-sm text-[#1f2430]">
                Thinking...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex gap-2 border-t border-[#e2e4ec] bg-white p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 rounded-lg bg-[#e2e4ec] px-3 py-2 text-sm text-[#1f2430] placeholder:text-[#8a8fa3] outline-none"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="rounded-lg bg-gradient-to-r from-[#4d79f5] to-[#6c5cf5] px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-card"
        aria-label="Toggle chat"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <img src={chatBotIcon} alt="Chat" className="h-10 w-10" />
        )}
      </button>
    </div>
  );
};

export default Chat;
