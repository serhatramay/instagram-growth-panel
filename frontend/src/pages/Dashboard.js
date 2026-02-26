import React from 'react';
import { Link } from 'react-router-dom';
import { 
  WalletIcon, 
  ShoppingBagIcon, 
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useAuthStore } from '../store/authStore';

const stats = [
  { name: 'Toplam Bakiye', value: '₺0.00', icon: WalletIcon },
  { name: 'Toplam Sipariş', value: '0', icon: ShoppingBagIcon },
  { name: 'Tamamlanan', value: '0', icon: ChartBarIcon },
];

const quickActions = [
  { name: 'Yeni Sipariş', description: 'Takipçi, beğeni veya izlenme satın al', href: '/services', color: 'bg-purple-600' },
  { name: 'Bakiye Yükle', description: 'Hesabınıza para yükleyin', href: '#', color: 'bg-green-600' },
  { name: 'Siparişlerim', description: 'Aktif ve geçmiş siparişleriniz', href: '/orders', color: 'bg-blue-600' },
];

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Hoş geldiniz, {user?.username || 'Kullanıcı'}!
          </h1>
          <p className="mt-1 text-gray-600">
            Panelinizden tüm işlemlerinizi yönetebilirsiniz.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Hızlı İşlemler</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className="relative flex items-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className={`${action.color} rounded-lg p-3`}>
                  <ArrowRightIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{action.name}</h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Son Siparişler</h2>
              <Link to="/orders" className="text-sm text-purple-600 hover:text-purple-500">
                Tümünü gör →
              </Link>
            </div>
          </div>
          <div className="px-6 py-8 text-center text-gray-500">
            Henüz siparişiniz bulunmuyor.
            <br />
            <Link to="/services" className="text-purple-600 hover:text-purple-500 mt-2 inline-block">
              İlk siparişinizi verin →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}