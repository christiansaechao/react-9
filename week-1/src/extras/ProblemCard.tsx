function ProblemCard(props: {
  title: string;
  method: "map" | "filter" | "reduce";
  question: string;
  dataPreview: unknown;
  children: React.ReactNode;
}) {
  const { title, method, question, dataPreview, children } = props;

  return (
    <section
      style={{
        border: "1px solid #ddd",
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
      }}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ margin: "6px 0", opacity: 0.8 }}>
        Method: <strong>{method}</strong>
      </p>
      <p style={{ margin: "10px 0" }}>{question}</p>

      {dataPreview !== undefined && (
        <details style={{ marginBottom: 12 }}>
          <summary>Data</summary>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(dataPreview, null, 2)}
          </pre>
        </details>
      )}

      <div style={{ padding: 12, background: "gray", borderRadius: 10 }}>
        {children}
      </div>
    </section>
  );
}

export default ProblemCard;
