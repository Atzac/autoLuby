export const TOKEN = "AUTO_LUBY_TOKEN";

export function createSession(response: string) {
  try {
    if (response) {
      window.localStorage.setItem(TOKEN, JSON.stringify(response));
      return false;
    }
    return;
  } catch (error) {
    throw new Error("format session error");
  }
}

export function getSession() {
  const local: string | null = localStorage.getItem(TOKEN);
  if (local) {
    const token = JSON.parse(local);
    return token;
  }
  return false;
}

export async function destroySession() {
  try {
    window.localStorage.clear();
    window.location.reload();
  } catch (error) {
    throw new Error("destroy session error");
  }
}
