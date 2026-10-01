
const fs = require("fs");
const path = "d:/ODR/ODR/frontend/src/components/RealTimeChat.jsx";
let content = fs.readFileSync(path, "utf8");

content = content.replace(
  /} else {\s*const demoCase = { caseId: "DEMO-CASE"/g,
  `} else {
          const demoCase = { caseId: "DEMO-CASE"`
);

// Actually, the syntax error is:
//         if (res.data.success && res.data.data.length > 0) {
//           setCases(res.data.data);
//           setSelectedCaseId(res.data.data[0].caseId);
//         }
//       } else {
// Notice the extra `}` before `else`!

content = content.replace(
  /\}\s*\} else \{/g,
  `} else {`
);

fs.writeFileSync(path, content, "utf8");
console.log("Fixed syntax error");

