export function parseCommand(input: string): { name: string; args: string[] } {
  const trimmed = input.trim();
  if (!trimmed) return { name: "", args: [] };
  const parts = trimmed.split(/\s+/);
  const name = parts[0].toLowerCase();
  const args = parts.slice(1);
  return { name, args };
}
