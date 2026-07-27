export default function ActionPanel() {
  function handleSave() {
    console.log("Saved! (should show a toast)");
  }

  function handleDelete() {
    console.log("Deleted! (should show a toast)");
  }

  function handleError() {
    console.log("Something went wrong! (should show a toast)");
  }

  return (
    <section style={{ padding: 16 }}>
      <h2>Actions</h2>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete} style={{ marginLeft: 8 }}>
        Delete
      </button>
      <button onClick={handleError} style={{ marginLeft: 8 }}>
        Trigger Error
      </button>
    </section>
  );
}
