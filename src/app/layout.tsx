
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Bell, Calendar, FileText, Home, Mail, Menu, MessageSquare, Settings, ShoppingCart, Users, X } from 'lucide-react'
import Image from "next/image"
import Logo from '@/assets/logo.png'
import { useState } from "react";
import Layout from "./dashboard/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAP",
  description: "Created by Modeyin Isaac",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Layout>{children}</Layout>
      </body>
    </html>
  );
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
      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ${active
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