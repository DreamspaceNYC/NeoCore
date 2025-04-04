FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install flask pandas requests scikit-learn
COPY market_service.py .
CMD ["python", "market_service.py"]

