import { useEffect, useState } from "react";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked; the mailto link still works.
    }
  }

  return (
    <>
      <button type="button" className="link-btn copy-btn" onClick={copy}>
        {copied ? "Copied" : "Copy"}
      </button>
      <span className="sr-only" role="status">{copied ? "Email address copied" : ""}</span>
    </>
  );
}
