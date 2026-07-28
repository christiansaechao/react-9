# 🟢 Global State

### 💡 What is Global State?

**Definition:**  
Global state (also known as shared application state) is data accessible to components across your entire application tree, regardless of their parent-child relationship, without passing props down through intermediate components ("prop drilling").

**Purpose & Key Benefits:**  
1. **Eliminate Prop Drilling:** Avoids routing state and updater functions through intermediary components that don't need or use the data themselves.
2. **Single Source of Truth:** Ensures multiple components displaying or modifying the same domain data (e.g., current user, shopping cart, active theme) remain perfectly in sync.
3. **Cross-Component Communication:** Enables distant or sibling components (e.g., a "Play" button on a product card and a floating sticky audio player) to trigger and reflect changes effortlessly.
4. **App-Wide System Management:** Provides a clean pattern for managing app-wide systems like authentication sessions, notifications/toasts, user preferences, feature flags, and active routes/modals.

---

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

### 5. Persistent Audio / Media Player Bar — Medium (Proposed)

`TrackList` renders songs with "Play" buttons. `HeroBanner` has a "Featured Song of the Day" trigger button. `FloatingPlayerBar` (sticky bottom bar) renders the active track, play/pause state, and progress bar.

**Goal:** a shared player store (`currentTrack`, `isPlaying`, `volume`) triggered from playlist or hero buttons and consumed by the floating player bar. Teaches real-world audio/video global player coordination across nested UI regions.

---

### 6. Multi-Step Form / Checkout Wizard — Medium (Proposed)

`Step1Personal`, `Step2Shipping`, and `Step3Payment` form steps collect user input. `WizardHeader` shows step progress, while `SummarySidebar` continuously previews live values entered across all steps.

**Goal:** a single shared draft state (`formData`, `activeStep`) persisting form state across component mount/unmount as the user navigates back and forth between wizard steps.

---

### 7. Search & Multi-Filter Explorer — Medium/Hard (Proposed)

`SearchBar` handles text queries, `FilterSidebar` manages category checkboxes and price sliders, `ActiveFilterChips` renders removable tags for all active filters, and `ResultsGrid` renders the computed subset of items.

**Goal:** a unified search store (`query`, `categories`, `priceRange`) driven by independent filter controls, rendered into active chips, and filtering product results in real time.

---

### 8. User Settings & Feature Flags — Medium (Proposed)

`SettingsModal` toggles application defaults (`currency`, `language`, `fontSize`, `betaFeaturesEnabled`). `ProductPrice` formats currency according to global settings, `LayoutContainer` applies font scaling, and `BetaBadge` conditionally renders based on active feature flags.

**Goal:** a global preferences store sub-divided into settings categories, demonstrating how different parts of an app subscribe selectively to specific slices of app configuration.

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
