import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Orders() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Siparişlerim</h1>
          <p className="mt-1 text-gray-600">Tüm siparişlerinizi buradan takip edebilirsiniz.</p>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-8 text-center">
            <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Henüz siparişiniz yok</h3>
            <p className="mt-2 text-gray-500">
              Instagram büyümeniz için ilk siparişinizi verin.
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
              >
                Servisleri Görüntüle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}