import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuthStore } from '../store/authStore';

export default function Layout({ children }) {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <InstagramIcon className="h-8 w-8 text-pink-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">InstaPanel</span>
              </Link>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                  Ana Sayfa
                </Link>
                <Link to="/services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                  Servisler
                </Link>
                {isAuthenticated && (
                  <>
                    <Link to="/orders" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                      Siparişlerim
                    </Link>
                    <Link to="/dashboard" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                      Panelim
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">Bakiye: <span className="font-bold text-green-600">₺{user?.balance || 0}</span></span>
                  <button
                    onClick={logout}
                    className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                  >
                    Çıkış
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/login" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                    Giriş
                  </Link>
                  <Link
                    to="/register"
                    className="rounded-md bg-purple-600 px-3 py-2 text-sm font-medium text-white hover:bg-purple-700"
                  >
                    Kaydol
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="/services" className="text-gray-400 hover:text-gray-300">Servisler</Link>
            <Link to="/login" className="text-gray-400 hover:text-gray-300">Giriş</Link>
            <Link to="/register" className="text-gray-400 hover:text-gray-300">Kaydol</Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; 2024 InstaPanel. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}