#!/bin/bash

echo "🚀 Instagram Growth Panel Başlatılıyor..."

# Backend'i arka planda başlat
cd backend
npm run dev &
BACKEND_PID=$!
echo "✅ Backend başlatıldı (PID: $BACKEND_PID)"

# Frontend'i başlat
cd ../frontend
npm start &
FRONTEND_PID=$!
echo "✅ Frontend başlatıldı (PID: $FRONTEND_PID)"

echo ""
echo "📱 Site: http://localhost:3000"
echo "🔧 API: http://localhost:5000"
echo ""
echo "Durdurmak için: kill $BACKEND_PID $FRONTEND_PID"

# Bekle
wait