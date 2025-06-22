export async function loginUser(credentials) {
  // Simulate real backend delay
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          username: credentials.username,
          role: credentials.username === "admin" ? "admin" : "user",
        },
        token: "mock-jwt-token-123",
      });
    }, 800)
  );
}

export async function registerUser(data) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        user: {
          id: 2,
          username: data.username,
          role: "user",
        },
        token: "mock-jwt-token-456",
      });
    }, 800)
  );
}
