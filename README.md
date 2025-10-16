# 📰 Fake News Detector  

### A smart web application that distinguishes between **real** and **fake** news, both local and international, based on several machine learning algorithms and also offers summaries of articles in just a few lines.
 

---

##  Live Demo  

👉 **Try it now:** [Launch Web Application](https://fakenews-detector-p1vx.onrender.com/)  

---

## Overview  

Fake News Detector is a machine learning-based web application that was constructed to assist users to confirm the authenticity of news articles online.
  
On entering a news headline, article text, or link the system:

Scans the content on trainedML models.
Classifies it as Real  or Fake .
Gives out a score and summary on confidence.
The users can provide their feedback to ensure that the model improves continuously.
The present project was created as one of the research and development projects of a university concerning AI in media literacy.

---

## The AI Behind It  

The system uses **three machine learning models**, each personified with a friendly name to make the experience less technical and more approachable:

| Model Name | Algorithm | Personality |
|-------------|------------|-------------|
| **Phuti** | Naive Bayes | Efficient and low level, it is fast and can process huge text with high accuracy. |
|  **Maria** | Support Vector Machine (SVM) |Analytical and accurate - identifies definite borders between Real and Fake news. |
|  **John** | Logistic Regression | 	Stable and moderated - provides the same outcome when used on various articles. |

Each model is trained on a pre-assembled set of news articles and make use of text preprocessing, TF-IDF vectorization, and natural language processing (NLP).


---

## Tech Stack  

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

## System Architecture  

1. **Frontend (Client):**  
   - Users inputs either a URL or text to check.
   - The system then displays predictions, summaries, and feedback options.  

2. **Backend (Flask API):**  
   - Endpoint: [`/predict`](https://fakenews-detector-latest.onrender.com/predict)  
     → Receives text to be processed in the article, performs predictions with the model and provides results.
  
   - Endpoint: [`/feedback`](https://fakenews-detector-latest.onrender.com/feedback)  
     → Feedback is stored in a MySQL database and used to enhance the accuracy of the model by the stores.


3. **Machine Learning Core:**  
   - FLask-loaded trained and serialized ML models. 
   - Adopts NLP processing and categorization algorithms.  

---

## Features  

 **Multi-model prediction:** The user will have options on which model to use.  
 **Confidence score:** Shows the degree of confidence of the model with regard to its prediction.
 
 **Automatic summarization:** Produces summaries which are readable. 
 **Feedback system:** The users can review the predictions to assist in improving the models.
  
 **Offline & error handling:** Friendly and graceful modal and user-friendly feedbacks about the unavailability of internet.
  
**Responsive design:** Mobile and desktop.  
 **Humanized AI personalities:** Phuti, Maria and John are the models that make machine learning friendly.

---

## User Flow  

1. Enter or paste a **news article or link**.  
2. Select a **model** (Phuti, Maria, or John).  
3. Click **Check News**.  
4. View the result (Real/Fake), confidence, summary, and details.  
5. Submit **feedback** to help improve the system.  

---

## Example Output  

> **Detection:** 🟢 Real News  
> **Confidence:** 92.45%  
> **Model Used:** Naive Bayes  
> **Summary:** “ The new housing plan by the government and the response of local communities is addressed in the article.
”

---

## API Endpoints  

| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/predict` | `POST` | Receives text then returns prediction, confidence, and summary |


---

##  Dependencies

All dependencies (Flask, MySQL connector, Newspaper3k, NLTK, Scikit-learn, etc.) are already containerized and deployed with the backend API.

You only need a modern web browser to run the frontend. 

---

##  Usage Instruction

1. **Commands**
   ```bash
   git clone https://github.com/phuti652-kotetsu/fakenews-detector.git
   cd fakenews-detector
   open index.html


Alternatively, use the deployed version [Click Here To Run Application](https://fakenews-detector-p1vx.onrender.com/)

   


## Developer  

**Developed by:** *Phuti Mabitsela*  

 Live App: [https://fakenews-detector-p1vx.onrender.com/](https://fakenews-detector-p1vx.onrender.com/)  
 API: [https://fakenews-detector-latest.onrender.com](https://fakenews-detector-latest.onrender.com)  
 
---