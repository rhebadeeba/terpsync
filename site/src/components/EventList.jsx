import React from 'react';

const mockEvents = [
  {
    id: 1,
    name: 'Sample Event 1',
    description: 'Description for Event 1',
    date: '2024-10-26',
    location: 'Location A',
    time: '10:00:00',
    club: 'Club A',
    tags: 'tag1, tag2'
  },
  {
    id: 2,
    name: 'Sample Event 2',
    description: 'Description for Event 2',
    date: '2024-10-26',
    location: 'Location B',
    time: '11:00:00',
    club: 'Club B',
    tags: 'tag2, tag3'
  }
];

const EventsList = () => {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {mockEvents.length > 0 ? (
          mockEvents.map(event => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Time: {event.time}</p>
              <p>Club: {event.club}</p>
              <p>Tags: {event.tags}</p>
            </li>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </ul>
    </div>
  );
};

export default EventsList;
