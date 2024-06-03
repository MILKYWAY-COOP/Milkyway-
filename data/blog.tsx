import React from "react";
import CodeBlock from "@/components/codeBlock";
import BT from "@/components/ui/blogTags";
import { formatDate } from "@/utils/helpers";

export enum MainTags {
  FrontEnd = "Frontend",
  BackEnd = "Backend",
  FullStack = "Fullstack",
}

const blogContent = (
  <div className="flex flex-col space-y-6 p-4 bg-gray-900 text-white">
    <BT.H2 className="text-[20px] mb-4">What is Zustand?</BT.H2>
    <BT.P className="text-[16px] font-[300] leading-relaxed  mb-4">
      Zustand is a small, fast, and scalable state management library for React.
      The word &quot;Zustand&quot; means &quot;state&quot; in German, and the
      library aims to simplify state management in React applications without
      the boilerplate and complexity of other solutions like Redux.
    </BT.P>
    <BT.H2 className="text-[20px] mb-4">How to Use Zustand?</BT.H2>
    <BT.P className="text-lg leading-relaxed">
      Zustand is easy to set up and use. You can install it using npm or yarn:
    </BT.P>
    <CodeBlock language="bash" value={`npm install zustand`} />
    <BT.P className="text-lg leading-relaxed ">
      Here&apos;s a basic example of how to use Zustand in a React application:
    </BT.P>
    <CodeBlock
      language="javascript"
      value={`import create from 'zustand';
// Create a store
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));
          
function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
          
export default function App() {
  return (
    <div>
      <h1>Counter Example with Zustand</h1>
      <Counter />
    </div>
  );
}`}
    />

    <BT.H2 className="text-xl mb-4">Use Cases for Zustand</BT.H2>
    <BT.P className="text-lg leading-relaxed">
      Zustand is versatile and can be used in various scenarios where state
      management is required. Some common use cases include:
    </BT.P>
    <BT.UL className="list-disc pl-5 mb-4">
      <BT.LI>
        Global state management for small to medium-sized applications
      </BT.LI>
      <BT.LI>Managing state in complex components or feature modules</BT.LI>
      <BT.LI>Replacing Context API for more performance and simplicity</BT.LI>
      <BT.LI>Handling local component state with more control and ease</BT.LI>
    </BT.UL>
    <BT.P className="text-[16px] leading-relaxed mt-4 mb-4">
      Zustand&apos;s simplicity and flexibility make it an excellent choice for
      managing state in React applications without the overhead of more complex
      libraries.
    </BT.P>

    <BT.H2 className="text-[16px]">Conclusion</BT.H2>
    <BT.P className="text-[16px] leading-relaxed">
      Zustand provides a simple yet powerful way to manage state in React
      applications. Its minimalistic API and straightforward approach make it a
      great alternative to other state management solutions. Whether you&apos;re
      building a small project or a larger application, Zustand can help you
      manage your state with ease.
    </BT.P>
  </div>
);

const blogs = [
  {
    id: 1,
    title: "Zustand: React state made easy",
    description: "Learn how to use Zustand for state management in React",
    content: blogContent,
    datePublished: formatDate(`2024-05-30`),
    mainTag: MainTags.FrontEnd,
    tags: ["state", "react", "zustand"],
    image: "/blog/zustand.jpg",
  },
];

export default blogs;
