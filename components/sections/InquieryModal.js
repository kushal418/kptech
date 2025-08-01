import React from "react";

export default function InquiryModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Inquiry Form</h2>
        <form>
          <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
          <textarea placeholder="Message" className="w-full mb-2 p-2 border rounded" />
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Submit</button>
            <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
