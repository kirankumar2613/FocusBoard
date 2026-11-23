
import './App.css'

function App() {
  return (
    <div className="app-layout">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">F</div>
          <h2>FocusBoard</h2>
        </div>

        <p className="menu-heading">MENU</p>

        <nav className="sidebar-nav">
          <a href="#overview" className="nav-link active">
            <span>▦</span> Overview
          </a>

          <a href="#tasks" className="nav-link">
            <span>✓</span> My Tasks
          </a>

          <a href="#focus-notes" className="nav-link">
            <span>✎</span> Focus Notes
          </a>
        </nav>

        <div className="sidebar-footer">
          <p>Stay focused.</p>
          <p>Make every day count.</p>
        </div>
      </aside>

      {/* Main dashboard */}
      <main className="main-content">

        <header className="topbar">
          <div>
            <p className="topbar-label">WORKSPACE</p>
            <h3>My Dashboard</h3>
          </div>
          <div className="profile-circle">K</div>
        </header>

        <div className="dashboard-content" id="overview">

          <section className="welcome-section">
            <div>
              <p className="welcome-label">YOUR PRODUCTIVITY SPACE</p>
              <h1>Welcome back!</h1>
              <p className="welcome-description">
                Plan your work, stay organized and achieve your goals.
              </p>
            </div>
          </section>

          {/* Statistics */}
          <section className="stats-grid">
            <div className="stat-card">
              <p>Total Tasks</p>
              <h2>—</h2>
              <span>All your tasks</span>
            </div>

            <div className="stat-card">
              <p>In Progress</p>
              <h2>—</h2>
              <span>Currently working</span>
            </div>

            <div className="stat-card">
              <p>Completed</p>
              <h2>—</h2>
              <span>Successfully finished</span>
            </div>

            <div className="stat-card">
              <p>Completion</p>
              <h2>—</h2>
              <span>Your overall progress</span>
            </div>
          </section>

          {/* Tasks */}
          <section className="content-card" id="tasks">
            <div className="section-heading">
              <div>
                <h2>My Tasks</h2>
                <p>Keep track of your daily activities.</p>
              </div>
            </div>

            <div className="empty-state">
              <div className="empty-icon">✓</div>
              <h3>Your tasks will appear here</h3>
              <p>Stay organized by managing your tasks in one place.</p>
            </div>
          </section>

          {/* Focus Notes */}
          <section className="content-card focus-card" id="focus-notes">
            <h2>Focus Notes</h2>
            <p>Helpful reminders to keep you productive.</p>
            <div className="focus-placeholder">
              Your focus notes will appear here.
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default App
