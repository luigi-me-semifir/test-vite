export default function FirstComponent({
  prenom,
  age,
  email = "Aucun email de disponible",
  isActive = true,
  tags = [],
}) {
  return (
    <div
      style={{
        border: "2px solid #3b82f6",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px 0",
        backgroundColor: isActive ? "#dbeafe" : "#f3f4f6",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0", color: "#1e40af" }}>{prenom}</h3>
      <p style={{ margin: "4px 0", color: "#4b5563" }}>{age}</p>
      <p style={{ margin: "4px 0", color: "#4b5563" }}>{email}</p>
      <p style={{ margin: "4px 0", fontWeight: "bold" }}>
        Statut: {isActive ? "✅ Actif" : "❌ Inactif"}
      </p>
      {tags.map((tag, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            backgroundColor: "#dbeafe",
            color: "#1e40af",
            padding: "4px 12px",
            borderRadius: "16px",
            fontSize: "12px",
            marginRight: "8px",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
