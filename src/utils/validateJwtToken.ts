export const validateJwtToken = (token: string): boolean => {
  try {
    // Check if token exists and is a string
    if (!token || typeof token !== "string") {
      return false;
    }

    // Basic JWT structure validation (header.payload.signature)
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      return false;
    }

    // Decode the payload to check expiration
    const payload = JSON.parse(atob(tokenParts[1]));

    // Check if token is expired
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};
