import { useState } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings Updated:', settings);
    // Add logic to update settings in the database
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={settings.name}
          onChange={(e) => setSettings({ ...settings, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={settings.email}
          onChange={(e) => setSettings({ ...settings, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="New Password"
          value={settings.password}
          onChange={(e) => setSettings({ ...settings, password: e.target.value })}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;