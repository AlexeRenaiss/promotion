"use client";

import { Pencil, User, Mail, Lock, Calendar } from "lucide-react";

export default function AccountInfoSection() {
  return (
    <div className="max-w-3xl mx-auto  p-6 rounded-lg my-20">
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-6 text-black">
        ACCOUNT INFORMATION
      </h2>

      {/* Info Section */}
      <div className="space-y-4">
        {/* Name */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center space-x-3">
            <User className="text-pink-400" size={18} />
            <span className="text-gray-800">John Brown</span>
          </div>
          <Pencil className="text-gray-400 cursor-pointer" size={16} />
        </div>

        {/* Email */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center space-x-3">
            <Mail className="text-pink-400" size={18} />
            <span className="text-gray-800">JBrown@gmail.com</span>
          </div>
          <Pencil className="text-gray-400 cursor-pointer" size={16} />
        </div>

        {/* Password */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center space-x-3">
            <Lock className="text-pink-400" size={18} />
            <span className="text-gray-800">********</span>
          </div>
          <Pencil className="text-gray-400 cursor-pointer" size={16} />
        </div>

        {/* Date of Birth */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Calendar className="text-pink-400" size={18} />
            <span className="text-gray-800">June 24</span>
          </div>
          <Pencil className="text-gray-400 cursor-pointer" size={16} />
        </div>
      </div>
    </div>
  );
}
