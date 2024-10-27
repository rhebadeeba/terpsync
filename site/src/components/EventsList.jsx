import React, { useState, useEffect } from 'react';
import './EventsList.css';

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
      fetch('http://localhost:5000/api/events')
          .then(response => response.json())
          .then(data => {
            setEvents(data);
            setFilteredEvents(data);
          })
          .catch(err => console.error(err));
  }, []);

  const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });
  };

  const handleTagChange = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);

    const filtered = tag
      ? events.filter(event => event.tags.split(", ").includes(tag))
      : events;
    setFilteredEvents(filtered);
  };

  const uniqueTags = Array.from(new Set(events.flatMap(event => event.tags.split(', '))));

  return (
      <div className="events-list">
          <h1 style={{ fontSize: '25px' }}>Events</h1>

          {/* Dropdown for selecting tags */}
          <div className="tag-filter">
              <label htmlFor="tag-select">Filter by Tag: </label>
              <select id="tag-select" value={selectedTag} onChange={handleTagChange}>
                  <option value="">All Tags</option>
                  {uniqueTags.map((tag, index) => (
                      <option key={index} value={tag}>{tag}</option>
                  ))}
              </select>
          </div>

          <ul>
              {filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                      <li key={event.id} className="event-item">
                          <h2 className="event-title">{event.name}</h2>
                          <p>Club: {event.club}</p>
                          <p>Date: {formatDate(event.date)}</p>
                          <p>Time: {event.time}</p>
                          <p>Location: {event.location}</p>
                          <p>{event.description}</p>
                          <p>Tags: {event.tags}</p>
                      </li>
                  ))
              ) : (
                  <p>No events available.</p>
              )}
          </ul>
      </div>
  );
}
