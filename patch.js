
const fs = require("fs");
const path = "d:/ODR/ODR/frontend/src/components/RealTimeChat.jsx";
let content = fs.readFileSync(path, "utf8");

content = content.replace(
  /if \(res\.data\.success && res\.data\.data\.length > 0\) {([\s\S]*?)}(\s*)catch/g,
  `if (res.data.success && res.data.data.length > 0) {$1} else {
          const demoCase = { caseId: "DEMO-CASE", DisputeName: "Interactive Demo Dispute" };
          setCases([demoCase]);
          setSelectedCaseId("DEMO-CASE");
        }
      } catch`
);

content = content.replace(
  /catch \(err\) {\s*console\.error\("Failed to load user cases:", err\);\s*}/g,
  `catch (err) {
        console.error("Failed to load user cases:", err);
        const demoCase = { caseId: "DEMO-CASE", DisputeName: "Interactive Demo Dispute" };
        setCases([demoCase]);
        setSelectedCaseId("DEMO-CASE");
      }`
);

content = content.replace(
  /const fetchParticipants = async \(\) => {/g,
  `if (selectedCaseId === "DEMO-CASE") {
      setParticipants([
        { _id: "admin-demo", name: "System Administrator", role: "admin" },
        { _id: "neutral-demo", name: "Sarah (Mediator)", role: "neutral" },
        { _id: "respondent-demo", name: "John (Respondent)", role: "respondent" }
      ]);
      setActiveRecipient(null);
      setChatMessages([]);
      return;
    }

    const fetchParticipants = async () => {`
);

content = content.replace(
  /const fetchHistory = async \(\) => {/g,
  `const fetchHistory = async () => {
      if (selectedCaseId === "DEMO-CASE") {
        setChatMessages([
          { _id: "1", senderId: activeRecipient._id, message: "Hello! I am " + activeRecipient.name + ". This is a demonstration of the Real-Time Communication module.", timestamp: new Date(Date.now() - 60000) },
          { _id: "2", senderId: currentUserId, message: "Hi! It's great to see this working. How does the AI rewrite feature work?", timestamp: new Date(Date.now() - 30000) },
          { _id: "3", senderId: activeRecipient._id, message: "Just type a casual message below and click the sparkle icon before sending! The AI will automatically rewrite it into a professional, legal-standard message.", timestamp: new Date() }
        ]);
        return;
      }`
);

content = content.replace(
  /const handleSendMessage = \(e\) => {[\s\S]*?if \(!inputMessage\.trim\(\) \|\| !socket \|\| !activeRecipient\) return;/g,
  `const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    if (selectedCaseId === "DEMO-CASE" && activeRecipient) {
      const newMsg = {
        _id: Date.now().toString(),
        senderId: currentUserId,
        message: inputMessage.trim(),
        timestamp: new Date()
      };
      setChatMessages((prev) => [...prev, newMsg]);
      setInputMessage("");
      setTimeout(() => {
         setChatMessages((prev) => [...prev, {
            _id: (Date.now()+1).toString(),
            senderId: activeRecipient._id,
            message: "I received your message. I am a demo bot so I won't do much, but this shows the chat UI working perfectly!",
            timestamp: new Date()
         }]);
      }, 1000);
      return;
    }

    if (!socket || !activeRecipient) return;`
);

content = content.replace(
  /onClick={\(\) => {([\s\S]*?)if \(!socket \|\| !activeRecipient\) return;([\s\S]*?)const payload = {/g,
  `onClick={() => {$1if (!activeRecipient) return;
                    if (selectedCaseId === "DEMO-CASE") {
                      const newMsg = {
                        _id: Date.now().toString(),
                        senderId: currentUserId,
                        message: sug,
                        timestamp: new Date()
                      };
                      setChatMessages((prev) => [...prev, newMsg]);
                      setTimeout(() => {
                         setChatMessages((prev) => [...prev, {
                            _id: (Date.now()+1).toString(),
                            senderId: activeRecipient._id,
                            message: "Thank you for the quick suggestion. I will review it.",
                            timestamp: new Date()
                         }]);
                      }, 1000);
                      return;
                    }
                    if (!socket) return;$2const payload = {`
);

fs.writeFileSync(path, content, "utf8");
console.log("Patched RealTimeChat.jsx successfully");

