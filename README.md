# 📰 Fake News Detector  

### A smart web application that distinguishes between **real** and **fake** news, both local and international, based on several machine learning algorithms and also offers summaries of articles in just a few lines.
 

---

## 🌐 Live Demo  

👉 **Try it now:** [https://fakenews-detector-p1vx.onrender.com/](https://fakenews-detector-p1vx.onrender.com/)  

---

## 📖 Overview  

**Fake News Detector** is a machine learning–powered web application built to help users verify the authenticity of online news articles.  

By entering a news headline, article text, or link, the system:  
1. Analyzes the content using trained ML models.  
2. Classifies it as **Real** 🟢 or **Fake** 🔴.  
3. Provides a **confidence score** and **summary**.  
4. Allows users to give **feedback**, helping the model continuously improve.  

This project was developed as part of a **university research and development initiative** focused on **AI in media literacy**.

---

## 🤖 The AI Behind It  

The system uses **three machine learning models**, each personified with a friendly name to make the experience less technical and more approachable:

| Model Name | Algorithm | Personality |
|-------------|------------|-------------|
| 🧠 **Phuti** | Naive Bayes | Fast and efficient — handles large text quickly with good accuracy. |
| 💡 **Maria** | Support Vector Machine (SVM) | Analytical and precise — finds clear boundaries between Real and Fake news. |
| 📊 **John** | Logistic Regression | Reliable and balanced — offers consistent results across different article types. |

Each model is trained on curated datasets of news articles, leveraging **text preprocessing**, **TF-IDF vectorization**, and **natural language processing (NLP)** techniques.

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
   - Users input text or a URL to check.  
   - The system displays predictions, summaries, and feedback options.  

2. **Backend (Flask API):**  
   - Endpoint: [`/predict`](https://fakenews-detector-latest.onrender.com/predict)  
     → Accepts article text, runs model predictions, and returns results.  
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
