// IMPORTANT for this approach:
// 1) Remove any `import React from 'react'` and other imports.
// 2) Do NOT use `export default` — just define the component globally.

function App() {
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <p className="mb-6">Sign up to get early access.</p>

      <form id="fake-form" className="space-y-3" onSubmit={(e) => {
        e.preventDefault();
        const msg = document.getElementById('msg');
        msg.textContent = 'Submitting...';
        setTimeout(() => {
          msg.textContent = 'Thanks! You’re on the list.';
          e.target.reset();
        }, 800);
      }}>
        <input type="email" required placeholder="you@example.com"
               className="w-full rounded border p-3"/>
        <button className="bg-black text-white px-4 py-2 rounded">Sign up</button>
        <p id="msg" className="text-sm h-5"></p>
      </form>
    </main>
  );
}
