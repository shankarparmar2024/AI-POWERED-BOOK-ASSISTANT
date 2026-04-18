from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book
from .rag import store_books, ask_question, recommend_books


@api_view(['GET'])
def get_books(request):
    books = Book.objects.all().values()
    return Response(list(books))


@api_view(['POST'])
def add_book(request):
    title = request.data.get('title')
    description = request.data.get('description')

    if not title or not description:
        return Response({"error": "Missing fields"})

    Book.objects.create(title=title, description=description)

    return Response({"message": "Book added successfully"})


@api_view(['POST'])
def ask_book(request):
    question = request.data.get('question')

    if not question:
        return Response({"error": "No question provided"})

    store_books()
    answer = ask_question(question)

    return Response({
        "question": question,
        "answer": answer
    })


@api_view(['POST'])
def recommend(request):
    title = request.data.get('title')

    if not title:
        return Response({"error": "No title provided"})

    store_books()
    recs = recommend_books(title)

    return Response({
        "recommendations": recs
    })


@api_view(['POST'])
def summarize_book(request):
    title = request.data.get('title')

    if not title:
        return Response({"error": "No title provided"})

    books = Book.objects.filter(title__icontains=title)

    if not books:
        return Response({"summary": "No book found"})

    book = books.first()

    return Response({
        "summary": f"{book.title}: {book.description}"
    })