# 📰 Fake News Detector  

### A smart web application that distinguishes between **real** and **fake** news, both local and international, based on several machine learning algorithms and also offers summaries of articles in just a few lines.
 

---

## 🌐 Live Demo  

👉 **Try it now:** [https://fakenews-detector-p1vx.onrender.com/](https://fakenews-detector-p1vx.onrender.com/)  

---

## 📖 Overview  

Fake News Detector is a machine learning-based web application that was constructed to assist users to confirm the authenticity of news articles online.
  
On entering a news headline, article text, or link the system:

Scans the content on trainedML models.
Classifies it as Real  or Fake .
Gives out a score and summary on confidence.
The users can provide their feedback to ensure that the model improves continuously.
The present project was created as one of the research and development projects of a university concerning AI in media literacy.

---

## 🤖 The AI Behind It  

The system uses **three machine learning models**, each personified with a friendly name to make the experience less technical and more approachable:

| Model Name | Algorithm | Personality |
|-------------|------------|-------------|
| 🧠 **Phuti** | Naive Bayes | Efficient and low level, it is fast and can process huge text with high accuracy. |
| 💡 **Maria** | Support Vector Machine (SVM) |Analytical and accurate - identifies definite borders between Real and Fake news. |
| 📊 **John** | Logistic Regression | 	Stable and moderated - provides the same outcome when used on various articles. |

Each model is trained on a pre-assembled set of news articles and make use of text preprocessing, TF-IDF vectorization, and natural language processing (NLP).


---

## ⚙️ Tech Stack  

**Frontend:**  
- HTML  
- CSS (Tailwind CSS)  
- JavaScript  

**Backend:**  
- Flask (Python)  
- MySQL (for storing user feedback)  

**Machine Learning Libraries:**  
- scikit-learn  
- pandas  
- numpy  
- joblib  

**Hosting:**  
- Frontend & Backend deployed on [Render](https://render.com)

---

## 🧩 System Architecture  

1. **Frontend (Client):**  
   - Users inputs either a URL or text to check.
   - The system then displays predictions, summaries, and feedback options.  

2. **Backend (Flask API):**  
   - Endpoint: [`/predict`](https://fakenews-detector-latest.onrender.com/predict)  
     → Receives text to be processed in the article, performs predictions with the model and provides results.
  
   - Endpoint: [`/feedback`](https://fakenews-detector-latest.onrender.com/feedback)  
     → Stores user feedback in a MySQL database to improve model accuracy.  

3. **Machine Learning Core:**  
   - Trained and serialized ML models loaded via Flask.  
   - Implements NLP preprocessing and classification logic.  

---

## 🧠 Features  

✅ **Multi-model prediction:** Users can choose which model to use.  
✅ **Confidence score:** Displays how sure the model is about its prediction.  
✅ **Automatic summarization:** Generates concise summaries for readability.  
✅ **Feedback system:** Users can rate predictions to help refine models.  
✅ **Offline & error handling:** Graceful “No Internet” modal and user-friendly feedback.  
✅ **Responsive design:** Works across mobile and desktop.  
✅ **Humanized AI personalities:** Models are presented as *Phuti*, *Maria*, and *John* to make machine learning approachable.

---

## 🧍‍♂️ User Flow  

1. Enter or paste a **news article or link**.  
2. Select a **model** (Phuti, Maria, or John).  
3. Click **Check**.  
4. View the result (Real/Fake), confidence, summary, and details.  
5. Submit **feedback** to help improve the system.  

---

## 🧾 Example Output  

> **Prediction:** 🟢 Real News  
> **Confidence:** 92.45%  
> **Model Used:** Maria (SVM)  
> **Summary:** “The article discusses the government’s new housing plan and reactions from local communities.”

---

## 📦 API Endpoints  

| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/predict` | `POST` | Accepts text and returns prediction, confidence, and summary |
| `/feedback` | `POST` | Stores user feedback and metadata into database |

---

## 🧑‍💻 Developer  

**Developed by:** *Phuti Mabitsela*  

🔗 Live App: [https://fakenews-detector-p1vx.onrender.com/](https://fakenews-detector-p1vx.onrender.com/)  
🔗 API: [https://fakenews-detector-latest.onrender.com](https://fakenews-detector-latest.onrender.com)  
