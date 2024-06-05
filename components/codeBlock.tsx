import React, { useState } from "react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CSSProperties } from "react";

type CodeBlockProps = {
  language: string;
  value: string;
};

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const customStyle: CSSProperties = {
    margin: 0,
    padding: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(62, 53, 53, 0.2)",
    backdropFilter: 'blur(9px)',
  };

  return (
    <div className="relative">
      <CopyToClipboard text={value} onCopy={handleCopy}>
        <button className="absolute top-6 right-2 bg-gray-800 text-white p-1 rounded">
          {copied ? "Copied" : "Copy"}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={cb}
        customStyle={customStyle}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
