import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  UserGroupIcon, 
  HeartIcon, 
  EyeIcon,
  CheckIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const services = {
  followers: {
    name: 'Instagram Takipçi',
    icon: UserGroupIcon,
    color: 'bg-pink-500',
    description: 'Gerçek ve aktif Instagram takipçileri',
  },
  likes: {
    name: 'Instagram Beğeni',
    icon: HeartIcon,
    color: 'bg-red-500',
    description: 'Gönderilerinize gerçek beğeniler',
  },
  views: {
    name: 'Instagram İzlenme',
    icon: EyeIcon,
    color: 'bg-purple-500',
    description: 'Video, Reel ve Story izlenmeleri',
  },
};

const packages = [
  { quantity: 100, price: 4.99 },
  { quantity: 500, price: 19.99, popular: true },
  { quantity: 1000, price: 29.99 },
  { quantity: 5000, price: 129.99 },
];

export default function Order() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const service = services[serviceId] || services.followers;
  const Icon = service.icon;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate order
    setTimeout(() => {
      toast.success('Siparişiniz alındı!');
      navigate('/orders');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Geri
        </button>

        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className={`${service.color} rounded-xl p-4`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{service.name}</h1>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Step 1: Select Package */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Paket Seçin</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {packages.map((pkg) => (
                <button
                  key={pkg.quantity}
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setStep(2);
                  }}
                  className={`relative p-6 border-2 rounded-xl text-left hover:border-purple-500 transition-colors ${
                    selectedPackage?.quantity === pkg.quantity
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      Popüler
                    </span>
                  )}
                  
                  <div className="text-3xl font-bold text-gray-900">
                    {pkg.quantity.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">adet</div>
                  <div className="mt-4 text-2xl font-bold text-purple-600">
                    ₺{pkg.price}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Enter Details */}
        {step === 2 && selectedPackage && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Hesap Bilgileri</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram Kullanıcı Adı
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">@</span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="kullaniciadi"
                    required
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Hesabınızın gizli olmadığından emin olun.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Sipariş Özeti</h3>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{service.name}</span>
                  <span>{selectedPackage.quantity.toLocaleString()} adet</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Toplam</span>
                  <span className="text-purple-600">₺{selectedPackage.price}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                  Geri
                </button>
                <button
                  type="submit"
                  disabled={loading || !username}
                  className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50"
                >
                  {loading ? 'İşleniyor...' : 'Sipariş Ver'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}