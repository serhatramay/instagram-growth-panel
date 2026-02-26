import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon, 
  HeartIcon, 
  EyeIcon, 
  ChatBubbleLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Gerçek Takipçiler',
    description: 'Aktif ve gerçek Instagram takipçileri',
    icon: UserGroupIcon,
  },
  {
    name: 'Hızlı Teslimat',
    description: 'Siparişleriniz 1-24 saat içinde başlar',
    icon: CheckCircleIcon,
  },
  {
    name: '7/24 Destek',
    description: 'Müşteri hizmetleri her zaman yanınızda',
    icon: ChatBubbleLeftIcon,
  },
];

const services = [
  {
    name: 'Takipçi',
    description: 'Instagram takipçi satın al',
    icon: UserGroupIcon,
    color: 'bg-pink-500',
    price: '₺29.99',
    per: '1000 takipçi',
  },
  {
    name: 'Beğeni',
    description: 'Gönderi beğenisi satın al',
    icon: HeartIcon,
    color: 'bg-red-500',
    price: '₺9.99',
    per: '1000 beğeni',
  },
  {
    name: 'İzlenme',
    description: 'Video izlenmesi satın al',
    icon: EyeIcon,
    color: 'bg-purple-500',
    price: '₺4.99',
    per: '1000 izlenme',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-600 to-blue-600 pb-16 pt-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Instagram'da
              <br />
              <span className="text-yellow-300">Hızlı Büyüme</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Takipçi, beğeni ve izlenme satın alarak Instagram hesabınızı 
              hızla büyütün. Gerçek kullanıcılar, anında teslimat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/services"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-purple-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Hemen Başla
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                Servisleri Gör <ArrowRightIcon className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Tamamlanan Sipariş</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                50,000+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Mutlu Müşteri</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                10,000+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Memnuniyet Oranı</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                %99
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Servislerimiz</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              İhtiyacınız olan her şey
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                to="/services"
                className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${service.color} rounded-full p-4`}>
                  <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 text-center">{service.description}</p>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-sm text-gray-500"> / {service.per}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Neden Biz?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              En iyi hizmet için doğru adres
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-purple-600 p-3">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hemen başlayın
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-100">
              Instagram hesabınızı büyütmek için ilk siparişinizi verin. 
              Anında teslimat, garantili sonuç.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-purple-600 shadow-sm hover:bg-gray-100"
              >
                Ücretsiz Kaydol
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                Servisleri İncele <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}