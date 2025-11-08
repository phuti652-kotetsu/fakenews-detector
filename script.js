const approveBtn = document.getElementById("approveBtn");
const disapproveBtn = document.getElementById("disapproveBtn");
const feedbackMsg = document.getElementById("feedbackMessage");
const mainLoader = document.getElementById("mainLoader");
const miniLoader = document.getElementById("miniLoader");
const noInternetModal = document.getElementById("noInternetModal");
const emptyTextModal = document.getElementById("emptyTextModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModal2Btn = document.getElementById("closeModal2Btn");

window.onload = function() {
  // Check if modal see
  if (!localStorage.getItem("delayModalSeen")) {
    const modal = document.getElementById("responseDelayModal");
    modal.classList.remove("hidden");

    // Close modal on Got it click
    document.getElementById("closeModal2Btn").addEventListener("click", () => {
      modal.classList.add("hidden");
      localStorage.setItem("delayModalSeen", "true");
    });
  }
};

closeModalBtn.addEventListener("click", () => {
  noInternetModal.classList.add("hidden");
 
});

closeModal2Btn.addEventListener("click", () => {
  
 emptyTextModal.classList.add("hidden");
});



function resetFeedbackUI() {
  document.getElementById("feedbackButtons").classList.remove("hidden");
  approveBtn.disabled = false;
  disapproveBtn.disabled = false;
  approveBtn.classList.remove("opacity-50", "cursor-not-allowed");
  disapproveBtn.classList.remove("opacity-50", "cursor-not-allowed");
  feedbackMsg.textContent = "";
  feedbackMsg.classList.remove("text-green-600", "text-red-600", "font-medium");
}



document.getElementById("checkBtn").addEventListener("click", async () => {
  const text = document.getElementById("newsText").value.trim();
  const model = document.getElementById("modelSelect").value;
  const summarize = document.getElementById("summarySelect").value; // getting dropdown selection



//Shows no text input
  if (!text) {
   
  emptyTextModal.classList.remove("hidden"); 
         
    return;
  }

  const payload = { text, model, summarize };


  try {

    // Show main loader
mainLoader.classList.remove("hidden");
document.getElementById("checkBtn").disabled = true;

    const response = await fetch("https://fakenews-detector-latest.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });


    // Hide main loader
mainLoader.classList.add("hidden");
document.getElementById("checkBtn").disabled = false;

    const data = await response.json();

    //Shows no internt modal
    if (data.error) {
    
      
noInternetModal.classList.remove("hidden"); 
     
      return;
    }

   

// Show results box
document.getElementById("resultBox").classList.remove("hidden");

document.getElementById("predictionText").textContent = 
  data.prediction === "Real" ? "🟢 Real News" : "🔴 Fake News";

document.getElementById("confidence").textContent = 
  `${Number(data.confidence).toFixed(2)}% confidence`;

let modelFigure = "";
switch (data.model_used) {
    case "Naive Bayes":
      modelFigure=`A.L.I.E 2.0 thinks this news is ${ data.prediction === "Real" ? "real news." : "fake news."}  `;    
      break;
    case "Support Vector Machine":
      modelFigure=`Jarvis thinks this news is ${ data.prediction === "Real" ? "real news." : "fake news."}  `;    
      break;  
    case "Logistic Regression":
      modelFigure=`GLaDOS thinks this news is ${ data.prediction === "Real" ? "real news." : "fake News."}  `;    
      break;  
  }

document.getElementById("modelUsed").textContent = 
  `${modelFigure}`;


// Title & meta info
document.getElementById("articleTitle").textContent = data.title || "";
let meta = "";
if (data.author && data.author.length > 0) meta += `${data.author}`;
if (data.published_date && data.published_date !== "Unavailable") meta += ` • ${data.published_date}`;
document.getElementById("articleMeta").textContent = meta;

// Summary (without “Summary:” label)
document.getElementById("summary").textContent = data.summary || "";
// Show the feedback box
document.getElementById("feedbackBox").classList.remove("hidden");

// Unlock buttons for new input/model
approveBtn.disabled = false;
disapproveBtn.disabled = false;
approveBtn.classList.remove("opacity-50", "cursor-not-allowed");
disapproveBtn.classList.remove("opacity-50", "cursor-not-allowed");
feedbackMsg.textContent = "";


// Unique identifier per news item (for locking feedback per article per session)
const currentInput = document.getElementById("newsText").value.trim();
const selectedModel = document.getElementById("modelSelect").value;
const feedbackKey = "feedback_" + btoa(currentInput + "|" + selectedModel);
 // encodes text or link
 

// Checking if the output was already rated in this session
if (localStorage.getItem(feedbackKey)) {
  approveBtn.disabled = true;
  disapproveBtn.disabled = true;
  approveBtn.classList.add("opacity-50", "cursor-not-allowed");
  disapproveBtn.classList.add("opacity-50", "cursor-not-allowed");
  
  // Hiding buttons immediately if already submitted
  document.getElementById("feedbackButtons").classList.add("hidden");
  feedbackMsg.textContent = 
    "💬 You’ve already submitted feedback for this article.";
  feedbackMsg.classList.add("text-gray-500", "font-medium");
}

else{
resetFeedbackUI();
  
}


function lockFeedback() {
  approveBtn.disabled = true;
  disapproveBtn.disabled = true;
  approveBtn.classList.add("opacity-50", "cursor-not-allowed");
  disapproveBtn.classList.add("opacity-50", "cursor-not-allowed");
}

// Feedback submission handler
function sendFeedback(value) {
  console.log("Sending feedback:", value);

  miniLoader.classList.remove("hidden");
  approveBtn.disabled = true;
  disapproveBtn.disabled = true;

  const currentInput = document.getElementById("newsText").value.trim();
  const selectedModel = document.getElementById("modelSelect").value;
  const feedbackKey = "feedback_" + btoa(currentInput + "|" + selectedModel);

  // Detect offline before even trying to send
  if (!navigator.onLine) {
    miniLoader.classList.add("hidden");
    noInternetModal.classList.remove("hidden");
    document.querySelector("#noInternetModal p").textContent =
      "You appear to be offline. Please reconnect and try again.";
    approveBtn.disabled = false;
    disapproveBtn.disabled = false;
    return;
  }

  fetch("https://fakenews-detector-latest.onrender.com/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input_text: currentInput,
      news_title: document.getElementById("articleTitle").textContent,
      news_sample: document.getElementById("summary").textContent,
      prediction: document
        .getElementById("predictionText")
        .textContent.includes("Real")
        ? "Real"
        : "Fake",
      model_used: selectedModel,
      user_feedback: value,
    }),
  })
    .then(async (res) => {
      setTimeout(() => miniLoader.classList.add("hidden"), 400);

      // Handling HTTP-level errors (e.g., Flask down, 500)
      if (!res.ok) {
        console.warn("Server responded with status:", res.status);
       // noInternetModal.classList.remove("hidden");
        document.querySelector("#noInternetModal p").textContent =
          "The feedback server is unreachable or returned an error, please check your connection.";
        throw new Error("Bad response from server");
      }

      const response = await res.json();

      // Mark feedback as submitted
      localStorage.setItem(feedbackKey, "submitted");

      // Hide buttons and show thank-you message
      document.getElementById("feedbackButtons").classList.add("hidden");
      feedbackMsg.classList.remove("text-red-600", "font-medium");
      feedbackMsg.textContent =
        "💬 Thank you for your feedback. Each valid feedback forms part of a new dataset to improve prediction accuracy further.";
      feedbackMsg.classList.add("text-gray-500", "font-medium");
    })
    .catch((error) => {
      
      setTimeout(() => miniLoader.classList.add("hidden"), 400);

      // Hiding loader, re-enabling buttons
      approveBtn.disabled = false;
      disapproveBtn.disabled = false;
      approveBtn.classList.remove("opacity-50", "cursor-not-allowed");
      disapproveBtn.classList.remove("opacity-50", "cursor-not-allowed");

      // Showing offline modal (user lost connection mid-send)
      if (!navigator.onLine) {
        document.querySelector("#noInternetModal p").textContent =
          "It seems you lost connection while submitting feedback. Please reconnect and try again.";
        noInternetModal.classList.remove("hidden");
      } else {
        // Server might have crashed or timeout
        feedbackMsg.textContent = "⚠️ Feedback not saved. Please try again.";
        feedbackMsg.classList.add("text-red-600", "font-medium");
      }
    });
}




// Assigning click handlers
approveBtn.onclick = () => sendFeedback(1);
disapproveBtn.onclick = () => sendFeedback(0);



document.getElementById("checkNewsBtn").addEventListener("click", () => {
  // Unlocking buttons for new input
  approveBtn.disabled = false;
  disapproveBtn.disabled = false;
  approveBtn.classList.remove("opacity-50", "cursor-not-allowed");
  disapproveBtn.classList.remove("opacity-50", "cursor-not-allowed");
  feedbackMsg.textContent = "";
});


   } catch (error) {
    
    // Hiding loaders & re-enable button
    mainLoader.classList.add("hidden");
    document.getElementById("checkBtn").disabled = false;

  
   
  }

});

