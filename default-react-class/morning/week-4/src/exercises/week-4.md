## 🟢 Global State Exercises

Each folder contains 2+ components that are currently **disconnected** — they each
hold their own local `useState`, so nothing they do affects each other. Your job
in every exercise is the same shape: **lift the state out and share it**, using
whichever global state approach you're learning (Context, Redux, Zustand, Jotai,
Recoil — doesn't matter, the exercises don't assume one).

Don't just make it compile — run the app and confirm the components actually
react to each other's changes.

---

### 1. Theme Switcher (`01-theme-switcher/`) — Basic

`Navbar` has a theme toggle button. `Page` and `Footer` are supposed to reflect
whatever theme is currently active. Right now they don't even know it changed.

**Goal:** one shared `theme` (`"light" | "dark"`) that all three components read,
and only `Navbar` writes.

---

### 2. Cart Badge (`02-cart-badge/`) — Basic

`ProductList` has "Add to cart" buttons. `Header` shows a cart badge with a count.
`CartDrawer` is supposed to list what's in the cart. All three are currently
independent islands.

**Goal:** one shared cart (list of items) that `ProductList` adds to, and
`Header`/`CartDrawer` both derive their UI from.

---

### 3. Toast Notifications (`03-toast-notifications/`) — Medium

`ActionPanel` has buttons that should trigger toast messages ("Saved!",
"Deleted!", "Error!"). `ToastTray` is supposed to render whatever toasts are
currently active and auto-dismiss them after a few seconds. Right now
`ActionPanel`'s buttons don't do anything the tray can see.

**Goal:** a shared list of toasts that any component can push to, with removal
(by id or by timeout) handled centrally.

---

### 4. Auth Session (`04-auth-session/`) — Medium

`LoginForm` "logs in" a user (just store a name/role, no real auth). `Navbar`
should greet the logged-in user and show a logout button. `ProtectedPanel`
should only render its content when someone is logged in, and show a
"please log in" message otherwise.

**Goal:** one shared session (`user: { name, role } | null`) that `LoginForm`
sets, `Navbar` reads and clears, and `ProtectedPanel` gates on.

---

## ⭐ 1-Hour Capstone: TaskFlow (`capstone-taskflow/`)

A small task board, deliberately built the same disconnected way — five
components that each manage their own slice of state and don't talk to each
other yet:

- `Sidebar` — should show live counts (total / active / done tasks) and let you
  filter the visible list.
- `Toolbar` — should let you add a new task and change the sort order.
- `TaskList` — should render the *filtered + sorted* tasks, and let you toggle
  a task done or delete it.
- `TaskDetailModal` — should open with the details of whichever task was last
  selected, from anywhere.
- `ThemeCorner` — a small light/dark toggle, same idea as exercise 1, just
  folded into the bigger app.

**Goal:** design one global store that holds `tasks`, `filter`, `sortOrder`,
`selectedTaskId`, and `theme`, and wire all five components to read/write it.
There's no starter "connect this to that" instructions beyond this list —
treat it like a real feature: decide what shape the state should take, where
actions live, and how components subscribe.

Stretch goals if you finish early:
- Persist `tasks` and `theme` to `localStorage`.
- Add an "undo delete" toast (combine with exercise 3's pattern).
