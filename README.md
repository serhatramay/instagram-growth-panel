# 📈 Instagram Growth Panel

Instagram takipçi, beğeni, izlenme ve yorum satış platformu.

## 🚀 Özellikler

- ✅ **Takipçi Satışı** - Gerçek ve aktif takipçiler
- ✅ **Beğeni Satışı** - Gönderi beğenileri
- ✅ **İzlenme Satışı** - Story, Reel ve video izlenmeleri
- ✅ **Yorum Satışı** - Özel yorumlar
- 💳 **Ödeme Sistemi** - Stripe, PayPal entegrasyonu
- 👤 **Kullanıcı Paneli** - Sipariş takibi ve geçmiş
- 🔐 **Admin Paneli** - Sipariş yönetimi ve istatistikler
- 📊 **Analitik** - Detaylı raporlar

## 🛠️ Teknolojiler

**Frontend:**
- React 18
- Tailwind CSS
- Zustand (State Management)
- React Query

**Backend:**
- Node.js + Express
- MongoDB
- JWT Authentication
- Stripe/PayPal API

## 📦 Kurulum

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🔧 Çevre Değişkenleri

`.env` dosyası oluşturun:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/instagram_panel
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_...
PAYPAL_CLIENT_ID=...
```

## 📱 Ekran Görüntüleri

*(Eklenecek)*

## 📝 API Dokümantasyonu

### Auth Endpoints
- `POST /api/auth/register` - Kayıt ol
- `POST /api/auth/login` - Giriş yap
- `GET /api/auth/me` - Profil bilgisi

### Services Endpoints
- `GET /api/services` - Tüm servisler
- `GET /api/services/:id` - Servis detayı

### Orders Endpoints
- `POST /api/orders` - Sipariş oluştur
- `GET /api/orders` - Siparişlerim
- `GET /api/orders/:id` - Sipariş detayı

## ⚠️ Yasal Uyarı

Bu proje eğitim amaçlıdır. Instagram'ın hizmet şartlarına uymayan kullanımlardan sorumlu değiliz.

## 👨‍💻 Geliştirici

[@serhatramay](https://github.com/serhatramay)

## 📄 Lisans

MIT License