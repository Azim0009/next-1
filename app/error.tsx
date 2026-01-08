"use client";

export default function Error({ error, reset }: any) {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Error !</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
