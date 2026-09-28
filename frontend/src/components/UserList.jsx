const UserList = ({ users, loading, error }) => {
  return (
    <section className="glass-panel p-8 flex flex-col gap-6">
      <h2 className="text-[1.25rem] font-semibold">System Users</h2>
      
      {loading ? (
        <div className="text-center p-12 text-slate-400 text-lg flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-white/10 rounded-full border-t-indigo-500 animate-spin"></div>
          <p>Connecting to database...</p>
        </div>
      ) : error ? (
        <div className="text-center p-12 flex flex-col items-center gap-4">
          <p className="text-red-500">{error}</p>
        </div>
      ) : users.length === 0 ? (
        <div className="text-center p-12 text-slate-400 text-lg flex flex-col items-center gap-4">
          <p>No users found. Create one to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
          {users.map((user) => (
            <div key={user._id} className="p-6 bg-white/5 border border-white/5 rounded-2xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:bg-white/10 hover:border-white/15">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400 flex items-center justify-center text-xl font-bold mb-4 text-white">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h3 className="text-[1.1rem] mb-1">{user.name}</h3>
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  {user.email}
                </p>
                {user.age && (
                  <p className="text-slate-400 text-sm flex items-center gap-2 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {user.age} years old
                  </p>
                )}
                <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold mt-4">Active</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserList;
