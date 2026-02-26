import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon, 
  HeartIcon, 
  EyeIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'followers',
    name: 'Instagram Takipçi',
    description: 'Gerçek ve aktif Instagram takipçileri. Hızlı teslimat, düşüş garantisi.',
    icon: UserGroupIcon,
    color: 'bg-pink-500',
    packages: [
      { quantity: 100, price: 4.99, per: 'adet' },
      { quantity: 500, price: 19.99, per: 'adet', popular: true },
      { quantity: 1000, price: 29.99, per: 'adet' },
      { quantity: 5000, price: 129.99, per: 'adet' },
      { quantity: 10000, price: 229.99, per: 'adet' },
    ],
    features: ['Gerçek Hesaplar', 'Düşüş Garantisi', '7/24 Destek', 'Anında Başlangıç'],
  },
  {
    id: 'likes',
    name: 'Instagram Beğeni',
    description: 'Gönderilerinize gerçek beğeniler. Organik görünüm, hızlı teslimat.',
    icon: HeartIcon,
    color: 'bg-red-500',
    packages: [
      { quantity: 100, price: 2.99, per: 'adet' },
      { quantity: 500, price: 9.99, per: 'adet', popular: true },
      { quantity: 1000, price: 14.99, per: 'adet' },
      { quantity: 5000, price: 59.99, per: 'adet' },
      { quantity: 10000, price: 99.99, per: 'adet' },
    ],
    features: ['Gerçek Beğeniler', 'Hızlı Teslimat', 'Bölünebilir', 'Gizli Gönderi Desteği'],
  },
  {
    id: 'views',
    name: 'Instagram İzlenme',
    description: 'Video, Reel ve Story izlenmeleri. Keşfet desteği, görünürlük artışı.',
    icon: EyeIcon,
    color: 'bg-purple-500',
    packages: [
      { quantity: 1000, price: 4.99, per: 'adet' },
      { quantity: 5000, price: 19.99, per: 'adet', popular: true },
      { quantity: 10000, price: 34.99, per: 'adet' },
      { quantity: 50000, price: 149.99, per: 'adet' },
      { quantity: 100000, price: 249.99, per: 'adet' },
    ],
    features: ['Video/Reel/Story', 'Keşfet Desteği', 'Dünya Geneli', 'Hızlı Başlangıç'],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-600 to-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Servislerimiz
          </h1>
          <p className="mt-4 text-lg text-purple-100">
            Instagram büyümeniz için ihtiyacınız olan tüm hizmetler
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`${service.color} rounded-xl p-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {service.features.map((feature) => (
                  <span key={feature} className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Packages */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.quantity}
                    className={`relative bg-white rounded-xl p-6 text-center border-2 ${
                      pkg.popular ? 'border-purple-500 shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                        Popüler
                      </span>
                    )}
                    <div className="text-3xl font-bold text-gray-900">
                      {pkg.quantity.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 mb-4">{pkg.per}</div>
                    <div className="text-2xl font-bold text-purple-600 mb-4">
                      ₺{pkg.price}
                    </div>
                    
                    <Link
                      to={`/order/${service.id}`}
                      className="block w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Satın Al
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Özel paket mi istiyorsunuz?
          </h2>
          <p className="text-gray-400 mb-8">
            İhtiyacınıza özel çözümler için bizimle iletişime geçin
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700"
          >
            Hesap Oluştur
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}