import { useEffect, useMemo, useRef, useState } from "react";
import { FaPaperPlane, FaRobot, FaTimes, FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "918885492139";

const quickReplies = [
  "Courses",
  "Fees",
  "Batch timings",
  "Placement support",
  "Contact advisor",
];

const initialMessages = [
  {
    from: "bot",
    text: "Hi! I am Core Edge assistant. Ask me about courses, batches, fees, placement support, or contact options. If I cannot answer, I will connect you with our team on WhatsApp.",
  },
];

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("course")) {
    return "We offer AI, Data Analytics, Software Testing, Full Stack, DevOps, Scrum Master, Flutter, Business Analytics, Tableau with AI, Cyber Security, and Frontend Development.";
  }

  if (text.includes("fee") || text.includes("price") || text.includes("cost")) {
    return "Fees can be various by course and batch mode. Share the course name, and our advisor can guide you with the latest fee details.";
  }

  if (text.includes("batch") || text.includes("time") || text.includes("timing")) {
    return "We have online, offline, and hybrid training options. Batch timing depends on the selected course and current schedule.";
  }

  if (text.includes("placement") || text.includes("job") || text.includes("support")) {
    return "Yes, we provide placement assistance, resume guidance, mock interviews, and interview support.";
  }

  if (text.includes("contact") || text.includes("advisor") || text.includes("call")) {
    return "You can call or WhatsApp us at +91 8885492139. You can also submit the contact form on this website.";
  }

  return "I could not find an instant answer. Our team will contact you soon.";
}

function shouldOpenWhatsApp(message) {
  const text = message.toLowerCase();
  return !(
    text.includes("course") ||
    text.includes("fee") ||
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("batch") ||
    text.includes("time") ||
    text.includes("timing") ||
    text.includes("placement") ||
    text.includes("job") ||
    text.includes("support") ||
    text.includes("contact") ||
    text.includes("advisor") ||
    text.includes("call")
  );
}

function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const whatsappUrl = useMemo(() => {
    const lastUserMessage =
      [...messages].reverse().find((message) => message.from === "user")?.text ||
      "Hi Core Edge Academy, I want to know more about your courses.";

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      lastUserMessage
    )}`;
  }, [messages]);

  const sendMessage = (messageText = input) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) {
      return;
    }

    const botText = getBotReply(trimmedMessage);
    const needsWhatsapp = shouldOpenWhatsApp(trimmedMessage);

    setMessages((currentMessages) => [
      ...currentMessages,
      { from: "user", text: trimmedMessage },
      { from: "bot", text: botText },
      ...(needsWhatsapp
        ? [
            {
              from: "bot",
              text: "No instant answer found. Our team will contact you soon. Meanwhile, click below to message us on WhatsApp.",
              type: "handshake",
            },
          ]
        : []),
    ]);
    setInput("");

    if (needsWhatsapp) {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hello Core Edge, I asked: ${trimmedMessage} and would like a team response.`
        )}`,
        "_blank"
      );
    }
  };

  return (
    <div className={`floating-chat ${isOpen ? "is-open" : ""}`}>
      {isOpen && (
        <div className="floating-chat-panel" role="dialog" aria-label="Core Edge chatbot">
          <div className="floating-chat-head">
            <div>
              <span className="chat-avatar">
                <FaRobot />
              </span>
              <div>
                <h3>Core Edge Assistant</h3>
                <p>Usually replies instantly</p>
              </div>
            </div>

            <button
              type="button"
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div className="floating-chat-body" ref={chatBodyRef}>
            {messages.map((message, index) => (
              <div className={`chat-message ${message.from}`} key={`${message.from}-${index}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="quick-replies">
            {quickReplies.map((reply) => (
              <button type="button" key={reply} onClick={() => sendMessage(reply)}>
                {reply}
              </button>
            ))}
          </div>

          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
            />

            <button type="submit" aria-label="Send message">
              <FaPaperPlane />
            </button>
          </form>

          <a
            className="chat-whatsapp-link"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Continue on WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        className="chat-toggle-button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        <FaRobot />
        <span>Chat</span>
      </button>

      <a
        className="floating-whatsapp-button"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hi Core Edge, I would like to speak with your team."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
