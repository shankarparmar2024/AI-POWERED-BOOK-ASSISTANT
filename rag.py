from sentence_transformers import SentenceTransformer
from .models import Book
import numpy as np

# 🔥 Load model once
model = None

def load_model():
    global model
    if model is None:
        model = SentenceTransformer('all-MiniLM-L6-v2')

book_texts = []
book_embeddings = []


# 🔥 Store books from DB
def store_books():
    global book_texts, book_embeddings
    load_model()

    books = Book.objects.all()

    book_texts = [
        f"{book.title}: {book.description}"
        for book in books
    ]

    # Convert to embeddings
    if book_texts:
        book_embeddings = model.encode(book_texts)
    else:
        book_embeddings = []


# 🔥 Semantic Search with filtering
def semantic_search(query, top_k=3, threshold=0.2):
    if len(book_embeddings) == 0:
        return [{"text": "No books available", "score": 0}]
    load_model()

    query_embedding = model.encode(query)

    similarities = np.dot(book_embeddings, query_embedding)

    top_indices = np.argsort(similarities)[::-1]

    results = []

    for i in top_indices:
        score = float(similarities[i])

        if score >= threshold:
            results.append({
                "text": book_texts[i],
                "score": round(score, 3)
            })

        if len(results) == top_k:
            break

    # 🔥 fallback
    if not results:
        results = [
            {
                "text": book_texts[i],
                "score": round(float(similarities[i]), 3)
            }
            for i in top_indices[:top_k]
        ]

    return results


# 🔥 Ask Question API
def ask_question(question):
    store_books()   # refresh data
    return semantic_search(question)


# 🔥 Recommendation API
def recommend_books(title):
    store_books()   # refresh data
    return semantic_search(title)