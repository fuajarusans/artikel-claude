/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Claude Agent SDK runs in Node (spawns a subprocess); keep it external to the
  // server bundle so Next does not try to trace/bundle it.
  serverExternalPackages: ["@anthropic-ai/claude-agent-sdk"],
  experimental: {
    // SSE / long-running agent stages need the Node runtime, not Edge.
  },
};

export default nextConfig;
