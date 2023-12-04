// TourGuideDashboard.js
'use client'
import React, { useState } from 'react';
import NotificationBell from '../../components/notification';
import MapView from '../../components/mapView';
const TourGuideDashboard = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', location: 'https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg', message: 'Interested in a local tour.', read: false },
    { id: 2, name: 'Alice Smith', location: 'https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg', message: 'Planning an international trip.', read: false },
    // Add more sample requests as needed
    { id: 3, name: 'Alice Smith', location: 'https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg', message: 'Planning an international trip.', read: false },
    { id: 4, name: 'Alice Smith', location: 'https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg', message: 'Planning an international trip.', read: false },
    { id: 5, name: 'Alice Smith', location: 'https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg', message: 'Planning an international trip.', read: false },
    { id: 6, name: 'Alice Smith', location: 'https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg', message: 'Planning an international trip.', read: false },

  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Tour Guide Dashboard</h1>
        <NotificationBell notifications={requests} />
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {requests.map((request) => (
            <div key={request.id} className={`bg-white rounded-lg p-4 shadow-md ${request.read ? 'opacity-60' : ''}`}>
              <h2 className="text-lg font-semibold">{request.name}</h2>
              <p className="text-sm text-gray-600">Request</p>
              <p className="mt-2">{request.message}</p>
              <button
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                onClick={() => {
                  setSelectedRequest(request);
                }}
              >
                Accept Request
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedRequest && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={() => setSelectedRequest(null)}></div>
          <div className="z-10">
            <MapView location={selectedRequest.location} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TourGuideDashboard;
