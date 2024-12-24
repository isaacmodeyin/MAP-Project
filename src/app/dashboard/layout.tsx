'use client'

import { Bell, Calendar, FileText, Home, Mail, Menu, MessageSquare, Settings, ShoppingCart, Users, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';
import Logo from '@/assets/logo.png'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-20 w-64 border-r bg-white p-4 transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:static md:translate-x-0`}
      >
        <div className="mb-6">
          <Image src={Logo} alt="MAP Logo" width={200} height={120} />
        </div>
        <nav className="space-y-1">
          <NavItem icon={<Home size={20} />} label="Dashboard" href="#" />
          <NavItem icon={<ShoppingCart size={20} />} label="Inventory" href="#" />
          <NavItem
            icon={<FileText size={20} />}
            label="Procurement"
            href="#"
            active
            badge="2"
          />
          <NavItem icon={<Users size={20} />} label="Contracts" href="#" />
          <NavItem
            icon={<Mail size={20} />}
            label="Communication"
            href="#"
            badge="12"
          />
          <NavItem
            icon={<Calendar size={20} />}
            label="Calendar"
            href="#"
            badge="3"
          />
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-4">
            {/* Hamburger Button */}
            <button
              className="text-gray-600 md:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button className="text-sm text-gray-600">← Back</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="search"
                placeholder="Search here..."
                className="h-9 w-[300px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <MessageSquare size={20} className="text-gray-600" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="User"
                width={32}
                height={32}
              />
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}

function NavItem({
  icon,
  label,
  href,
  active,
  badge,
}: {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
  badge?: string
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        {label}
      </div>
      {badge && (
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600">
          {badge}
        </span>
      )}
    </Link>
  )
}

